import React from "react";
import "./Loader.css";

interface LoaderProps {
  size?: number;
  color?: string;
  speed?: number;
  stroke?: number;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 35,
  color = "white",
  speed = 1,
  stroke = 3.5,
}) => {
  const style = {
    "--uib-size": `${size}px`,
    "--uib-color": color,
    "--uib-speed": `${speed}s`,
    "--uib-stroke": `${stroke}px`,
  } as React.CSSProperties;

  return (
    <div className="container" style={style}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
