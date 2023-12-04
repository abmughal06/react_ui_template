/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import MyImage from "./images/image.png";

function App() {
  return (
    <div className=" text-white w-full">
      <div className="flex bg-primary  yellow-gradient-top ">
        {/* hide this div on molie */}

        {/* Left div start */}
        <div className=" lg:w-1/2 p-6">
          <div className=" flex items-center justify-center">
            {/* Text div */}
            <div className=" text-center flex flex-col items-center justify-center h-screen max-w-xl">
              {/* Main Text */}
              <MainText />
              <div className="lg:hidden">
                <RightDiv />
              </div>
              {/* Buttons  */}
              <Buttons />
            </div>
          </div>
        </div>
        {/* Left div ends */}

        {/* right div start */}

        <div className=" w-full hidden lg:block lg:w-1/2 p-6 yellow-gradient-bottom">
          {/* show this div on molie */}
          <RightDiv />
        </div>

        {/* right div ends */}
      </div>
    </div>
  );
}

function RightDiv() {
  return (
    <div className="flex flex-col justify-center lg:h-screen  ">
      <p className="text-sm font-bold mb-2 text-start pt-10 lg:pt-0">
        BOLD AND CAPITALIZE SUBTITLE
      </p>
      <div className="relative w-fit">
        <img src={MyImage} className=" border-[#E5A507] rounded-2xl border-4" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
        >
          <path
            d="M27.5 0C12.32 0 0 12.32 0 27.5C0 42.68 12.32 55 27.5 55C42.68 55 55 42.68 55 27.5C55 12.32 42.68 0 27.5 0ZM22 39.875V15.125L38.5 27.5L22 39.875Z"
            fill="#E5A507"
          />
        </svg>
      </div>
      <div className="mt-4 max-w-2xl text-start">
        {/* Display on small screen */}
        <p className="text-[#E5A507] text-3xl font-bold my-4 lg:hidden">
          Everything Covered
        </p>
        {/* Display on larger screen */}

        <p className="text-[#E5A507] text-[32px] font-bold my-2 hidden lg:block">
          We Cover it All{" "}
        </p>
        <div className=" text-[20px] hidden lg:block font-normal leading-6">
          Our team comprises more than skilled individuals. We work together as
          a creative ensemble. From Netflix actors to talented copywriters,
          sound engineers, and interior designers – we’ve got every aspect
          covered to elevate your brand to its next, best level.
        </div>
        <div className="text-[16px] lg:hidden font-medium">
          Netflix actors, journalists, models, announcers, copywriters, sound
          engineers, colorists, videographers, and even interior designers.
        </div>
      </div>
    </div>
  );
}
// lg:py-[12px] lg:px-[33px] py-[12px] px-[18px]
function Buttons() {
  return (
    <div className="flex gap-4 mt-8 text-[13px] md:text-lg lg:text-2xl text-start font-semibold lg:font-bold">
      <div className="py-[12px] px-[18px]  lg:py-[15px] lg:px-[33px]  gap-3 lg:gap-4  flex  items-center bg-[#EB025E] rounded-full">
        <svg
          className="w-7 lg:w-10 h-7 lg:h-10"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM16 29V11L28 20L16 29Z"
            fill="white"
          />
        </svg>
        <p className="font-bold">Watch Our Actors</p>
      </div>
      <div className=" items-center flex gap-3 lg:gap-4   bg-[#02AD53] py-[12px] px-[18px]  lg:py-[15px] lg:px-[33px]  rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 lg:w-9 h-7 lg:h-9 pt-[4px] lg:hidden"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M36 0H4C1.8 0 0.02 1.8 0.02 4L0 40L8 32H36C38.2 32 40 30.2 40 28V4C40 1.8 38.2 0 36 0ZM10 14H30C31.1 14 32 14.9 32 16C32 17.1 31.1 18 30 18H10C8.9 18 8 17.1 8 16C8 14.9 8.9 14 10 14ZM22 24H10C8.9 24 8 23.1 8 22C8 20.9 8.9 20 10 20H22C23.1 20 24 20.9 24 22C24 23.1 23.1 24 22 24ZM30 12H10C8.9 12 8 11.1 8 10C8 8.9 8.9 8 10 8H30C31.1 8 32 8.9 32 10C32 11.1 31.1 12 30 12Z"
            fill="white"
          />
        </svg>
        <p className=" ">Let's Chat</p>
      </div>
    </div>
  );
}

function MainText() {
  return (
    <p className="text-center text-4xl lg:text-5xl font-bold leading-tight">
      Commercial <span className="text-[#E5A507]"> Videos</span> <br />
      and <span className="text-[#E5A507]">Photos</span> to{" "}
      <span className="text-[#E5A507]">Boost</span> <br /> 
      Your <span className="text-[#E5A507]">Bussiness</span>
    </p>
  );
}

export default App;
