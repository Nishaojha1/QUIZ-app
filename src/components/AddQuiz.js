import React, { useContext } from "react";
import { useState } from "react";
import quizContext from "../context/quizs/quizContext";

const AddQuiz = (props) => {
  const context = useContext(quizContext);
  const { addQuiz } = context;

  const [quiz, setQuiz] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });
  const handleClick = (e) => {
    e.preventDefault(); //page doesn't get reload
    addQuiz(
      quiz.question,
      quiz.option1,
      quiz.option2,
      quiz.option3,
      quiz.option4,
      quiz.answer
    );
    setQuiz({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value }); //whatever value inside the quiz object will exist as it is but jo properties aage likhi ja rhi hai inko add ya overwrite kar dena
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add your Quiz</h2>
        <div className="mb-3 my-2">
          <label htmlFor="title" className="form-label">
            {" "}
            Question{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="question"
            name="question"
            onChange={onChange}
            value={quiz.question}
            minLength={5}
            required
            placeholder="write your Question here"
          />
        </div>

          <div className="row gx-5">
            <div className="col">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  {" "}
                  Option 1{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="option1"
                  name="option1"
                  onChange={onChange}
                  value={quiz.option1}
                  minLength={5}
                  required
                  placeholder="Enter the option1"
                />
              </div>
            </div>
            <div className="col">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  {" "}
                  Option 2{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="option2"
                  name="option2"
                  onChange={onChange}
                  value={quiz.option2}
                  minLength={5}
                  required
                  placeholder="Enter the option2"
                />
              </div>
            </div>
            <div className="col">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  {" "}
                  Option 3{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="option3"
                  name="option3"
                  onChange={onChange}
                  value={quiz.option3}
                  minLength={5}
                  required
                  placeholder="Enter the option3"
                />
              </div>
            </div>
            <div className="col">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  {" "}
                  Option 4{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="option4"
                  name="option4"
                  onChange={onChange}
                  value={quiz.option4}
                  minLength={5}
                  required
                  placeholder="Enter the option4"
                />
              </div>
            </div>
          </div>

          <div className="row">
          <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  {" "}
                  Answer of the above question{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="answer"
                  name="answer"
                  onChange={onChange}
                  value={quiz.answer}
                  minLength={5}
                  required
                  placeholder="Enter the answer"
                />
              </div>
          </div>
        

        <button
          disabled={quiz.question.length < 5 || quiz.option1.length < 3 || quiz.option2.length < 3 || quiz.option3.length < 3 || quiz.option4.length < 3 || quiz.answer.length < 3} 
          type="submit"
          className="btn btn-dark"
          onClick={handleClick}
        >
          Add Quiz
        </button>
      </div>
    </div>
  );
};

export default AddQuiz;
