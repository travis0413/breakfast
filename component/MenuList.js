import React, { useEffect, useRef } from "react";

const MenuList = ({
  menuList,
  setMenuList,
  btnRightArrowRef,
  page1Ref,
  page2Ref,
  page3Ref,
}) => {
  const newFoodRef = useRef(null);
  const mealSetRef = useRef(null);
  const recommendRef = useRef(null);
  useEffect(() => {
    food("newFood", newFoodRef);
  }, []);

  let listsArray = [newFoodRef, mealSetRef, recommendRef];
  const food = (foodName, foodRef) => {
    if (menuList !== foodName) {
      setMenuList(foodName);
      listsArray.forEach((list) => {
        list.current.classList.remove("selected");
      });
      foodRef.current.classList.add("selected");
    }
  };

  return (
    <div className="meal-All-list">
      <ul>
        <li
          className="meal-lists"
          onClick={() => {
            food("newFood", newFoodRef);
            if (page1Ref.current.style.transform == "rotateY(-180deg)") {
              btnRightArrowRef.current.style.display = "none";
            }
          }}
          ref={newFoodRef}
        >
          新品上市
        </li>
        <li
          className="meal-lists"
          onClick={() => {
            food("mealSet", mealSetRef);
            if (page1Ref.current.style.transform == "rotateY(-180deg)") {
              btnRightArrowRef.current.style.display = "none";
            }
          }}
          ref={mealSetRef}
        >
          超值套餐
        </li>
        <li
          className="meal-lists"
          onClick={() => {
            food("recommend", recommendRef);
            if (page1Ref.current.style.transform == "rotateY(-180deg)") {
              btnRightArrowRef.current.style.display = "block";
            }
          }}
          ref={recommendRef}
        >
          本店推薦
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
