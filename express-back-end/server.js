const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const pool = require('./src/server/db');
const cors = require("cors");

// const {sendTextMsg} = require('./api/send_sms');
// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(cors());
App.use(Express.static('public'));

// Sample GET route
App.get('/', (req, res) => res.json({
  message: "Seems to work!", 
}));

//----- FORUM -----// 

// GET => get all posts 
App.get("/forum", async(req, res) => {
  try {
    const allForums = await pool.query("SELECT * FROM posts")
    res.json(allForums.rows)
  } catch (err) {
    console.log(err.message)
  }
})

// GET => get one post 
App.get("/forum/:id", async(req, res) => {
  try {
    const { id } = req.params
    const forum = await pool.query("SELECT * FROM posts WHERE id = $1", [id])
    res.json(forum.rows[0])
  } catch (err) {
    console.log(err.message)
  }
})

// POST => create a post
App.post('/forum/new', async(req, res) => {
  try {
    const postData = req.body;
    console.log("Data:", postData)
  } catch (err) {
    console.log(err);
  }
})


// UPDATE => update a post 
// DELETE => delete a post 


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty DAMN GOOD 👍`);
});