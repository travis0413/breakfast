import React, { useState } from "react";

const MenuPage1 = ({ page1Ref, displayBtnRef, menuList }) => {
  const [food1, setfood1] = useState(false);
  const [food2, setfood2] = useState(false);
  const [food3, setfood3] = useState(false);
  const [food4, setfood4] = useState(false);

  return (
    <div className="page1" ref={page1Ref}>
      <div>
        <div style={{ display: food1 ? "inline-block" : "flex" }}>
          <h4
            onClick={() => {
              setfood1(!food1);
            }}
          >
            {menuList == "newFood" && "日式炸豬排可頌$90"}
            {menuList == "mealSet" && (
              <span>
                花草檸檬雞腿拼盤
                <br />
                $185 (附20元飲品)
              </span>
            )}
            {menuList == "recommend" && "里肌豬排蛋餅$45"}
          </h4>
          {food1 && (
            <a href={`images/${menuList}1.jpg`} target="_blank">
              <img src={`images/${menuList}1.jpg`} />
            </a>
          )}
        </div>
        <div style={{ display: food2 ? "inline-block" : "flex" }}>
          <h4
            onClick={() => {
              setfood2(!food2);
            }}
          >
            {menuList == "newFood" && "法國起司吐司$45"}
            {menuList == "mealSet" && (
              <span>
                碳烤豬排拼盤
                <br />
                $185 (附20元飲品)
              </span>
            )}
            {menuList == "recommend" && "里肌豬排堡$50"}
          </h4>
          {food2 && (
            <a href={`images/${menuList}2.jpg`} target="_blank">
              <img src={`images/${menuList}2.jpg`} />
            </a>
          )}
        </div>
      </div>
      <div>
        <div
          className="bottom-alignment"
          style={{ display: food3 ? "inline-block" : "flex" }}
        >
          <h4
            onClick={(e) => {
              setfood3(!food3);
            }}
          >
            {menuList == "newFood" && "香酥雞排可頌$80"}
            {menuList == "mealSet" && (
              <span>
                碳烤雞腿排拼盤
                <br />
                $185 (附20元飲品)
              </span>
            )}
            {menuList == "recommend" && "炭烤雞腿貝果$95"}
          </h4>
          {food3 && (
            <a href={`images/${menuList}3.jpg`} target="_blank">
              <img src={`images/${menuList}3.jpg`} />
            </a>
          )}
        </div>
        <div
          className="bottom-alignment"
          style={{
            display: food4 ? "inline-block" : "flex",
          }}
        >
          <h4
            onClick={() => {
              setfood4(!food4);
            }}
          >
            {menuList == "newFood" && "蔥花蛋餅$35"}
            {menuList == "mealSet" && (
              <span>
                鬆餅/豐富吃拼盤 $195 (附20元飲品)
                <p>主餐4選1(厚切豬排,唐揚雞,日式豬排,咔啦脆雞)</p>
              </span>
            )}
            {menuList == "recommend" && "鍋燒意麵$90"}
          </h4>
          {food4 && (
            <a href={`images/${menuList}4.jpg`} target="_blank">
              <img src={`images/${menuList}4.jpg`} className="choose" />
            </a>
          )}
        </div>
      </div>

      <button
        className="btn btn-warning"
        onClick={() => {
          setfood1(true);
          setfood2(true);
          setfood3(true);
          setfood4(true);
        }}
        ref={displayBtnRef}
      >
        全部顯示
      </button>
    </div>
  );
};

export default MenuPage1;
