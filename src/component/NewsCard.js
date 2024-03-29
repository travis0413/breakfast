import React, { useEffect, useState } from "react";
import card1 from "../styles/images/open.jpg";
import card2 from "../styles/images/discount2.jpg";
import card3 from "../styles/images/discount.jpg";

const NewsCard = ({ reverse }) => {
  const [card, setCard] = useState(card1);
  const [collapse, setCollapse] = useState(null);
  useEffect(() => {}, []);

  return (
    <div
      className={`newsDiv d-flex flex-column align-items-center justify-content-center ${reverse}-6`}
    >
      <h3 className="news-chi fs-1 position-relative">最新情報</h3>
      <h3
        className="news fs-1"
        style={{
          fontFamily: "Nabla, system-ui",
          fontVariationSettings: "EDPT 100, EHLT 12",
          animation: "infinity3 2s linear infinite",
        }}
      >
        LEO News
      </h3>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={card}
          class="card-img-top"
          alt="..."
          style={{ height: "150px" }}
        />
        <button
          onClick={() => {
            if (card == card1) {
              setCard(card2);
            } else if (card == card2) {
              setCard(card3);
            } else if (card == card3) {
              setCard(card1);
            }
          }}
          className="primary position-absolute"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            border: "none",
            top: "50%",
          }}
        >
          <img
            src={require("../styles/images/arrow.png")}
            height="50px"
            className="arrow"
          />
        </button>
        <button
          onClick={() => {
            if (card == "images/open.jpg") {
              setCard("images/discount.jpg");
            } else if (card == "images/discount.jpg") {
              setCard("images/discount2.jpg");
            } else if (card == "images/discount2.jpg") {
              setCard("images/open.jpg");
            }
          }}
          className="primary position-absolute"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            border: "none",
            top: "50%",
            right: "0",
          }}
        >
          <img
            src={require("../styles/images/arrow2.png")}
            height="50px"
            className="arrow"
          />
        </button>
        {card === "images/open.jpg" && (
          <div className="card-body">
            <h5 className="card-title">Mr.里歐歐式早餐-中山北店 即將開幕</h5>
            {collapse && (
              <div>
                <p className="card-text">
                  桌椅都以擺設完畢～椅子坐起來真的很舒服呢😌😌盡量把店裡每個角落做到最舒適，送上熱騰騰的美味餐點，讓各位慢慢享用～是我們的堅持也是我們的用心❤️
                  距離開幕日期倒數3天🎉🎉🎉
                </p>
              </div>
            )}
            <button
              className="btn btn-primary"
              onClick={() => {
                if (!collapse) {
                  setCollapse(true);
                } else {
                  setCollapse(null);
                }
              }}
            >
              了解詳情
            </button>
          </div>
        )}
        {card === "images/discount.jpg" && (
          <div className="card-body">
            <h5 className="card-title">即日起 週週送</h5>
            {collapse && (
              <div>
                <p className="card-text">
                  照過來看過來😎😎只要是客人都想買
                  <br />
                  只要升級套餐系列都將附贈麵包套餐😍😍每週僅供前50名客人享有如此的優惠,看到優惠的你趕快來嚐嚐吧🤤🤤
                </p>
              </div>
            )}
            <button
              className="btn btn-primary"
              onClick={() => {
                if (!collapse) {
                  setCollapse(true);
                } else {
                  setCollapse(null);
                }
              }}
            >
              了解詳情
            </button>
          </div>
        )}
        {card === "images/discount2.jpg" && (
          <div className="card-body">
            <h5 className="card-title">限時優惠</h5>
            {collapse && (
              <div>
                <p className="card-text">
                  剛開學覺得悶悶不樂嗎😵😵
                  <br />
                  一日之計在於晨, 要有好心情😄清醒腦👀就要吃好早餐,
                  歡迎來到里歐享受限時優惠
                  <br />
                </p>
              </div>
            )}
            <button
              className="btn btn-primary"
              onClick={() => {
                if (!collapse) {
                  setCollapse(true);
                } else {
                  setCollapse(null);
                }
              }}
            >
              了解詳情
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
