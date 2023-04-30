import React from "react";
import TroikaContainer from "../components/troikaDemo";

const Index = () => {
  return (
    <div className="w-[100%] h-[100vh] flex overflow-hidden relative ">
      <TroikaContainer />
      <div
        className="absolute bg-[#ffffff54] px-[10px] py-[14px] text-[14px] font-medium  top-0 left-0 w-[200px] "
        style={{
          zIndex: 100000,
        }}
        id="react-dat-gui-portal"
      ></div>
    </div>
  );
};

export default Index;
