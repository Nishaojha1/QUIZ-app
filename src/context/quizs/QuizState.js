import QuizContext from "./quizContext";
import { useState } from "react";

const QuizState = (props) => {
  const host = "http://localhost:1000"
  const quizsInitial = []
  const [quizs, setQuizs] = useState(quizsInitial)

  // Get quiz
  const getQuizs = async () => {
    // API Call 
    const response = await fetch(`${host}/api/quiz/fetchallquiz`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    
    console.log("JSON",json);
    // console.log("authToken", localStorage.getItem('token'))
   
    setQuizs(json)
  }

  // Add a Note
  const addQuiz = async (question, option1, option2, option3, option4, answer) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/quiz/addquiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({question, option1, option2, option3, option4, answer})
    });

    const quiz = await response.json();
    setQuizs(quizs.concat(quiz))
  }

  // Delete a Note
  const deleteQuiz = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/quiz/deletequiz/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    console.log(json)
    const newQuizs = quizs.filter((quiz) => { return quiz._id !== id })
    setQuizs(newQuizs)
  }

  // Edit a Note
  const editQuiz = async (id, question, option1, option2, option3, option4, answer) => {
    // API Call 
    const response = await fetch(`${host}/api/quiz/updatequiz/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({question, option1, option2, option3, option4, answer})
    });
    const json = await response.json(); 
    console.log(json)

     let newQuizs = JSON.parse(JSON.stringify(quizs))
    // Logic to edit in client
    for (let index = 0; index < newQuizs.length; index++) {
      const element = newQuizs[index];
      if (element._id === id) {
        newQuizs[index].question = question;
        newQuizs[index].option1 = option1;
        newQuizs[index].option2 = option2;
        newQuizs[index].option3 = option3;
        newQuizs[index].option4 = option4;
        newQuizs[index].answer = answer; 
        break; 
      }
    }  
    setQuizs(newQuizs);
  }

  return (
    <QuizContext.Provider value={{ quizs, addQuiz, deleteQuiz, editQuiz, getQuizs }}>
      {props.children}
    </QuizContext.Provider>
  )

}
export default QuizState;