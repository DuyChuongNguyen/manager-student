const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 5555;

const db = require("./config");
db.connect();

const route = require("./route/index");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("combined"));

route(app);
app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
