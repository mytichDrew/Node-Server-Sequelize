const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/student.controllers");

router.post("/", studentCtrl.createStudent);

router.get("/", studentCtrl.getAllStudents);

router.get("/:id", studentCtrl.getStudentById);

router.put("/:id", studentCtrl.updateStudent);

router.delete("/:id", studentCtrl.deleteStudent);

module.exports = router;