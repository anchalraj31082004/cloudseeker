import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const CurrentLocation = () => {

  const {currentWeather, permission } = useContext(MyContext);

  return (
    <>
    {
      permission=== false ? (
        <div className='flex items-center justify-center h-44'>
          <p className='text-3xl font-normal text-sky-500'> --- Geolocation not available ---</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8 px-48 py-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-lg font-light">
              <span>16 july</span>
              <span>Sunday</span>
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
              <p className='underline underline-offset-8 decoration-2'>Humidity : {currentWeather?.main?.humidity} mi</p>
              <p className='underline underline-offset-8 decoration-2'>Pressure : {currentWeather?.main?.pressure} atm </p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='underline underline-offset-8 decoration-2'>Visibility : {currentWeather?.visibility} </p>
              <p className='underline underline-offset-8 decoration-2'>Wind-Speed : {currentWeather?.wind?.speed} km/hr</p>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default CurrentLocation