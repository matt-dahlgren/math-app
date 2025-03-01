import React, { useState } from "react";
import "./question_style.css"; 


const TrueFalse = ({sen}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctAnswer = true; // Change this based on the correct answer

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="quiz-container">
      <div className="left-column">
        <p>{sen}</p>
      </div>
      <div className="right-column">
        <div className="button-container">
          <button
            className={selectedAnswer === true ? "correct" : ""}
            onClick={() => handleAnswerClick(true)}
          >
            True
          </button>
          <button
            className={selectedAnswer === false ? "incorrect" : ""}
            onClick={() => handleAnswerClick(false)}
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrueFalse;
