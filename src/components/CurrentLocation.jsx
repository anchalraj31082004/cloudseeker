import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const CurrentLocation = () => {

  const {currentWeather, permission ,currentDate} = useContext(MyContext);

  return (
    <>
    {
      permission=== false ? (
        <div className='flex flex-col items-center justify-center h-fit py-5 animate-pulse'>
          <h5 className='text-xl font-medium text-orange-300'>--- Allow Your Location --- </h5>
          <p className='text-lg font-normal text-yellow-500'>...loading...</p>
          <p className='text-xs font-thin text-yellow-300'>your current location is needed to show the realtime weather forcast</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8 px-48 py-4 border-t-2 border-b-2 rounded-3xl my-5 border-orange-400 shadow-black shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-2xl tracking-widest">
              <span>{currentDate}</span>
            </div>
            <div className="flex gap-10 items-baseline">
              <h2 className="text-5xl font-semibold text-orange-400">{currentWeather?.main?.temp}°c </h2>
              <h2 className="text-2xl tracking-widest font-medium">
                <span> {currentWeather?.name} </span>
              </h2>
            </div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default CurrentLocation