import React from 'react'

function Quiz() {
  return (
     <div className=" p-10 h-screen w-full bg-[#313131]">
      <div className="bg-[#734EDC] rounded-2xl shadow-2xl h-[500px] md:h-[820px] w-full pl-6 py-6">
        <div className="bg-[#545757]  w-full h-[500px] md:h-[850px] rounded-2xl p-6 ">
         
         
          <div class="flex  items-center justify-between w-full mt-8 p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg bg-white">
              <div class="lg:flex md:flex items-center">
                <div class="md:h-12 md:w-12  lg:mb-0  md:mb-0 rounded-full mr-3 bg-[#734EDC]"></div>
                <div class="flex flex-col ">
                  <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                    question
                  </div>
                </div>
              </div>
             
            </div>
          <div class="flex flex-col md:grid md:grid-cols-2 gap-4 lg:p-4 p-2  rounded-lg m-2">
          {/* div start */}
          <div class="flex  items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg bg-white">
              <div class="lg:flex md:flex items-center">
                <div class=" md:h-12 md:w-12  lg:mb-0  md:mb-0 rounded-full mr-3 bg-[#734EDC]"></div>
                <div class="flex flex-col ">
                  <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                    option1
                  </div>
                </div>
              </div>
             
            </div>
            {/* div end */}
              {/* div start */}
              <div class="flex  items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg bg-white">
              <div class="lg:flex md:flex items-center">
                <div class=" md:h-12 md:w-12  lg:mb-0  md:mb-0 rounded-full mr-3 bg-[#734EDC]"></div>
                <div class="flex flex-col ">
                  <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                    option1
                  </div>
                </div>
              </div>
             
            </div>
            {/* div end */}
              {/* div start */}
              <div class="flex  items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg bg-white">
              <div class="lg:flex md:flex items-center">
                <div class=" md:h-12 md:w-12  lg:mb-0  md:mb-0 rounded-full mr-3 bg-[#734EDC]"></div>
                <div class="flex flex-col ">
                  <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                    option1
                  </div>
                </div>
              </div>
             
            </div>
            {/* div end */}
              {/* div start */}
              <div class="flex  items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg bg-white">
              <div class="lg:flex md:flex items-center">
                <div class=" md:h-12 md:w-12  lg:mb-0  md:mb-0 rounded-full mr-3 bg-[#734EDC]"></div>
                <div class="flex flex-col ">
                  <div class="text-sm leading-3 text-gray-700 font-bold w-full">
                    option1
                  </div>
                </div>
              </div>
             
            </div>
            {/* div end */}
          
          </div>
          <button className='h-8 md:h-12 w-[200px] mb-2 text-white font-poppins md:mb-0 rounded-full md:ml-6 bg-[#734EDC]'>NEXT</button>

          <img src="./questions.svg" alt="" className=" w-[400px] h-[400px]"></img>
        </div>  
      </div>
    </div>
  )
}

export default Quiz