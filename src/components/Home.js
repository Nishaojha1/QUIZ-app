import React from "react";
import AddQuiz from "./AddQuiz";
import Notes from "./Quizs";

const Home = (props) => {
const {showAlert} = props
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  );
};

export default Home;
