import React from 'react'
import CurrentLocation from './CurrentLocation'
import SearchLocation from './SearchLocation'

const Container = () => {
  return (
    <div className="flex flex-col gap-1 text-slate-200 h-[85%] w-[65%] opacity-70 backdrop-blur-2xl shadow-2xl bg-gradient-to-br from-slate-600 to-slate-80 rounded-xl">
        <h1 className="text-4xl w-fit text-sky-900 font-bold p-4 rounded-br-lg bg-slate-200 hover:bg-orange-300 ">
          CLOUD SEEKER
        </h1>
        <CurrentLocation/>
        <SearchLocation/>
      </div>
  )
}

export default Container