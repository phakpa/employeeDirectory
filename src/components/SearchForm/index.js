import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="center-align">
      <div className="heading">
        <h1>Employee Directory</h1>
      </div>
      <form>
        <span>Search Employee: </span>{" "}
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          placeholder="First Name"
          id="employee"
        />
        <button
          className="btn-danger"
          onClick={props.handleFormSubmit}
          value="ascending"
        >
          Name by Asscending
        </button>
        <button
          className="btn-danger"
          onClick={props.handleFormSubmit}
          value="descending"
        >
          Name by Descending
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
