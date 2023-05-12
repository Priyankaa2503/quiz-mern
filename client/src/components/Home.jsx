import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const quiz = [
    {
      id: "1",
      name: "QUIZ 1",
    },
    {
      id: "2",
      name: "QUIZ 2",
    },
    {
      id: "3",
      name: "QUIZ 3",
    },
    {
      id: "4",
      name: "QUIZ 4",
    },
  ];
  return (
    <div className=" p-10 h-screen w-full bg-[#313131]">
      <div className="bg-[#734EDC] rounded-2xl shadow-2xl h-[500px] md:h-[820px] w-full pl-6 py-6">
        <div className="bg-[#545757] w-full h-[500px] md:h-[850px]  rounded-2xl p-6">
          <p className="font-poppins font-bold text-center text-white text-xl md:text-5xl  ">
            Select a Quiz!
          </p>
          <div className="flex flex-col md:grid md:grid-cols-2  justify-items-center  gap-6 mt-8 md:mt-4 px-6 md:px-24 ">
            {/* div start */}

            {quiz.map((quiz) => (
              <Link to="/quiz">
                <div className="flex  justify-center items-center w-full h-12 rounded-full md:w-[330px] md:h-[330px] p-2 lg:rounded-lg md:rounded-lg hover:bg-gray-100 cursor-pointer border-2  bg-white">
                  <div className="lg:flex md:flex items-center">
                    <div className="text-sm leading-3 text-gray-700 font-bold w-full">
                      {quiz.name}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* <img src="./quiz.png" alt="" classNameName="mt-24 md:hidden"></img> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
