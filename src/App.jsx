// Importing components
import React, { useState } from "react";
import Home from './components/Homepage';
import Question from './components/Quest';
import Result from './components/Result';
import { quizData } from "./components/QuizBank";


function QuizApp() {
  const [currentComponent, setCurrentComponent] = useState('home'); // state to set the pages

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentMarks, setCurrentMarks] = useState(0);


  const goQuiz = () => {
    setCurrentComponent('question');  // function for moving to questions
  };

  const goResult = () => {
    const n = quizData.length;
    if (selectedAnswers[n - 1] === quizData[n - 1].answer) {
      setCurrentMarks(currentMarks + 1);
    }
    setCurrentComponent('result');    // function for moving to result
  };

  return (
    <>
      {currentComponent === 'home' && <Home goQuiz={goQuiz} />}               {/* props as by default all pages displays */}
      {currentComponent === 'question' && <Question
        goResult={goResult}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
        currentMarks={currentMarks}
        setCurrentMarks={setCurrentMarks}
      />}
      {currentComponent === 'result' && <Result answers={selectedAnswers} marks={currentMarks} />}
    </>
  );
}



export default QuizApp;
