import React from "react";
import "./emailform.css";

const EmailForm = () => {
  return (
    <form>
      <div className="form-div">
        <input
          placeholder="Enter your email"
          className="form-text"
          type="text"
        ></input>
        <button type="submit">
          <img className="right-arrow" src="right-arrow.svg" alt="arrow-img" />
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
