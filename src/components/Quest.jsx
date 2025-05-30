import React, { useState } from 'react';
import { quizData } from './QuizBank';

function Question({
    goResult,
    selectedAnswers,
    setSelectedAnswers,
    currentMarks,
    setCurrentMarks
}) {
    // State to track the current question and selected answers
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // Handle option selection
    const handleOptionChange = (event) => {

        // Update selected answers array with the current selected option
        const newAnswers = [...selectedAnswers];
        newAnswers[currentQuestion] = event.target.value;
        setSelectedAnswers(newAnswers);

        console.log("Selected Answers:", newAnswers);
        console.log("Selected Answers:", selectedAnswers);
        console.log("Total Marks:", currentMarks);
    };

    const goQuestion = (event) => {
        event.preventDefault();

        // Ensure that the user has selected an answer before proceeding
        if (selectedAnswers[currentQuestion] !== undefined) {

            // To Check The Answer And Update Marks & Question No.
            if (selectedAnswers[currentQuestion] === quizData[currentQuestion].answer) {
                setCurrentMarks(prev => prev + 1);
            }
            setCurrentQuestion(currentQuestion + 1);
        }

        // alert() For Necessary Option Select
        else {
            alert("Please select an option before proceeding.");
        }
    };

    return (
        <>
            <div key={currentQuestion} className="flex h-screen py-5 m-auto bg-black">

                <div className="flex flex-col gap-y-4 items-center justify-center m-auto p-4 w-11/12
                transition-all duration-300 ease-in-out hover:scale-105
                lg:border-2 hover:shadow-[0_0_15px_10px_#e6eef0] bg-sky-300 shadow-[0_0_10px_5px_#e6eef0]">

                    <p className="font-bold hover:text-white">
                        Question # {currentQuestion + 1} / {quizData.length}
                    </p>

                    <div className="flex w-[86.17%] items-center p-4 rounded-2xl border-2 
                    bg-blue-800 border-sky-400 shadow-[0_0_10px_5px_#e6eef0] lg:w-[96%] xl:w-274">
                        <p className="text-white">{quizData[currentQuestion].question}</p>
                    </div>

                    {/* Rendering Options Dynamically */}
                    <div className="flex flex-col gap-y-4 w-11/12 lg:flex-row lg:flex-wrap lg:w-full xl:w-full">
                        {quizData[currentQuestion].options.map((option, optIndex) => (
                            <div key={optIndex}
                                className="flex gap-x-4 items-center w-11/12 m-auto bg-sky-200 p-2 rounded-3xl 
                                lg:w-110 xl:w-123 shadow-[0_0_5px_5px_#e6eef0]">

                                <input
                                    type="radio"
                                    id={`option${optIndex}`}
                                    name={`quiz${currentQuestion}`}
                                    value={option}
                                    onChange={handleOptionChange} // Handle option change
                                    checked={selectedAnswers[currentQuestion] === option}
                                    className="w-4 h-4 appearance-none border-2 rounded-full cursor-pointer
                                    border-sky-950 checked:bg-white"
                                />

                                <label htmlFor={`option${optIndex}`} className="answer">
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-x-4 justify-center">
                        <input
                            type="submit"
                            value={currentQuestion < quizData.length - 1 ? "Next" : "Result"} // Change text of button
                            onClick={currentQuestion < quizData.length - 1 ? goQuestion : goResult} // Change text of button
                            className="px-4 py-2 rounded text-white cursor-pointer bg-blue-500 hover:bg-blue-950"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}



export default Question;
