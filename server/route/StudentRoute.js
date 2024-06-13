const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const StudentSchema = require("../model/StudentSchema");
const Student = mongoose.model("Student", StudentSchema);

const Auth = require("../middleware/Auth");
const { ADMIN } = require("../constant/Roles");

const StudentController = require("../controller/StudentController");

route.post(
  "/",
  (req, res, next) => Auth.Authorize(req, res, next, [ADMIN]),
  StudentController.Create
);
//Get Student
route.get("/", async (req, res) => {
  try {
    const students = await Student.find({});
    return res.status(200).json({
      count: students.length,
      data: students,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
//Get One Student
route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    return res.status(200).json(student);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
route.put(
  "/:id",
  (req, res, next) => Auth.Authorize(req, res, next, [ADMIN]),
  StudentController.Edit
);
route.delete(
  "/:id",
  (req, res, next) => Auth.Authorize(req, res, next, [ADMIN]),
  StudentController.Delete
);

module.exports = route;
