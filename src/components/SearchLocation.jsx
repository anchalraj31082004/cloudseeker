import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MyContext } from "../context/MyContext";

const SearchLocation = () => {
  const { apiData, inputHandler, outputHandler, getState, setTemp, currentTime } =
    useContext(MyContext);

  return (
    <div className="flex flex-col gap-5 mt-7 px-36">
      <div className="flex justify-evenly  items-center">
        <div className="flex gap-3 items-center">
          <input
            className="px-20 py-3 rounded-full text-black text-center text-2xl cursor-pointer accent-violet-500 active:bg-slate-200"
            type="text"
            placeholder="Search the city"
            value={getState}
            onChange={inputHandler}
          />
          <AiOutlineSearch
            className="text-5xl text-white cursor-pointer hover:text-slate-300 active:text-slate-900"
            onClick={outputHandler}
          />
        </div>
        <span className="text-2xl font-medium">{currentTime.toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-between mt-2 items-center">
        <h2 className="flex gap-2 items-baseline">
          <span className="text-4xl font-bold">{apiData?.name}</span>
          <span className="text-xl font-medium ">
            , {apiData?.sys?.country}
          </span>
        </h2>
        <h2 className="flex gap-8 items-center justify-evenly">
          <img
            src={`http://openweathermap.org/img/w/${
              apiData.weather && apiData.weather[0]?.icon
            }.png`}
            alt="weather status icon"
            style={{ width: "90px" }}
          />
          <div className="flex justify-center gap-3 items-baseline">
            <p className="text-6xl font-bold">
              {setTemp(apiData?.main?.temp)}°c
            </p>
            <p className="text-xl font-medium">
              ({apiData?.weather && apiData?.weather[0]?.description})
            </p>
          </div>
        </h2>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, #000000ab, #46494dba), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2uUZvRa-nu67K1L_XtWyUipm09J-FuMs7w&usqp=CAU')",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover",
        }}
        className="flex flex-col text-white ml-40 text-left rounded-xl max-h-[450px] max-w-[580px] gap-2 py-10  text-lg font-medium"
      >
        <p className="flex justify-between px-16">
          <span>Pressure :</span>
          <span> {apiData?.main?.pressure} atm </span>{" "}
        </p>
        <p className="flex justify-between px-16">
          <span>Humidity :</span>
          <span> {apiData?.main?.humidity} mi </span>
        </p>
        <p className="flex justify-between px-16">
          <span>Visibility :</span> <span>{apiData?.visibility}</span>
        </p>
        <p className="flex justify-between px-16">
          <span>Wind-speed :</span>
          <span>{apiData?.wind?.speed} km/hr </span>
        </p>
      </div>
    </div>
  );
};

export default SearchLocation;
