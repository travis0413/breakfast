import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScrollTop = () => {
  const navigate = useNavigate();
  const [hideScrollIcon, setHideScrollIcon] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setHideScrollIcon(null);
    } else {
      setHideScrollIcon(true);
    }
  });

  return (
    <div style={{ position: "fixed", top: "80%", right: "0" }}>
      {!hideScrollIcon && (
        <button
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            border: "none",
            marginBottom: "10px",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={require("../styles/images/icon12.png")} width="50px" />
        </button>
      )}
      <br />
      <button
        style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={require("../styles/images/icon11.png")} width="50px" />
      </button>
    </div>
  );
};

export default ScrollTop;
