import React, { useState } from "react";
import Album from "../component/Album";
import StoreCard from "../component/StoreCard";

const Store = () => {
  // class StoreInfo {
  //   constructor(location, name, position, phone, src) {
  //     this.location = location;
  //     this.name = name;
  //     this.position = position;
  //     this.phone = phone;
  //     this.src = src;
  //   }
  // }
  // const store1 = new StoreInfo(
  //   "高雄",
  //   "高雄三誠店",
  //   "高雄市鳳山區三誠路69號",
  //   "07-768-7788",
  //   "images/store1.jpg"
  // );
  // const store2 = new StoreInfo(
  //   "高雄",
  //   "高雄重愛店",
  //   "高雄市左營區重愛路370號",
  //   "07-350-8588",
  //   "images/store2.jpg"
  // );
  // const store3 = new StoreInfo(
  //   "台南",
  //   "台南崇明店",
  //   "台南市東區崇明路589號",
  //   "06-288-0118",
  //   "images/store3.jpg"
  // );
  // const store4 = new StoreInfo(
  //   "台中",
  //   "台中福科店",
  //   "台中市西屯區福科路940號",
  //   "04-2463-6988",
  //   "images/store4.jpg"
  // );
  // const store5 = new StoreInfo(
  //   "台中",
  //   "台中漢川店",
  //   "台中市西屯區漢口路一段31號",
  //   "04-2315-2289",
  //   "images/store6.jpg"
  // );
  // const store6 = new StoreInfo(
  //   "桃園",
  //   "桃園青峰店",
  //   "桃園市大園區青峰路二段166號",
  //   "03-287-8899",
  //   "images/store5.jpg"
  // );

  const stores = [
    {
      location: "高雄",
      name: "高雄三誠店",
      position: "高雄市鳳山區三誠路69號",
      phone: "07-768-7788",
      src: "images/store1.jpg",
    },
    {
      location: "高雄",
      name: "高雄重愛店",
      position: "高雄市左營區重愛路370號",
      phone: "07-350-8588",
      src: "images/store2.jpg",
    },
    {
      location: "台南",
      name: "台南崇明店",
      position: "台南市東區崇明路589號",
      phone: "06-288-0118",
      src: "images/store3.jpg",
    },
    {
      location: "台中",
      name: "台中福科店",
      position: "台中市西屯區福科路940號",
      phone: "04-2463-6988",
      src: "images/store4.jpg",
    },
    {
      location: "台中",
      name: "台中漢川店",
      position: "台中市西屯區漢口路一段31號",
      phone: "04-2315-2289",
      src: "images/store6.jpg",
    },
    {
      location: "桃園",
      name: "桃園青峰店",
      position: "桃園市大園區青峰路二段166號",
      phone: "03-287-8899",
      src: "images/store5.jpg",
    },
    {
      location: "桃園",
      name: "桃園大華店",
      position: "桃園市桃園區民生路495-1號",
      phone: "03-336-9298",
      src: "images/store8.jpg",
    },
    {
      location: "桃園",
      name: "桃園大業店",
      position: "桃園市桃園區大業路二段173號",
      phone: "03-325-8398",
      src: "images/store9.jpg",
    },
    {
      location: "新竹",
      name: "新竹忠孝店",
      position: "新竹市東區忠孝路27巷2號",
      phone: "03-571-8288",
      src: "images/store7.jpg",
    },
  ];

  const [inputValue, setInputValue] = useState("");

  const storeFilter = () => {
    let filteredName = stores.filter((store) => {
      return store.name.match(inputValue);
    });
    return filteredName;
  };

  return (
    <div>
      <Album title="門市據點" />
      <div className="searchInput">
        <input
          className="form-control"
          type="text"
          placeholder="店名關鍵字"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <div className="stores">
        {(inputValue === "" &&
          stores.map((store) => {
            return <StoreCard store={store} />;
          })) ||
          storeFilter().map((store) => {
            return <StoreCard store={store} />;
          })}
      </div>
    </div>
  );
};

export default Store;
