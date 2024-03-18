import React, { useState } from "react";

const BasicInformation = ({
  setCategorySelect,
  emailInputRef,
  phoneInputRef,
  chooseOne,
  setChooseOne,
  nameWarning,
  setNameWarning,
}) => {
  const [genderColor, setGenderColor] = useState("white");

  return (
    <div className="basic-information">
      {/* <div className="input-group">
        <label className="input-group-text prefix text-wrap" for="category">
          類別
        </label>
        <select
          className="form-select"
          id="category"
          onChange={(e) => {
            setCategorySelect(e.target.value);
          }}
        >
          <option selected value="franchise">
            加盟需求
          </option>
          <option value="feedback">顧客回饋</option>
        </select>
      </div> */}
      <div className="input-group">
        <label for="name" className="input-group-text prefix text-wrap">
          姓名
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          onChange={(e) => {
            e.target.value ? setNameWarning(false) : setNameWarning("沒填");
          }}
        />
      </div>
      {nameWarning === true && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          style={{
            margin: "0",
            position: "relative",
            animation: "collapse 0.5s",
          }}
        >
          <p style={{ margin: "0", display: "flex", alignItems: "center" }}>
            <img src="images/icon8.png" height="20px" />
            您必須填寫姓名
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setNameWarning(null);
            }}
          ></button>
        </div>
      )}
      <div className="input-group">
        <label className="input-group-text text-wrap">性別</label>
        <div className="gender">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="male"
              value="male"
              style={{
                border: "3px solid skyblue",
              }}
              onClick={() => {
                setGenderColor("white");
              }}
            />
            <label className="form-check-label" for="male">
              男性
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="female"
              value="female"
              style={{
                border: "3px solid lightpink",
                backgroundColor: genderColor,
              }}
              onClick={(e) => {
                setGenderColor("deeppink");
                e.target.style.backgroundColor = genderColor;
              }}
            />
            <label className="form-check-label" for="female">
              女性
            </label>
          </div>
        </div>
      </div>
      <div className="input-group">
        <label for="email" className="input-group-text text-wrap">
          電子信箱
        </label>
        <input
          type="email"
          id="email"
          className="form-control hint"
          placeholder="信箱或電話擇一填寫"
          ref={emailInputRef}
          onChange={(e) => {
            e.target.value ? setChooseOne(null) : console.log("email");
          }}
        />
      </div>
      <div className="input-group">
        <label for="phone" className="input-group-text text-wrap">
          連絡電話
        </label>
        <input
          type="text"
          id="phone"
          className="form-control hint"
          placeholder="信箱或電話擇一填寫"
          ref={phoneInputRef}
          onChange={(e) => {
            e.target.value ? setChooseOne(null) : console.log("phone");
          }}
        />
      </div>
      {chooseOne && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          style={{
            margin: "0",
            position: "relative",
            animation: "collapse 0.5s",
          }}
        >
          <p style={{ margin: "0", display: "flex", alignItems: "center" }}>
            <img src="images/icon8.png" height="20px" />
            您必須於信箱或電話其中一欄進行填寫
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setChooseOne(null);
            }}
          ></button>
        </div>
      )}
      <div className="input-group">
        <label className="input-group-text prefix text-wrap">類別</label>
        <div className="category">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="franchise"
              value="franchise"
              onChange={(e) => {
                setCategorySelect(e.target.value);
              }}
            />
            <label className="form-check-label" for="franchise">
              加盟需求
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="feedback"
              value="feedback"
              onChange={(e) => {
                setCategorySelect(e.target.value);
              }}
            />
            <label className="form-check-label" for="feedback">
              顧客回饋
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
