import React, { useContext } from "react";
import CurrentLocation from "./CurrentLocation";
import SearchLocation from "./SearchLocation";
import { MyContext } from "../context/MyContext";

const Container = () => {
  const { loader } = useContext(MyContext);

  return (
    <>
      <div className="h-[85%] w-[65%] backdrop-filter backdrop-blur-lg shadow-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/80 rounded-2xl">
        {loader ? (
          <div className="flex gap-5 flex-col items-center justify-center w-full h-full">
            <img
              className="w-[200px] h-[200px]"
              src="https://media.tenor.com/hz61LSrgeI0AAAAi/squall-scoll.gif"
            />
            <p className="text-base font-medium text-slate-200">
              {" "}
              --- Content is Loading ---{" "}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1 text-slate-200">
            <h1 className="text-4xl w-fit text-orange-400 font-bold p-4 rounded-br-3xl border-orange-400 border-b-2 border-r-2 bg-slate-900/50 shadow-md shadow-black/70 backdrop-filter backdrop-blur-sm">
              CLOUD SEEKER
            </h1>
            <CurrentLocation />
            <SearchLocation />
          </div>
        )}
      </div>
    </>
  );
};

export default Container;
