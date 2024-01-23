import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MyContext } from "../context/MyContext";

const SearchLocation = () => {
  const {
    apiData,
    inputHandler,
    outputHandler,
    getState,
    setTemp,
    currentTime,
  } = useContext(MyContext);

  const imageUrl = "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJhaW4lMjBpbiUyMGNpdHl8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="flex flex-col gap-5 mt-7 px-36">
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-slate-950/50 border-orange-300 rounded-full">
          <input
            className="px-5 py-[10px] rounded-full rounded-r-none text-orange-300 text-center text-lg cursor-pointer bg-slate-900  placeholder:text-orange-300 focus:bg-slate-950/80  focus:text-orange-200 outline-none border-none transition-all duration-300"
            type="text"
            placeholder="Search the city"
            value={getState}
            onChange={inputHandler}
          />
          <AiOutlineSearch
            className="text-5xl text-white cursor-pointer hover:text-orange-300 hover:shadow hover:border-2 hover:border-l-0 hover:border-orange-300 rounded-r-full active:text-slate-900 px-2 transition-all"
            onClick={outputHandler}
          />
        </div>
        <span className="text-3xl font-normal tracking-widest">
          {currentTime.toLocaleTimeString()}
        </span>
      </div>
      <div className="flex justify-between mt-2 items-center">
        <h2 className="flex gap-5 items-baseline border-b-2 pb-4 px-5 border-orange-400 rounded-b-xl">
          <span className="text-5xl font-bold text-orange-400">{apiData?.name}</span>
          <span className="text-lg font-bold tracking-wide">,</span>
          <span className="text-xl font-normal">
            {apiData?.sys?.country}
          </span>
        </h2>
        <h2 className="flex gap-3 items-center justify-evenly">
          <img
            src={`http://openweathermap.org/img/w/${
              apiData.weather && apiData.weather[0]?.icon
            }.png`}
            alt="weather status icon"
            style={{ width: "75px" }}
            className="animate-pulse"
          />
          <div className="flex justify-center gap-5 items-baseline border-b-2 border-orange-400  px-5 pb-4 rounded-b-xl">
            <p className="text-xl tracking-wider font-medium">
            ({apiData?.weather && apiData?.weather[0]?.description})
            </p>
            <p className="text-5xl font-bold text-orange-400">
              {setTemp(apiData?.main?.temp)}°c
            </p>
          </div>
        </h2>
      </div>
      <div 
        className={`mx-auto mt-5 text-left rounded-xl max-h-[450px] min-w-[580px] shadow-lg shadow-black/50 bg-cover bg-bottom text-lg font-medium`}
        style={{
          backgroundImage : `url(${imageUrl})`
        }}
      >
        <div className="flex flex-col gap-3  h-full w-full py-8  rounded-xl text-white bg-slate-900/70 border-2 border-orange-400">
          <p className="flex justify-between px-16 ">
            <span className="text-lg font-normal tracking-widest">Pressure </span>
            <span className="text-xl font-bold tracking-wider"> {apiData?.main?.pressure} atm </span>{" "}
          </p>
          <p className="flex justify-between px-16">
            <span className="text-lg font-normal tracking-widest">Humidity </span>
            <span className="text-xl font-bold tracking-wider"> {apiData?.main?.humidity} mi </span>
          </p>
          <p className="flex justify-between px-16">
            <span className="text-lg font-normal tracking-widest">Visibility </span> <span className="text-xl font-bold tracking-wider">{apiData?.visibility}</span>
          </p>
          <p className="flex justify-between px-16">
            <span className="text-lg font-normal tracking-widest">Wind-speed </span>
            <span className="text-xl font-bold tracking-wider">{apiData?.wind?.speed} km/hr </span>
          </p>
        </div>
      </div>
      <div className="w-full text-center border-t-2 py-4 px-5 rounded-t-xl mt-5 border-orange-400">
        Designed & Developed by <a href="https://github.com/anchalraj31082004" target="_blank" className="text-bold tracking-widest text-sky-500 hover:text-sky-600 transition-all">@ Anchal raj</a>
      </div>
    </div>
  );
};

export default SearchLocation;
