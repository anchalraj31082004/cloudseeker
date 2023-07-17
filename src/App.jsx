import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const App = () => {
  const [state, setState] = useState("punjab");
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("ranchi");

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${"e8b737e5e1224bcecaa9c60086e465f6"}`;

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await fetch(apiUrl);
      const result = await resp.json();
      console.log(result);
      setApiData(result);
    };
    fetchApi();
  }, [apiUrl]);

  //convert kelvin into celcius
  const setTemp = (k) => {
    let Temp = k - 273;
    Temp = Temp.toFixed(2);
    return Temp;
  };

  // input handling
  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  //output handling
  const outputHandler = () => {
    setState(getState)
  };

  return (
    <div className=' bg-[url("https://images.unsplash.com/photo-1561553543-e4c7b608b98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")] bg-center bg-cover h-screen flex justify-center items-center'>
      <div className="flex flex-col gap-5 text-slate-200 h-[85%] w-[65%] opacity-70 backdrop-blur-2xl shadow-2xl bg-gradient-to-br from-slate-600 to-slate-80 rounded-xl">
        <h1 className="text-4xl w-fit text-sky-900 font-bold p-4 rounded-br-lg bg-slate-200 hover:bg-orange-300 ">
          CLOUD SEEKER
        </h1>
        <div className="flex flex-col gap-8 px-48 py-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-xl font-medium">
              <span>16 july</span>
              <span>Sunday</span>
            </div>
            <div className="flex gap-10 text-3xl font-bold">
              <h2 className="text-6xl font-bold">27 °c </h2>
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
          <div className="flex justify-evenly  items-center">
            <div className="flex gap-3 items-center">
              <input
                className="px-20 py-3 rounded-2xl text-black text-2xl cursor-pointer accent-violet-500 active:bg-slate-200"
                type="text"
                placeholder="Search the city"
                value={getState}
                onChange={inputHandler}
              />
              <AiOutlineSearch className="text-5xl text-white cursor-pointer active:text-slate-900" onClick={outputHandler} />
            </div>
            <span className="text-xl font-bold">HH:MM:SS</span>
          </div>
          <div className="flex justify-between mt-3">
            <h2 className="flex gap-2 items-baseline">
              <span className="text-5xl font-bold">{apiData?.name}</span>
              <span className="text-2xl font-bold ">
                , {apiData?.sys?.country}
              </span>
            </h2>
            <h2 className="flex gap-8 justify-evenly">
              <img
                src={`http://openweathermap.org/img/w/${
                  apiData.weather && apiData.weather[0]?.icon
                }.png`}
                alt="weather status icon"
                style={{width:"90px"}}
              />
              <div className="flex justify-center gap-3 items-baseline">
              <p className="text-6xl font-bold">
                {setTemp(apiData?.main?.temp)}°c
              </p>
              <p className="text-2xl font-bold">
                ({apiData?.weather && apiData?.weather[0]?.description})
              </p>
              </div>
            </h2>
          </div>
          <div className="flex flex-col text-white justify-between ml-40 text-left rounded-xl bg-[url('https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.jpg?s=612x612&w=0&k=20&c=lH73ofHt2WKtJhatw8H53DN4EfgV4ZKDEGPqO4xOPho=')] max-h-[240px] max-w-[580px] py-7 px-20 bg-cover bg-center text-lg font-extrabold">
            <p className="flex justify-between">
              <span>Pressure :</span>
              <span> {apiData?.main?.pressure} atm </span>{" "}
            </p>
            <p className="flex justify-between">
              <span>Humidity :</span>
              <span> {apiData?.main?.humidity}mi </span>
            </p>
            <p className="flex justify-between">
              <span>Visibility :</span> <span>{apiData?.visibility}</span>
            </p>
            <p className="flex justify-between">
              <span>Wind-speed :</span>
              <span>{apiData?.wind?.speed}km/hr </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
