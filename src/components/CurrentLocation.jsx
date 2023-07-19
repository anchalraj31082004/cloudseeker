import React from 'react'

const CurrentLocation = () => {
  return (
    <div className="flex flex-col gap-8 px-48 py-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-lg font-light">
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
          <div className="flex justify-between text-xl font-medium">
            <div className='flex flex-col gap-3'>
              <p className='underline underline-offset-8 decoration-2'>Humidity : 999 </p>
              <p className='underline underline-offset-8 decoration-2'>Pressure : 999 </p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='underline underline-offset-8 decoration-2'>Visibility : 999 </p>
              <p className='underline underline-offset-8 decoration-2'>Wind-Speed : 0000</p>
            </div>
          </div>
        </div>
  )
}

export default CurrentLocation