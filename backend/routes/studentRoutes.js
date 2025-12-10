const express = require("express");
const router = express.Router();
// const studentController = require("../controllers/studentController");
const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require('../controllers/studentController');

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
