import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState("Delhi");
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("Delhi");

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${"e8b737e5e1224bcecaa9c60086e465f6"}`;

//loader
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setLoader(true);
      const resp = await fetch(apiUrl);
      const result = await resp.json();
      console.log(result);
      setApiData(result);
      setLoader(false);
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
    setState(getState);
  };

  //current location

  const [currentWeather, setCurrentWeather] = useState({});
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((geoData) => {
        console.log(geoData);
        geoSearch(geoData.coords.latitude, geoData.coords.longitude);
        setPermission(true);
      })
    }
    else {
      setPermission(false);
      <p> --- Permission Denied --- </p>
    }
  },[]);

  const geoSearch = async (lat , lon) => {
    const coordsData =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${"e8b737e5e1224bcecaa9c60086e465f6"}`);
    const data = await coordsData.json();
    console.log(data);
    setCurrentWeather(data);
  }

  // current time

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const TimeInterval = setInterval(() => {
      setCurrentTime(new Date())
    },1000)
    return () => {
      clearInterval(TimeInterval);
    };
  })

  //Date

  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  const currentDate = `${date} / ${month} / ${year}`

  // const getDayName = (dateStr, locale) => {
  //   var date = new Date(dateStr);
  //   return date.toLocaleDateString(locale, {weekday:'long'});
  // }


  const contextValue = {
    state,
    getState,
    setGetState,
    setTemp,
    inputHandler,
    outputHandler,
    apiData,
    loader,
    currentWeather,
    permission,
    currentTime,
    currentDate,
  };

  return (
    <MyContext.Provider value={contextValue}>
        {children}
    </MyContext.Provider>
  );
};
