import React, { useState } from 'react';
import { json } from 'react-router-dom';
import Game from './Game';


const PlayQuizEntry = () => {

  const [message, setMessage] = useState('');
  const [seq, setSeq] = useState("")  
  const quizsInitial = []
  const [quizs, setQuizs] = useState(quizsInitial)

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    // setUpdated(message);
  };

  const fetchallquiz = async() => {
    const response = await fetch(`http://localhost:1000/api/quiz/fetchallquiznoauthentication/${message}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    console.log(json, "FETCH");
    setSeq('1')
    setQuizs(json)
  }

  console.log(seq);


  return (
    <div>
      <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>

      {/* <h2>Updated: {updated}</h2> */}

      <button onClick={fetchallquiz}>Play</button>
    </div>

    {quizs.map((quiz) => {
          return (
            <Game quiz={quiz} key={quiz._id} />
            
          );
    })}
  
    <button className={seq=='1' ? 'btn btn-primary' : 'd-none'}> SUBMIT </button>
      
    </div>
  )
}

export default PlayQuizEntry;
