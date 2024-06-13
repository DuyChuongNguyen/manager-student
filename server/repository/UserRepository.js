const mongoose = require("mongoose");
const { UserSchema } = require("../model/UserSchema");
const User = mongoose.model("User", UserSchema);

module.exports = {
  FindByEmail(email) {
    return User.findOne({ email }).lean();
  },
};
