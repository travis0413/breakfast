import React, { useRef, useState } from "react";
import Album from "../component/Album";
import MenuList from "../component/MenuList";
import MenuPage1 from "../component/MenuPage1";
import MenuPage2 from "../component/MenuPage2";
import MenuPage3 from "../component/MenuPage3";

const Meals = () => {
  const containRef = useRef(null);
  const imgBoxRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnRightArrowRef = useRef(null);
  const btnLeftArrowRef = useRef(null);
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const displayBtnRef = useRef(null);
  const displayBtn2Ref = useRef(null);
  const displayBtn3Ref = useRef(null);
  const [menuList, setMenuList] = useState("");

  const openHandler = () => {
    containRef.current.style.transform = "translate(50%)";
    imgBoxRef.current.style.transform = "rotateY(-180deg)";
    btnTextRef.current.style.fontSize = "0";
  };

  const turnNextPageHandler = () => {
    if (page1Ref.current.style.transform && page3Ref.current) {
      //翻到最後一頁
      page2Ref.current.style.transform = "rotateY(-180deg)";
      page2Ref.current.style.zIndex = "12";
      page2Ref.current.style.color = "rgba(0, 0, 0, 0)";
      btnRightArrowRef.current.style.display = "none";
      displayBtn2Ref.current.style.display = "none";
    } else if (imgBoxRef.current.style.transform && page2Ref.current) {
      //翻到第二頁
      page1Ref.current.style.transform = "rotateY(-180deg)";
      page1Ref.current.style.zIndex = "11";
      page1Ref.current.style.color = "rgba(0, 0, 0, 0)";
      displayBtnRef.current.style.display = "none";
      if (menuList !== "recommend") {
        btnRightArrowRef.current.style.display = "none";
      }
      setTimeout(() => {
        btnLeftArrowRef.current.style.display = "block";
      }, 2000);
    }
  };

  const turnPrePageHandler = () => {
    //最後一頁往前翻
    if (page2Ref.current.style.transform == "rotateY(-180deg)") {
      page2Ref.current.style.transform = "";
      page2Ref.current.style.zIndex = "6";
      page2Ref.current.style.color = "rgb(2, 81, 93)";
      btnLeftArrowRef.current.style.display = "block";
      displayBtn2Ref.current.style.display = "block";
      if (menuList !== "recommend") {
        btnRightArrowRef.current.style.display = "none";
      } else {
        setTimeout(() => {
          btnRightArrowRef.current.style.display = "block";
        }, 2000);
      }
    } else if (page1Ref.current.style.transform == "rotateY(-180deg)") {
      //第二頁往前翻
      page1Ref.current.style.transform = "";
      page1Ref.current.style.zIndex = "8";
      page1Ref.current.style.color = "rgb(2, 81, 93)";
      btnLeftArrowRef.current.style.display = "none";
      setTimeout(() => {
        btnRightArrowRef.current.style.display = "block";
      }, 2000);
      displayBtnRef.current.style.display = "block";
    }
  };

  return (
    <div>
      <Album title="餐點列表" />
      <MenuList
        setMenuList={setMenuList}
        menuList={menuList}
        btnRightArrowRef={btnRightArrowRef}
        page1Ref={page1Ref}
        page2Ref={page2Ref}
        page3Ref={page3Ref}
      />

      <div className="contain" ref={containRef} onClick={openHandler}>
        <div className="card">
          <div className="imgBox" ref={imgBoxRef}>
            <img
              src={require("../styles/images/bf.jpg")}
              width="100%"
              height="100%"
            />
            <button
              className="btn btn-text"
              onClick={openHandler}
              ref={btnTextRef}
            >
              Click
            </button>
          </div>
          <button
            className="btn btn-right-arrow"
            onClick={turnNextPageHandler}
            ref={btnRightArrowRef}
          >
            <img src={require("../styles/images/arrow3.png")} height="30px" />
          </button>
          <button
            className="btn btn-left-arrow"
            onClick={turnPrePageHandler}
            ref={btnLeftArrowRef}
          >
            <img src={require("../styles/images/arrow4.png")} height="30px" />
          </button>
          {(menuList == "newFood" && (
            <MenuPage1
              page1Ref={page1Ref}
              displayBtnRef={displayBtnRef}
              menuList={menuList}
            />
          )) ||
            (menuList == "mealSet" && (
              <MenuPage1
                page1Ref={page1Ref}
                displayBtnRef={displayBtnRef}
                menuList={menuList}
              />
            )) ||
            (menuList == "recommend" && (
              <MenuPage1
                page1Ref={page1Ref}
                displayBtnRef={displayBtnRef}
                menuList={menuList}
              />
            ))}
          {(menuList == "newFood" && (
            <MenuPage2
              page2Ref={page2Ref}
              displayBtn2Ref={displayBtn2Ref}
              menuList={menuList}
            />
          )) ||
            (menuList == "mealSet" && (
              <MenuPage2
                page2Ref={page2Ref}
                displayBtn2Ref={displayBtn2Ref}
                menuList={menuList}
              />
            )) ||
            (menuList == "recommend" && (
              <MenuPage2
                page2Ref={page2Ref}
                displayBtn2Ref={displayBtn2Ref}
                menuList={menuList}
              />
            ))}
          {menuList == "recommend" && (
            <MenuPage3
              page3Ref={page3Ref}
              displayBtn3Ref={displayBtn3Ref}
              menuList={menuList}
            />
          )}
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontWeight: "bold",
          fontFamily: "Ma Shan Zheng, cursive",
        }}
      >
        菜單大全
      </h1>
      <div className="real-menu">
        <a href="images/menu1.jpeg" target="_blank">
          <img src={require("../styles/images/menu1.jpeg")} />
        </a>
        <a href="images/menu2.jpeg" target="_blank">
          <img src={require("../styles/images/menu2.jpeg")} />
        </a>
      </div>
    </div>
  );
};

export default Meals;
