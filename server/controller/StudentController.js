const mongoose = require("mongoose");
const StudentSchema = require("../model/StudentSchema");
const Student = mongoose.model("Student", StudentSchema);
const UserSchema = require("../model/UserSchema");
const User = mongoose.model("User", UserSchema);
const { CLIENT } = require("../constant/Roles");

const StudentController = {
  async Create(req, res) {
    try {
      const { firstName, lastName, dateOfBirth, email, phoneNumber, address } =
        req.body;

      if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !email ||
        !phoneNumber ||
        !address
      ) {
        return res.status(400).send({
          message: "Send all required fields",
        });
      }

      const newStudent = {
        firstName,
        lastName,
        dateOfBirth,
        email,
        phoneNumber,
        address,
      };

      const student = await Student.create(newStudent);
      return res.status(201).send(student);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  },
  async Edit(req, res) {
    try {
      const { firstName, lastName, dateOfBirth, email, phoneNumber, address } =
        req.body;
      if (
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !email ||
        !phoneNumber ||
        !address
      ) {
        return res.status(400).send({
          message: "Send all required fields",
        });
      }
      const { id } = req.params;
      const result = await Student.findByIdAndUpdate(id, req.body);
      if (!result) {
        return res.status(400).json({ message: "Student not foud" });
      }
      return res.status(200).send({ message: "Update Sucessfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  },
  async Delete(req, res) {
    try {
      const { id } = req.params;
      const result = await Student.findByIdAndDelete(id);
      if (!result) {
        return res.status(400).json({ message: "Student not foud" });
      }
      return res.status(200).send({ message: "Student delete sucessfully" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  },
};
module.exports = StudentController;
