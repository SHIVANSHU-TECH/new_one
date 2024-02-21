const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use("/api/v1/post", require("./routes/postRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/event", require("./routes/eventRoutes"));
app.use("/api/v1/opp", require("./routes/opportunitiesRoutes"));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, (req, res) => {
  console.log(`app is listening on ${PORT}`);
});
