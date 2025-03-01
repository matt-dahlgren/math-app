import React, { useState } from "react";
import "./QuizComponent.css"; 
import fgraph from "../../../../resources/fgraph.png"
import jeq from "../../../../resources/jeq.png"


const QuizComponent = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const correctAnswer = true; // Change this based on the correct answer

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="quiz-container">
      <div className="left-column">
        <img src={fgraph} alt="" />
        <img src={jeq} alt="" />
      </div>
      <div className="right-column">
        <h2>(T/F) This graph represent j(x)</h2>
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

export default QuizComponent;
