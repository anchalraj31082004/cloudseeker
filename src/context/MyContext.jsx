import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState("punjab");
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("punjab");

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
    setState(getState);
  };

  const contextValue = {
    state,
    getState,
    setGetState,
    setTemp,
    inputHandler,
    outputHandler,
    apiData,
  };

  return (
    <MyContext.Provider value={contextValue}>
        {children}
    </MyContext.Provider>
  );
};
