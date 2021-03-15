const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const pool = require("./src/server/db");
const cors = require("cors");
// const router  = Express.Router();

// const {sendTextMsg} = require('./api/send_sms');
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(cors());
App.use(Express.static("public"));

// Sample GET route
App.get("/", (req, res) =>
  res.json({
    message: "Seems to work!",
  })
);

//----- FORUM -----//

// GET => get all posts
App.get("/forum", async (req, res) => {
  console.log("Forum Get Request");
  try {
    const allForums = await pool.query("SELECT * FROM posts");
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
App.post("/forum/new", async(req, res) => {
  try {
    console.log(req.body)
    const { user_id, title, address, description, created_at } = req.body;
    const postData = [user_id, title, address, description, created_at];
    const newForum = await pool.query(
      "INSERT INTO posts (user_id, title, address, description, created_at) VALUES ($1, $2, $3, $4, $5)", postData
    );
  } catch (err) {
    console.log(err);
  }
});

// UPDATE => update a post
// DELETE => delete a post

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty DAMN GOOD 👍`
  );
});
