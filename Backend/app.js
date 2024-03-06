const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// middleware 
app.use("/api/v1/post", require("./routes/postRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/event", require("./routes/eventRoutes"));
app.use("/api/v1/opp", require("./routes/opportunitiesRoutes"));



app.get("/", (req, res) => {
  res.send("Home page");
});

module.exports = app;