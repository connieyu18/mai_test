import React, { useState } from "react";

import "./search-bar.styles.scss";

export default function SearchBarComponent(props) {
  const [inputVal, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
    props.handleInput(inputVal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleInput(inputVal);
    setInputValue("");
  };
  return (
    <form className="search-bar input-group col-sm-12 col-md-6 my-2">
      <input
        type="text"
        className="form-control"
        aria-label="search"
        aria-describedby="basic-addon2"
        value={inputVal}
        onChange={onInputChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
}
