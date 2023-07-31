import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const CurrentLocation = () => {

  const {currentWeather, permission ,currentDate, setTemp} = useContext(MyContext);

  return (
    <>
    {
      permission=== false ? (
        <div className='flex flex-col items-center justify-center h-44'>
          <p className='text-lg font-normal text-yellow-500'> --- Geolocation not available ---</p>
          <p className='text-xs font-thin text-yellow-300'>allow your location for current weather information</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8 px-48 py-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-lg font-light">
              <span>{currentDate}</span>
            </div>
            <div className="flex gap-10 text-3xl font-bold">
              <h2 className="text-6xl font-bold">{currentWeather?.main?.temp}°c </h2>
              <h2 className="">
                <span> {currentWeather?.name} </span>
              </h2>
            </div>
          </div>
          <div className="flex justify-between text-xl font-medium">
            <div className='flex flex-col gap-3'>
              <p>Humidity : {currentWeather?.main?.humidity} mi</p>
              <p>Pressure : {currentWeather?.main?.pressure} atm </p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Visibility : {currentWeather?.visibility} </p>
              <p>Wind-Speed : {currentWeather?.wind?.speed} km/hr</p>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default CurrentLocation