import React, { useRef } from "react";
import Lottie from "lottie-react";
import logo from "../assets/images/logo/logo.json";

function Preloader() {
  const preloader = {
    width: "100%",
    height: "100%",
    position: "fixed",
    top:" 0",
    bottom: "0",
    left: "0",
    right:"0",
    margin: "auto",
    "text-align":"center",
    "background-color":"#000"

  };

  return (
    <div>
      <Lottie
        animationData={logo}
        style={preloader}
      />
    </div>
  );
}
export default Preloader;