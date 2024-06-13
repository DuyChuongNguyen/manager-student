const express = require("express");
const route = express.Router();

const SecurityController = require("../controller/SecurityController");

route.post("/register", SecurityController.Register);
route.post("/login", SecurityController.Login);

module.exports = route;
