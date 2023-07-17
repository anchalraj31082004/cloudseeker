import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const App = () => {
  return (
    <div className=' bg-[url("https://images.unsplash.com/photo-1561553543-e4c7b608b98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")] bg-center bg-cover h-screen flex justify-center items-center'>
      <div className="flex flex-col gap-5 text-slate-200 h-[85%] w-[65%] opacity-70 backdrop-blur-2xl shadow-2xl bg-gradient-to-br from-slate-600 to-slate-80 rounded-xl">
        <h1 className="text-4xl w-fit text-sky-900 font-bold p-4 rounded-br-lg bg-slate-200 ">
          CLOUD SEEKER
        </h1>
        <div className="flex flex-col gap-8 px-48 py-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-xl font-medium">
              <span>16 july</span>
              <span>Sunday</span>
            </div>
            <div className="flex gap-10 text-3xl font-bold">
              <h2 className="text-6xl font-bold">27 °c</h2>
              <h2 className="flex flex-col">
                <span>Ranchi , </span>
                <span>IN</span>
              </h2>
            </div>
          </div>
          <div className="flex justify-between text-2xl font-semibold">
            <div>
              <p>Humidity : </p>
              <p>Pressure : </p>
            </div>
            <div>
              <p>Visibility : </p>
              <p>Wind-Speed :</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-10 px-36">
          <div className="flex justify-between px-40 gap-16 items-center">
            <div className="flex gap-3 items-center">
              <input
                className="px-28 py-3 rounded-2xl text-2xl"
                type="text"
                placeholder="Search the city"
              />
              <AiOutlineSearch className="text-5xl text-white" />
            </div>
            <span className="text-xl font-bold">HH:MM:SS</span>
          </div>
          <div className="flex justify-between mt-4">
            <h2 className="flex gap-5 text-2xl font-bold ">
              <span>Ranchi , </span>
              <span>IN</span>
            </h2>
            <h2 className="flex gap-10">
              <p className="text-2xl font-bold">Icon</p>
              <p className="text-6xl font-bold">27 °c</p>
              <p className="text-2xl font-bold">Haze</p>
            </h2>
          </div>
          <div className="flex flex-col text-white justify-between ml-40 text-left rounded-xl bg-[url('https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.jpg?s=612x612&w=0&k=20&c=lH73ofHt2WKtJhatw8H53DN4EfgV4ZKDEGPqO4xOPho=')] min-h-[180px] max-w-[620px] py-5 px-20 bg-cover bg-center text-lg font-extrabold">
            <p className="flex justify-between">
              <span>Pressure :</span>
              <span> 00 atm </span>{" "}
            </p>
            <p className="flex justify-between">
              <span>Humidity :</span>
              <span> 00 mi </span>
            </p>
            <p className="flex justify-between">
              <span>Visibility :</span> <span>00 </span>
            </p>
            <p className="flex justify-between">
              <span>Wind-speed :</span>
              <span>00 km/hr </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
