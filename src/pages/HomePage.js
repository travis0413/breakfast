import React, { useEffect, useState } from "react";
import Carousel from "../component/Carousel";
import NewsCard from "../component/NewsCard";
import Profile from "../component/Profile";

const HomePage = () => {
  const [changeFlex, setChangeFlex] = useState("row");
  const [reverse, setReverse] = useState("col");

  useEffect(() => {
    const appeared = document.querySelectorAll(".appeared");
    const run = document.querySelector(".running");
    const slogan = document.querySelectorAll(".slogan");
    const news = document.querySelector(".news-chi");
    const paragraph3 = document.querySelector(".paragraph3");

    //設置最新情報跟左邊標語的flex
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setChangeFlex("col");
        setReverse("row");
        paragraph3.style.backgroundSize = "120% 50%";
        run.style.display = "none";
      } else {
        setChangeFlex("row");
        setReverse("col");
        paragraph3.style.backgroundSize = "120% 150%";
        run.style.display = "block";
      }
    });
    if (window.innerWidth <= 600) {
      setChangeFlex("col");
      setReverse("row");
      paragraph3.style.backgroundSize = "120% 50%";
      run.style.display = "none";
    } else {
      setChangeFlex("row");
      setReverse("col");
      paragraph3.style.backgroundSize = "120% 150%";
      run.style.display = "block";
    }

    //當滾輪滾至各元素時各種動畫的function
    const animation = (cl, effect) => {
      window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= cl.offsetTop) {
          cl.classList.add(effect);
        } else {
          cl.classList.remove(effect);
        }
      });
    };
    //同上以外，class有複數時使用，cl是classname
    const animations = (cl, effect) => {
      window.addEventListener("scroll", () => {
        cl.forEach((cln) => {
          if (window.innerHeight + window.scrollY >= cln.offsetTop) {
            cln.classList.add(effect);
          } else {
            cln.classList.remove(effect);
          }
        });
      });
    };

    animations(appeared, "effect");
    animation(news, "effect");
    animations(slogan, "effect2");
    animation(run, "effect4");
  }, []);

  return (
    <div>
      <Carousel />
      <Profile />
      <div className="container-fluid paragraph3">
        <div className={changeFlex}>
          <div
            className={`picture ${reverse}-6 d-flex flex-column align-items-center justify-content-center`}
            style={{ marginTop: "5rem" }}
          >
            <h1 className="fs-1 appeared">美好的一天</h1>
            <p className="slogan">A great breakfast</p>
            <h1 className="fs-1 appeared">從早餐開始</h1>
            <p className="slogan">to start your day</p>
            <img
              src={require("../styles/images/removebg2.png")}
              className="running position-relative"
              style={{ width: "10vw", right: "0%" }}
            />
          </div>
          <NewsCard reverse={reverse} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
