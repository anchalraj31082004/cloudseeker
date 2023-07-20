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
          <img className="w-full h-full" src="https://media.tenor.com/1zUYT3BN2tYAAAAj/skirt-bunny-girl.gif"/>
          <p className="text-2xl font-medium text-slate-200"> --- Content is Loading --- </p>
        </div>
      ) : (
        <div className="flex flex-col gap-1 text-slate-200 h-[85%] w-[65%] opacity-70 backdrop-blur-2xl shadow-2xl bg-gradient-to-br from-slate-600 to-slate-80 rounded-xl">
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
