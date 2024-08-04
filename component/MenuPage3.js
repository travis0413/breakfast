import React, { useState } from "react";

const MenuPage3 = ({ page3Ref, displayBtn3Ref, menuList }) => {
  const [food1, setfood1] = useState(false);
  const [food2, setfood2] = useState(false);
  const [food3, setfood3] = useState(false);
  const [food4, setfood4] = useState(false);

  return (
    <div className="page3" ref={page3Ref}>
      <div>
        <div style={{ display: food1 ? "inline-block" : "flex" }}>
          <h4
            onClick={() => {
              setfood1(!food1);
            }}
          >
            {menuList == "recommend" && (
              <span>
                香煎雞腿拼盤
                <br />
                $195 (附20元飲品)
              </span>
            )}
          </h4>
          {food1 && menuList == "recommend" && (
            <a href={`images/${menuList}9.jpg`} target="_blank">
              <img src={require(`../styles/images/${menuList}9.jpg`)} />
            </a>
          )}
        </div>
        <div style={{ display: food2 ? "inline-block" : "flex" }}>
          <h4
            onClick={() => {
              setfood2(!food2);
            }}
          >
            {menuList == "recommend" && "美式牛肉起司總匯$110"}
          </h4>
          {food2 && menuList == "recommend" && (
            <a href={`images/${menuList}10.jpg`} target="_blank">
              <img src={require(`../styles/images/${menuList}10.jpg`)} />
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
            {menuList == "recommend" && "奶油乳酪焗烤$65"}
          </h4>
          {food3 && menuList == "recommend" && (
            <a href={`images/${menuList}11.jpg`} target="_blank">
              <img src={require(`../styles/images/${menuList}11.jpg`)} />
            </a>
          )}
        </div>
        <div
          className="bottom-alignment"
          style={{ display: food4 ? "inline-block" : "flex" }}
        >
          <h4
            onClick={() => {
              setfood4(!food4);
            }}
          >
            {menuList == "recommend" && "蘋果蔬果起司丹麥$70"}
          </h4>
          {food4 && menuList == "recommend" && (
            <a href={`images/${menuList}12.jpg`} target="_blank">
              <img src={require(`../styles/images/${menuList}12.jpg`)} />
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
        ref={displayBtn3Ref}
      >
        全部顯示
      </button>
    </div>
  );
};

export default MenuPage3;
