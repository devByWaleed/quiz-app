import React from "react";

function Home({ goQuiz }) {  // Props define in App.js 
  return (
    <>
      <div className="flex h-screen bg-black">
        <div className="flex flex-col gap-y-5 items-center justify-center p-10 m-auto
         bg-sky-300 shadow-[0_0_10px_5px_#e6eef0] rounded hover:text-white hover:shadow-[0_0_15px_10px_#e6eef0]">
          <h1 className="text-3xl font-bold underline">Welcome To Quiz App</h1>
          <button onClick={goQuiz} className="p-2 rounded bg-slate-300 border-none hover:bg-black text-white">Start Quiz</button>
        </div>
      </div>
    </>
  );
}

export default Home;
