import React from "react";

const Franchise = ({
  atLeastOne,
  setAtLeastOne,
  weekday1Ref,
  weekday2Ref,
  weekday3Ref,
  weekend1Ref,
  weekend2Ref,
  anyTimeRef,
  birthWarning,
  setBirthWarning,
  jobWarning,
  setJobWarning,
  addressWarning,
  setAddressWarning,
  storePlaceWarning,
  setStorePlaceWarning,
  budgetWarning,
  setBudgetWarning,
  loanWarning,
  setLoanWarning,
}) => {
  return (
    <div style={{ position: "relative", animation: "collapse 0.5s" }}>
      <div className="input-group">
        <label for="birth" className="input-group-text prefix text-wrap">
          出生年月日
        </label>
        <input
          type="date"
          id="birth"
          className="form-control"
          onChange={(e) => {
            e.target.value ? setBirthWarning(false) : setBirthWarning("沒填");
          }}
        />
      </div>
      {birthWarning === true && (
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
            <img src={require("../styles/images/icon8.png")} height="20px" />
            您必須填寫出生日期
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setBirthWarning(null);
            }}
          ></button>
        </div>
      )}
      <div className="input-group">
        <label for="job" className="input-group-text prefix text-wrap">
          職業
        </label>
        <input
          type="text"
          id="job"
          className="form-control"
          onChange={(e) => {
            e.target.value ? setJobWarning(false) : setJobWarning("沒填");
          }}
        />
      </div>
      {jobWarning === true && (
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
            <img src={require("../styles/images/icon8.png")} height="20px" />
            您必須填寫您的職業
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setJobWarning(null);
            }}
          ></button>
        </div>
      )}
      <div className="input-group">
        <label for="address" className="input-group-text prefix text-wrap">
          地址
        </label>
        <input
          type="text"
          id="address"
          className="form-control"
          onChange={(e) => {
            e.target.value
              ? setAddressWarning(false)
              : setAddressWarning("沒填");
          }}
        />
      </div>
      {addressWarning === true && (
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
            <img src={require("../styles/images/icon8.png")} height="20px" />
            您必須填寫地址
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setAddressWarning(null);
            }}
          ></button>
        </div>
      )}
      <div className="input-group">
        <label className="input-group-text prefix text-wrap">
          方便聯絡時間
        </label>
        <div className="contact-time">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="weekday08~12"
              id="defaultCheck1"
              style={{ border: "2px solid #fab554" }}
              ref={weekday1Ref}
              onClick={(e) => {
                if (e.target.checked) {
                  setAtLeastOne(null);
                }
              }}
            />
            <label className="form-check-label" for="defaultCheck1">
              平日早上(08~12點)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="weekday14~18"
              id="defaultCheck1"
              style={{ border: "2px solid #fab554" }}
              ref={weekday2Ref}
              onClick={(e) => {
                if (e.target.checked) {
                  setAtLeastOne(null);
                }
              }}
            />
            <label className="form-check-label" for="defaultCheck1">
              平日下午(14~18點)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="weekday18~22"
              id="defaultCheck1"
              style={{ border: "2px solid #fab554" }}
              ref={weekday3Ref}
              onClick={(e) => {
                if (e.target.checked) {
                  setAtLeastOne(null);
                }
              }}
            />
            <label className="form-check-label" for="defaultCheck1">
              平日晚上(18~22點)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="weekend08~17"
              id="defaultCheck1"
              style={{ border: "2px solid #fab554" }}
              ref={weekend1Ref}
              onClick={(e) => {
                if (e.target.checked) {
                  setAtLeastOne(null);
                }
              }}
            />
            <label className="form-check-label" for="defaultCheck1">
              假日白天(08~17點)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="weekend17~22"
              id="defaultCheck1"
              style={{ border: "2px solid #fab554" }}
              ref={weekend2Ref}
              onClick={(e) => {
                if (e.target.checked) {
                  setAtLeastOne(null);
                }
              }}
            />
            <label className="form-check-label" for="defaultCheck1">
              假日晚上(17~22點)
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="anyTime"
              id="defaultCheck1"
              style={{ border: "2px solid #fab554" }}
              ref={anyTimeRef}
              onClick={(e) => {
                if (e.target.checked) {
                  setAtLeastOne(null);
                }
              }}
            />
            <label className="form-check-label" for="defaultCheck1">
              都可以
            </label>
          </div>
        </div>
      </div>
      {atLeastOne && (
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
            <img src={require("../styles/images/icon8.png")} height="20px" />
            您必須至少勾選其中一項
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setAtLeastOne(null);
            }}
          ></button>
        </div>
      )}
      <div class="input-group">
        <label class="input-group-text prefix text-wrap" for="storePlace">
          預定開店地點
        </label>
        <select
          class="form-select"
          id="storePlace"
          onChange={(e) => {
            e.target.value
              ? setStorePlaceWarning(false)
              : setStorePlaceWarning("沒填");
          }}
        >
          <option selected value="">
            請選擇...
          </option>
          <option value="south">南部(高雄、台南地區)</option>
          <option value="central">中部(台中、彰化地區)</option>
          <option value="north">北部(台北、桃園地區)</option>
        </select>
      </div>
      {storePlaceWarning === true && (
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
            <img src={require("../styles/images/icon8.png")} height="20px" />
            您必須選擇其中一項
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setStorePlaceWarning(null);
            }}
          ></button>
        </div>
      )}
      <div class="input-group">
        <label class="input-group-text prefix text-wrap" for="budget">
          資金預算
        </label>
        <select
          class="form-select"
          id="budget"
          onChange={(e) => {
            e.target.value ? setBudgetWarning(false) : setBudgetWarning("沒填");
          }}
        >
          <option selected value="">
            請選擇...
          </option>
          <option value="under50">50萬以下</option>
          <option value="50~100">50萬~100萬</option>
          <option value="100~150">100萬~150萬</option>
          <option value="150~200">150萬~200萬</option>
          <option value="above200">200萬以上</option>
        </select>
      </div>
      {budgetWarning === true && (
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
            <img src={require("../styles/images/icon8.png")} height="20px" />
            您必須選擇其中一項
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setBudgetWarning(null);
            }}
          ></button>
        </div>
      )}
      <div class="input-group">
        <label class="input-group-text prefix text-wrap" for="loan">
          是否有貸款需求
        </label>
        <select
          class="form-select"
          id="loan"
          onChange={(e) => {
            e.target.value ? setLoanWarning(false) : setLoanWarning("沒填");
          }}
        >
          <option selected value="">
            請選擇...
          </option>
          <option value="haveNot">無</option>
          <option value="byself">可自行貸款</option>
          <option value="corpHelp">需公司協助</option>
        </select>
      </div>
      {loanWarning === true && (
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
            <img src={require("../styles/images/icon8.png")} height="20px" />
            您必須選擇其中一項
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setLoanWarning(null);
            }}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Franchise;
