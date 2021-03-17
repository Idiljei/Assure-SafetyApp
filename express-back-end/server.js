const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const pool = require("./src/server/db");
const cors = require("cors");
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// const router  = Express.Router();

// const {sendTextMsg} = require('./api/send_sms');
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(cors());
App.use(Express.static("public"));

//Page when user is not logged in
App.get('/', (req, res) => {
  res.json({ "home": "page"})
})

//----- FORUM -----//

// GET => get all posts
App.get("/forum", async (req, res) => {
  // console.log("Forum Get Request");
  try {
    const allForums = await pool.query(
      "SELECT * FROM posts ORDER BY id DESC LIMIT 5"
    );
    res.json(allForums.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Sample GET route
App.get("/:id", async(req, res) => {
  try {
    const { id } = req.params
    const user = await pool.query("SELECT * FROM users where id = $1", [id])
    res.json(user.rows)
  } catch (error) {
    console.log(error)
  }
}
);

// App.get("/forum/:id", async(req, res) => {
//   try {
//     const { id } = req.params
//     const forum = await pool.query("SELECT * FROM posts WHERE user_id = $1", [id])
//     res.json(forum.rows)
//   } catch (err) {
//     console.log(err.message)
//   }
// })

App.post('/sms', (req, res) => {
  res.header('Content-Type', 'application/json')
  console.log("Req BOdy of Post to SMS:", req.body)
  client.messages
  .create({
    body: req.body.message,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.USER_PHONE_NUM
  })
  .then(() => {
    res.send(JSON.stringify({ success: true }))
  })
  .catch((error) => console.log(error));
});

// GET => get all posts
App.get("/forum", async (req, res) => {
  // console.log("Forum Get Request");
  try {
    const allForums = await pool.query(
      "SELECT * FROM posts ORDER BY id DESC LIMIT 5;"

    );
    res.json(allForums.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// GET => get posts for one user
// App.get("/forum/:id", async(req, res) => {
//   try {
//     const { id } = req.params
//     const forum = await pool.query("SELECT * FROM posts WHERE user_id = $1", [id])
//     res.json(forum.rows)
//   } catch (err) {
//     console.log(err.message)
//   } 
// })

// POST => create a post
App.post("/forum", async (req, res) => {
  try {
  const { user_id, title, address, description, date } = req.body;
  const postData = [user_id, title, address, description, date];
  console.log("This is the submitted data:", postData)
  
    const newForum = await pool.query(
      "INSERT INTO posts (user_id, title, address, description, date) VALUES ($1, $2, $3, $4, $5)",
      postData
    );
    res.json(newForum.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

// UPDATE => update a post
App.put("/forum/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateForum = await pool.query(
      "UPDATE posts SET description = $1 WHERE id = $2",
      [description, id]
    );
    // res.json();
  } catch (error) {
    console.log(error);
  }
});
// DELETE => delete a post
App.delete("/forum/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteForum = await pool.query("DELETE FROM posts WHERE id = $1", [
      id,
    ]);
  } catch (error) {
    console.log(error);
  }
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty DAMN GOOD 👍`
  );
});
