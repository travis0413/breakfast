import React, { useState, useEffect } from "react";

const Footer = () => {
  const [row, setRow] = useState("row");
  const [col, setCol] = useState("col");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setRow("col");
        setCol("row");
      } else {
        setRow("row");
        setCol("col");
      }
    });

    if (window.innerWidth <= 700) {
      setRow("col");
      setCol("row");
    } else {
      setRow("row");
      setCol("col");
    }
  }, []);

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "rgba(0, 0,0, 0.8)",
      }}
      className="container-fluid d-flex align-items-center"
    >
      <div className={row} style={{ height: "100%", width: "100%" }}>
        <div
          className={`${col}-4 d-flex align-items-center justify-content-center`}
        >
          <img src={require("../styles/images/mark3.jpeg")} height="210px" />
        </div>
        <div
          className={`${col}-4 d-flex flex-column align-items-center justify-content-center`}
        >
          <div className="text-center">
            <a href="https://www.facebook.com/">
              <img
                src={require("../styles/images/fb.png")}
                style={{
                  height: "40px",
                }}
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src={require("../styles/images/ig.png")}
                style={{
                  height: "63px",
                }}
              />
            </a>
            <a href="https://twitter.com/">
              <img
                src={require("../styles/images/tw.png")}
                style={{
                  height: "42px",
                }}
              />
            </a>
          </div>
          <div className="text-center">
            <h3
              className="fs-4"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "sans-serif",
              }}
            >
              COPYRIGHT © 隱私權政策
            </h3>
          </div>
        </div>
        <div className={`${col}-4 customer-service`}>
          <h1
            className="fw-bolder fs-1 text-center"
            style={{
              marginTop: "1rem",
              color: "rgba(255,150,150,1)",
              fontFamily: "sans-serif",
            }}
          >
            客服專線
            <br />
            0800-xxx-xxx
          </h1>
          <p
            className="fw-bolder text-center"
            style={{
              color: "rgba(255,255,255,1)",
              fontFamily: "sans-serif",
            }}
          >
            <i
              class="fa-solid fa-map-location-dot"
              style={{ color: "lightgreen" }}
            ></i>{" "}
            地址 : 桃園縣--市--區--路
            <br />
            <i
              class="fa-solid fa-phone-volume"
              style={{ color: "lightblue" }}
            ></i>{" "}
            公司電話 : 03-xxx-xxxx
            <br />
            <i class="fa-solid fa-fax" style={{ color: "lightpink" }}></i>{" "}
            公司傳真 : 03-xxx-xxxx
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
