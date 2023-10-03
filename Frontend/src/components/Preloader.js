import React, { useRef } from "react";
import Lottie from "lottie-react";
import logo from "../assets/images/logo/logo.json";

function Preloader() {
  const mystyle = {
    position: "absolute",
    left: "50%",
    top: "49%",
    transform: "translate(-50%,-50%)",

  };
  const styles = {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={styles}>
      <Lottie
        animationData={logo}
        style={mystyle}
      />
    </div>
  );
}
export default Preloader;