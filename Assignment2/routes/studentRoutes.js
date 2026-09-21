const express = require("express");

const router = express.Router();

const students = require("../data/students");


router.get("/", (req, res) => {
    res.status(200).send(students);
});


router.get("/:id", (req, res) => {
    console.log(req.params);

    const studentData = students.find((el) => {

        return el.id == req.params.id;

    });

    if (!studentData) {

        return res.status(404).send({
            msg: "Student not found"
        });

    }

    res.status(200).send(studentData);

});



router.post("/", (req, res) => {

    const payload = req.body;

    console.log(payload);

    const stdata = students;

    console.log(stdata);

    if (!payload.name || !payload.course) {

        return res.status(400).send({
            msg: "Name and course are required"
        });

    }



    if (stdata.length == 0) {

        payload.id = 1;

    } else {

        payload.id = stdata[stdata.length - 1].id + 1;

    }

    stdata.push(payload);

    console.log(stdata);

    res.status(201).send({
        msg: "Student added successfully"
    });

});



router.put("/:id", (req, res) => {

    console.log(req.params);

    const payload = req.body;

    const stdata = students;

    if (!payload.name || !payload.course) {

        return res.status(400).send({
            msg: "Name and course are required"
        });

    }

    const student = stdata.find((el) => {

        return el.id == req.params.id;

    });

    if (!student) {

        return res.status(404).send({
            msg: "Student not found"
        });

    }

    const updateData = stdata.map((el) => {

        if (el.id == req.params.id) {

            return {
                id: el.id,
                name: payload.name,
                course: payload.course
            };

        } else {

            return el;

        }

    });

    students.length = 0;

    students.push(...updateData);

    res.status(200).send({
        msg: "Student data updated successfully"
    });

});


router.patch("/:id", (req, res) => {

    console.log(req.params);

    const payload = req.body;

    const stdata = students;

    const student = stdata.find((el) => {

        return el.id == req.params.id;

    });

    if (!student) {

        return res.status(404).send({
            msg: "Student not found"
        });

    }

    const updateData = stdata.map((el) => {

        if (el.id == req.params.id) {

            return { ...el, ...payload };

        } else {

            return el;

        }

    });

    students.length = 0;

    students.push(...updateData);

    res.status(200).send({
        msg: "Student data updated successfully"
    });

});



router.delete("/:id", (req, res) => {

    console.log(req.params);

    const stdata = students;

    const student = stdata.find((el) => {

        return el.id == req.params.id;

    });

    if (!student) {

        return res.status(404).send({
            msg: "Student not found"
        });

    }

    const deleteData = stdata.filter((el) => {

        return el.id != req.params.id;

    });

    students.length = 0;

    students.push(...deleteData);

    res.status(200).send({
        msg: "Student data deleted successfully"
    });

});


module.exports = router;