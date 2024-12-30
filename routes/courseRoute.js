const express = require("express")
const { getAllCourses, getCourseById, addCourse, updateCourse, deleteCourse } = require("../controllers/courseController")
export const router = express.Router()

router.get("/all", getAllCourses)
router.get("/:id", getCourseById)
router.post("/add", addCourse)
router.put("/update/:id", updateCourse)
router.delete("/delete/:id", deleteCourse)

