const mongoose = require("mongoose");
const UserSchema = require("../model/UserSchema");
const User = mongoose.model("User", UserSchema);
const UserService = require("../service/UserService");
const UserRepository = require("../repository/UserRepository");
const SecurityUtil = require("../utils/SecurityUtil");
const JWT = require("../utils/JWT");

const SecurityController = {
  async Register(req, res) {
    const register = await UserService.Register(req);
    console.log(register);
    if (register === "user_existed") {
      return res.status(200).json({
        message: `Account already exists with email: ${req.body.email}`,
        error: "Email is taken already",
      });
    } else if (register) {
      return res.status(200).json({ message: "created successfully" });
    }
    return res.status(200).json({ error: "Creating failed" });
  },
  async Login(req, res) {
    const { email, password } = req.body;
    const user = await UserRepository.FindByEmail(email);
    if (user && (await SecurityUtil.Compare(password, user.password))) {
      const token = JWT.Create({
        id: user._id,
        email: user.email,
        role: user.role,
      });
      res.cookie("user_token", token, { path: "/" });
      return res.status(200).json({
        token,
        role: user.role,
        message: "Login success",
      });
    }
    return res
      .status(200)
      .json({ message: "Not found user", error: "Not found user" });
  },
};
module.exports = SecurityController;
