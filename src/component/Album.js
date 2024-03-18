import React, { useState } from "react";
import abg1 from "../styles/abg1.jpg";
import abg2 from "../styles/abg2.jpg";
import abg3 from "../styles/abg3.jpg";

const Album = ({ title }) => {
  const [bg, setBg] = useState(abg1);
  setTimeout(() => {
    if (bg === abg1) {
      setBg(abg2);
    } else if (bg === abg2) {
      setBg(abg3);
    } else if (bg === abg3) {
      setBg(abg1);
    }
  }, 3000);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="album" style={{ backgroundImage: `url(${bg})` }}>
        <div className="cover">
          <h1 className="fs-1">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Album;
