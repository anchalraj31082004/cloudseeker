import React, { useContext } from "react";
import CurrentLocation from "./CurrentLocation";
import SearchLocation from "./SearchLocation";
import { MyContext } from "../context/MyContext";

const Container = () => {
  const { loader } = useContext(MyContext);

  return (
    <>
      {loader ? (
        <div className="flex gap-5 flex-col items-center justify-center">
          <img className="w-[200px] h-[200px]" src="https://media.tenor.com/hz61LSrgeI0AAAAi/squall-scoll.gif"/>
          <p className="text-xl font-medium text-slate-200"> --- Content is Loading --- </p>
        </div>
      ) : (
        <div className="flex flex-col gap-1 text-slate-200 h-[85%] w-[65%] backdrop-filter backdrop-blur-xl shadow-2xl bg-gradient-to-br from-slate-600 to-slate-80 rounded-2xl">
          <h1 className="text-4xl w-fit text-sky-900 font-bold p-4 rounded-br-lg bg-slate-200 hover:bg-orange-300 ">
            CLOUD SEEKER
          </h1>
          <CurrentLocation />

          <SearchLocation />
        </div>
      )}
    </>
  );
};

export default Container;
