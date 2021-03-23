const Express = require("express");
const app = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const pool = require("./src/server/db");
const cors = require("cors");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(cors());
app.use(Express.static("public"));

app.get("/", (req, res) => {
  res.json({ home: "page" });
});

//----- FORUM -----//

// GET => get all posts
app.get("/forum", async (req, res) => {
  // console.log("Forum Get Request");
  try {
    const allForums = await pool.query(
      "SELECT users.first_name, users.last_name, posts.id, posts.description, posts.date, posts.title, posts.address, posts.incident_type, posts.counter FROM posts JOIN users ON posts.user_id = users.id ORDER by posts.id DESC LIMIT 10;"
    );
    res.json(allForums.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/safetynetwork/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showSafetyNetwork = await pool.query(
      "SELECT a.first_name, a.last_name, a.phone_number, a.img FROM safety_networks JOIN users ON safety_networks.user_id = users.id JOIN users a ON safety_networks.sn_id = a.id WHERE users.id = $1",
      [id]
    );
    res.json(showSafetyNetwork.rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/snlocation/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const showSnLocation = await pool.query(
      "SELECT users.first_name as user, a.first_name, a.phone_number, a.current_location, a.img, a.sharing_location, a.updated_at FROM safety_networks JOIN users ON safety_networks.sn_id = users.id JOIN users a ON safety_networks.user_id = a.id WHERE users.id = $1",
      [id]
    );
    res.json(showSnLocation.rows);
  } catch (error) {
    console.log(error);
  }
});

// Sample GET route
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users where id = $1", [id]);
    res.json(user.rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/forum/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userPosts = await pool.query(
      "SELECT * FROM posts WHERE user_id = $1 ORDER BY id DESC",
      [id]
    );
    res.json(userPosts.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/sms", (req, res) => {
  res.header("Content-Type", "application/json");
  console.log("Req BOdy of Post to SMS:", req.body);
  
  client.messages
    .create({
      body: req.body.message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.USER_PHONE_NUM,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((error) => console.log(error));
});

app.post("/sms/call", (req, res) => {
  res.header("Content-Type", "application/json");
  
  client.calls
    .create({
      url: 'http://demo.twilio.com/docs/voice.xml',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.USER_PHONE_NUM,
    })
    .then(call => console.log(call.sid))
    .catch((error) => console.log(error));
});


// POST => create a post
app.post("/forum", async (req, res) => {
  try {
    const {
      user_id,
      incident_type,
      title,
      address,
      description,
      date,
    } = req.body;
    const postData = [
      user_id,
      incident_type,
      title,
      address,
      description,
      date,
    ];
    console.log("This is the submitted data:", postData);

    const newForum = await pool.query(
      "INSERT INTO posts (user_id, incident_type, title, address, description, date) VALUES ($1, $2, $3, $4, $5, $6)",
      postData
    );
    res.json(newForum.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

// Update live location status to TRUE
app.put("/home/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateStatus = await pool.query(
      "UPDATE users SET sharing_location = true, updated_at = current_timestamp WHERE id = $1",
      [id]
    );
  } catch (error) {
    console.log(error);
  }
});

app.put("/home/safe/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateStatus = await pool.query(
      "UPDATE users SET sharing_location = false, updated_at = current_timestamp WHERE id = $1",
      [id]
    );
  } catch (error) {
    console.log(error);
  }
});

//Put request for updating counter
app.put("/forum", async (req, res) => {
  const { id, counter } = req.body;
  try {
    const updateCounter = await pool.query(
      "UPDATE posts SET counter = $1 WHERE id = $2", [counter, id]
    );
  } catch (error) {
    console.log(error);
  }
});

// DELETE => delete a post
app.delete("/forum/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteForum = await pool.query("DELETE FROM posts WHERE id = $1", [
      id,
    ]);
    res.json("post was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty DAMN GOOD 👍`
  );
});
