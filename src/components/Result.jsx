import React from 'react';
import { quizData } from './QuizBank';

function Result({ answers, marks }) {
    console.log("Total Marks:", marks);
    console.log(answers);


    return (
        <>
            <div className="h-screen overflow-y-scroll bg-black">
                <div className="flex gap-y-10 flex-col justify-center p-4">

                    <span className="inline-block text-4xl font-bold text-center underline m-auto
                    bg-sky-200 border-l-4 border-r-4 border-sky-400 
                    hover:bg-sky-400 hover:border-l-4 hover:border-r-4 hover:border-sky-200 
                    hover:text-white shadow-[0_0_10px_5px_#e6eef0] transition-all duration-300 ease-in-out
                    hover:shadow-[0_0_15px_10px_#e6eef0] hover:scale-105">Quiz Result Page</span>

                    <p className="flex justify-center m-auto py-3 px-5 italic font-bold border-l-4 border-r-4 
                    border-blue-600 bg-blue-300 hover:text-white hover:bg-blue-600 
                    hover:border-l-4 hover:border-r-4 hover:border-blue-300 transition-all duration-300 ease-in-out
                    shadow-[0_0_10px_5px_#e6eef0] hover:shadow-[0_0_15px_10px_#e6eef0] hover:scale-105"
                    >Your score is {marks || 0} / {quizData.length}</p>

                    <div className="flex gap-y-4 flex-col w-11/12 m-auto">
                        {answers.map((answer, index) => (
                            <div key={index} className='p-2 border-l-4 border-r-4 transition-all duration-300 ease-in-out
                            shadow-[0_0_10px_5px_#e6eef0] hover:shadow-[0_0_15px_10px_#e6eef0] hover:scale-105
                            border-blue-800 w-11/12 bg-sky-300 hover:border-sky-300 hover:text-white hover:bg-blue-800'>
                                <p className="font-bold">Q # {index + 1}:-</p>
                                <p className="font-bold">{quizData[index].question}</p>
                                <p className="italic font-serif">Correct Answer: {quizData[index].answer}</p>
                                <p className="font-mono">Your Answer: {answer || 'Error'}</p>
                            </div>
                        ))}

                    </div>
                    <div className="text-center text-blue-600 font-bold">
                        <a className='hover:underline' href="./">Go To Homepage</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Result;
