import React, { useState } from "react";
import FormInput from "./components/FormInput";
import Error from "./components/Error";
import axios from "axios";

import config from "./config";

const App = () => {
  const [courses, setCourses] = useState(["", "", ""]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (value, courseNumber) => {
    let newCourses = [...courses];
    newCourses[courseNumber] = value;
    console.log(courses);

    setCourses(newCourses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Check to see if values submitted follow criteria
    let calculusFound = false;
    for (const course of courses) {
      if (course.toLowerCase() === "calculus") {
        calculusFound = true;
        break;
      }
    }
    if (calculusFound) {
      //Send data to backend
      try {
        await axios.post(`${config.serverURL}/courses`, {
          courses: courses,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      //Give simple error message
      setShowErrorMessage(true);
    }
  };

  return (
    <div>
      <h1>Simple Form App</h1>
      <Error
        showErrorMessage={showErrorMessage}
        setShowErrorMessage={setShowErrorMessage}
      />
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          inputName="First course"
          handleChange={handleChange}
          value={courses[0]}
          courseNumber={0}
        />
        <FormInput
          inputName="Second course"
          handleChange={handleChange}
          value={courses[1]}
          courseNumber={1}
        />
        <FormInput
          inputName="Third course"
          handleChange={handleChange}
          value={courses[2]}
          courseNumber={2}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
