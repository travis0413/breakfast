import React, { useState, useRef } from "react";
import Album from "../component/Album";

const About = () => {
  const letterOneRef = useRef(null);
  const letterTwoRef = useRef(null);
  const letterThreeRef = useRef(null);
  const iconOneRef = useRef(null);
  const iconTwoRef = useRef(null);
  const [beforeClick, setBeforeClick] = useState(true);
  const [afterClick, setAfterClick] = useState(false);

  const combine = () => {
    //console.log(letterOneRef.current.style.margin);    ==>裡面是""
    if (!letterOneRef.current.style.margin) {
      letterOneRef.current.style.margin = 0;
      letterTwoRef.current.style.margin = 0;
      letterThreeRef.current.style.margin = 0;
      iconOneRef.current.style.zIndex = -1;
      iconTwoRef.current.style.zIndex = -1;
      setTimeout(() => {
        setBeforeClick(false);
        setAfterClick(true);
      }, 500);
    }
  };

  return (
    <div>
      <Album title="品牌故事" />
      <div className="story-contain">
        <div className="letter-1" ref={letterOneRef}>
          <img src="images/bg5-1.jpg" />
          <div className="text1">
            <p>
              Mr.里歐一直以來重視台灣早餐文化，不斷努力研發創意、客製化的歐式特色產品
            </p>
            <p>
              並同時保有台式早餐的風格，以滿足消費者對於更健康、更有特色餐點的需求。
            </p>
          </div>
        </div>
        {beforeClick && (
          <div className="food-icons" style={{ top: "33%" }} ref={iconOneRef}>
            <img src="images/icon6.png" height="30px" />
            <button onClick={combine}>點點看看</button>
          </div>
        )}
        {afterClick && (
          <div className="food-icons-clicked" style={{ top: "33%" }}>
            <img src="images/icon7.png" height="30px" />
          </div>
        )}
        <div className="letter-2" ref={letterTwoRef}>
          <img src="images/bg5-2.jpg" />
          <div className="text2">
            <p>
              我們不僅在店面裝潢上下功夫，更注重餐點的口味開發，讓消費者能夠有更多元的中西口味選擇。
            </p>
            <p>
              為了達到這樣的品牌目標，我們花費大量的時間和心力在餐點開發上，讓每道餐點都充滿創意和台灣風味，並根據客人的喜好提供客製化的服務。
            </p>
            <p>
              我們希望透過這樣的品牌故事，能夠讓更多人了解到Mr.里歐所追求的品牌價值，也讓更多人能夠品嚐到我們獨特的美食。
            </p>
          </div>
        </div>
        {beforeClick && (
          <div
            className="food-icons"
            style={{ top: "calc(64% - 14px)" }}
            ref={iconTwoRef}
          >
            <img src="images/icon6.png" height="30px" />
            <button onClick={combine}>點點看看</button>
          </div>
        )}
        {afterClick && (
          <div className="food-icons-clicked" style={{ top: "calc(60%)" }}>
            <img src="images/icon7.png" height="30px" />
          </div>
        )}
        <div className="letter-3" ref={letterThreeRef}>
          <img src="images/bg5-3.jpg" />
          <div className="text3">
            <h3>小知識分享:</h3>
            <p>Breakfast這個字要到15世紀的時候才成為早餐這個字的英文。</p>
            <p>
              在那之前，古英文的早餐叫做 morgenmete，意思是「早上的餐」（morning
              meal）。
            </p>
            <p>
              不過，在中古時期的歐洲，除了那些要早起工作的人或是身體虛弱的人老人之外，其實並沒有非得一起床就吃一餐的習慣。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
