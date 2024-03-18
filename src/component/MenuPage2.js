import React, { useState } from "react";

const MenuPage2 = ({ page2Ref, displayBtn2Ref, menuList }) => {
  const [food1, setfood1] = useState(false);
  const [food2, setfood2] = useState(false);
  const [food3, setfood3] = useState(false);
  const [food4, setfood4] = useState(false);

  return (
    <div className="page2" ref={page2Ref}>
      <div>
        <div style={{ display: food1 ? "inline-block" : "flex" }}>
          <h4
            onClick={() => {
              setfood1(!food1);
            }}
          >
            {menuList == "newFood" && "奶油大蒜厚片$45"}
            {menuList == "mealSet" && (
              <span>
                日式炸豬排拼盤
                <br />
                $185 (附20元飲品)
              </span>
            )}
            {menuList == "recommend" && "德式香腸$35"}
          </h4>
          {food1 && (
            <a href={`images/${menuList}5.jpg`} target="_blank">
              <img src={`images/${menuList}5.jpg`} />
            </a>
          )}
        </div>
        <div style={{ display: food2 ? "inline-block" : "flex" }}>
          <h4
            onClick={() => {
              setfood2(!food2);
            }}
          >
            {menuList == "newFood" && "里肌豬排總匯$85"}
            {menuList == "mealSet" && (
              <span>
                美式拼盤
                <br />
                $185 (附20元飲品)
              </span>
            )}
            {menuList == "recommend" && "唐揚雞塊$50"}
          </h4>
          {food2 && (
            <a href={`images/${menuList}6.jpg`} target="_blank">
              <img src={`images/${menuList}6.jpg`} />
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
            {menuList == "newFood" && ""}
            {menuList == "mealSet" && (
              <span>
                咔啦脆雞拼盤
                <br />
                $185 (附20元飲品)
              </span>
            )}
            {menuList == "recommend" && "蛤蜊白醬義大利麵$195"}
          </h4>
          {food3 && menuList !== "newFood" && (
            <a href={`images/${menuList}7.jpg`} target="_blank">
              <img src={`images/${menuList}7.jpg`} />
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
            {menuList == "newFood" && ""}
            {menuList == "mealSet" && (
              <span>
                塔塔魚排拼盤
                <br />
                $185 (附20元飲品)
              </span>
            )}
            {menuList == "recommend" && "菲力雞排可頌$90"}
          </h4>
          {food4 && menuList !== "newFood" && (
            <a href={`images/${menuList}8.jpg`} target="_blank">
              <img src={`images/${menuList}8.jpg`} />
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
        ref={displayBtn2Ref}
      >
        全部顯示
      </button>
    </div>
  );
};

export default MenuPage2;
