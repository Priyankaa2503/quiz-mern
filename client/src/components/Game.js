import React, { useEffect, useState } from "react";

const Game = ({ data, showAnswers, handleNextQuestion, handleAnswer }) => {
  const { question, answers, correct_answer } = data;
  const [timer, setTimer] = useState(30); 

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(countdown);
      handleNextQuestion(); 
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer, handleNextQuestion]);

  return (
    <div className="p-10 h-screen w-full bg-[#313131]">
      <div className="bg-[#734EDC] rounded-2xl shadow-2xl h-[500px] md:h-[820px] w-full pl-6 py-6">
        <div className="bg-[#545757] w-full h-[500px] md:h-[850px] rounded-2xl p-6">
          <div className="flex items-center justify-between w-full mt-8 p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg bg-white">
            <div className="lg:flex md:flex items-center">
              <div className="md:h-12 md:w-12 lg:mb-0 md:mb-0 rounded-full mr-3 bg-[#734EDC]"></div>
              <div className="flex flex-col">
                <button
                  className="text-[12px] md:text-sm leading-3 text-gray-700 font-bold w-full"
                  dangerouslySetInnerHTML={{ __html: question }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:p-4 p-2 rounded-lg m-2">
            {answers.map((answer, index) => {
              const bgColor = showAnswers
                ? answer === correct_answer
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-white";
              const textColor = showAnswers ? "text-black" : "text-gray-700";

              return (
                <div
                  key={index}
                  onClick={() => handleAnswer(answer)}
                  className={`flex items-center justify-between w-full h-10 md:h-16 p-2 rounded-full cursor-pointer border-2 ${bgColor} ${textColor}`}
                >
                  <div className="flex items-center">
                    <div className="md:h-12 md:w-12 lg:mb-0 md:mb-0 rounded-full mr-3 bg-[#734EDC]"></div>
                    <div className="flex flex-col">
                      <button
                        className={`p-4 text-[12px] text-center md:text-sm leading-3 font-bold w-full`}
                      >
                        {answer}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {showAnswers && (
            <button
              onClick={handleNextQuestion}
              className="h-8 md:h-12 w-[200px] mb-2 text-white font-poppins md:mb-0 rounded-full md:ml-6 bg-[#734EDC]"
              >
              Next Question
              </button>
              )}
                    <div className="flex justify-center items-center mt-4 text-white">
        <span className="mb-10 md:mb-0 text-sm md:text-lg font-bold">Timer:</span>
        <span className="mb-10 md:mb-0 text-sm md:text-lg  font-bold ml-2">{timer}s</span>
      </div>

      <img
        src="./questions.svg"
        alt=""
        className="w-0 h-0 md:w-[350px] md:h-[350px]"
      />
    </div>
  </div>
</div>
);
};

export default Game;
