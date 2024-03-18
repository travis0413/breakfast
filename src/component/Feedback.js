import React from "react";

const Feedback = ({ questionWarning, setQuestionWarning }) => {
  return (
    <div style={{ position: "relative", animation: "collapse 0.5s" }}>
      <div class="input-group">
        <label class="input-group-text prefix text-wrap" for="question">
          問題類型
        </label>
        <select
          class="form-select"
          id="question"
          onChange={(e) => {
            e.target.value
              ? setQuestionWarning(false)
              : setQuestionWarning("沒填");
          }}
        >
          <option selected value="">
            請選擇...
          </option>
          <option value="food safety">食安問題</option>
          <option value="environment">衛生環境</option>
          <option value="poorservice">服務不週</option>
          <option value="not delicious">食物不好吃</option>
          <option value="menu not enough">菜單不夠</option>
          <option value="other">其他</option>
        </select>
      </div>
      {questionWarning === true && (
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
            您必須選擇其中一項
          </p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setQuestionWarning(null);
            }}
          ></button>
        </div>
      )}
      <div className="mb-3 message-board">
        <label for="exampleFormControlTextarea1" className="form-label">
          留言板
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          placeholder="請把須改善的內容仔細填寫在此，以便本店完美改善"
        ></textarea>
      </div>
    </div>
  );
};

export default Feedback;
