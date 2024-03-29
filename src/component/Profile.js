import React from "react";

const Profile = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{ color: "rgb(177, 103, 103)" }}
    >
      <img
        src={require("../styles/images/icon4.png")}
        className="position-relative"
        style={{
          height: "15vw",
          left: "-40%",
          opacity: "0.4",
          animation: "infinity2 1s linear infinite",
        }}
      />
      <h1 className="fs-1 fw-bold">歐式早午餐 最佳選擇</h1>
      <p className="fw-bold">
        Mr.里歐歐式早餐,為Mr.里歐歐式早餐創始店,創立於民國九十七年,目前已有數家分店分布於台灣南部、西部及北部
      </p>
      <p className="fw-bold">
        嚴選優質食材,專業研發創新餐點,營業時間從早到午,讓客人慢慢享受悠閒時間
      </p>
      <p className="fw-bold">
        秉持著服務的熱誠,讓客人享用精緻的餐點,以及舒適的用餐環境。
      </p>
      <img
        src={require("../styles/images/icon3.png")}
        className="position-relative effect5"
        style={{
          width: "15vw",
          right: "-40%",
          opacity: "0.4",
          animation: "infinity 1.5s linear infinite",
        }}
      />
    </div>
  );
};

export default Profile;
