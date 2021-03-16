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
