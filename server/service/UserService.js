const mongoose = require("mongoose");
const { UserSchema } = require("../model/UserSchema");
const User = mongoose.model("User", UserSchema);
const SecurityUtil = require("../utils/SecurityUtil");
const UserRepository = require("../repository/UserRepository")

module.exports = {
  async Register(req) {
    const email = req.body.email;
    const user_existed = await UserRepository.FindByEmail(email);
    if (user_existed) {
      return "user_existed";
    }
    req.body.password = await SecurityUtil.Hash(req.body.password);
    const user = {
      ...req.body,
    };
    user.role = "CLIENT";
    try {
      return User.create(user);
    } catch (error) {
      return fasle;
    }
  },
};
