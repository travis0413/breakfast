import React from "react";

const StoreCard = ({ store }) => {
  return (
    <div className="cards">
      <a href={store.src} target="_blank">
        <img src={store.src} alt={store.name} className="storePicture" />
      </a>
      <h2>{store.name}</h2>
      <p>
        <a href="#">
          {store.position}
          <img src="images/icon9.png" alt="map" className="mapIcon" />
        </a>
      </p>
      <p>{store.phone}</p>
    </div>
  );
};

export default StoreCard;
