const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/", (req, res) => {
  const rawData = fs.readFileSync("./database.json");
  const parsedData = JSON.parse(rawData);
  res.send(parsedData);
});

router.post("/", (req, res) => {
  const body = req.body;
  //Check to see if inputs are correct
  let calculusFound = false;
  for (const course of body.courses) {
    if (course.toLowerCase() === "calculus") {
      calculusFound = true;
      break;
    }
  }

  if (calculusFound) {
    let courses = body.courses;
    let data = JSON.stringify(courses);
    fs.writeFileSync('database.json',data)

    res.send("Completed post request");
  } else {
    res.send("Does not meet criteria");
  }
});

module.exports = router;
