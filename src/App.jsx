import React from "react";
import Container from "./components/Container";
import bgImage from './assets/bgImage.jpg'

const App = () => {

  return (
    <div 
      style={{
        backgroundImage : `url(${bgImage})`
      }}
      className={` bg-center bg-cover h-screen flex justify-center items-center bg-no-repeat`}
    >
      <Container/>
    </div>
  );
};

export default App;
