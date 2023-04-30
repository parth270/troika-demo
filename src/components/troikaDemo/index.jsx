import React, { useState } from "react";
import CityGrid from "./example";

const TroikaContainer = () => {
  const [dimensions, setDimensions] = useState({
    w: 0,
    h: 0,
  });

  React.useEffect(() => {
    const resize = (e) => {
      setDimensions({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    };
    resize();
    window.addEventListener("resize", resize, false);
  });
  return (
    <CityGrid
      width={dimensions.w}
      height={dimensions.h}
      stats={true}
      vr={false}
    />
  );
};

export default TroikaContainer;
