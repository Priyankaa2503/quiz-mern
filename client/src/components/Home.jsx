import React from "react";

function Home() {
  return (
    <div className=" p-10 h-screen w-full bg-[#313131]">
      <div className="bg-[#734EDC] rounded-2xl shadow-2xl h-[500px] md:h-[820px] w-full pl-6 py-6">
        <div className="bg-[#545757] w-full h-[500px] md:h-[850px]  rounded-2xl p-6">
          <p className="font-poppins font-bold text-center text-white text-xl md:text-5xl  ">
            Select a Quiz!
          </p>
          <div class="flex flex-col md:grid md:grid-cols-2  justify-items-center  gap-6 mt-8 md:mt-4 px-6 md:px-24 ">
            {/* div start */}
            <div class="flex  justify-center items-center w-full h-12 rounded-full md:w-[330px] md:h-[330px] p-2 lg:rounded-lg md:rounded-lg hover:bg-gray-100 cursor-pointer border-2  bg-white">
              <div class="lg:flex md:flex items-center">
                <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                  quiz1
                </div>
              </div>
            </div>
            {/* div end */}
            <div class="flex  justify-center items-center w-full h-12 rounded-full md:w-[330px] md:h-[330px] p-2 lg:rounded-lg md:rounded-lg hover:bg-gray-100 cursor-pointer border-2  bg-white">
              <div class="lg:flex md:flex items-center">
                <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                  quiz1
                </div>
              </div>
            </div>
            {/* div end */}
            <div class="flex  justify-center items-center w-full h-12 rounded-full md:w-[330px] md:h-[330px] p-2 lg:rounded-lg md:rounded-lg hover:bg-gray-100 cursor-pointer border-2  bg-white">
              <div class="lg:flex md:flex items-center">
                <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                  quiz1
                </div>
              </div>
            </div>
            {/* div end */}
            <div class="flex  justify-center items-center w-full h-12 rounded-full md:w-[330px] md:h-[330px] p-2 lg:rounded-lg md:rounded-lg hover:bg-gray-100 cursor-pointer border-2  bg-white">
              <div class="lg:flex md:flex items-center">
                <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                  quiz1
                </div>
              </div>
            </div>
            {/* div end */}
          </div>

          {/* <img src="./quiz.png" alt="" className="mt-24 md:hidden"></img> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
