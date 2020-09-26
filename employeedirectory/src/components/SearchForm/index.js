import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <div className="center-align">
      <form>
        <span>Search Employee: </span>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          placeholder="Employee Last Name"
          id="employee"
        />
      </form>
    </div>
  );
}

export default SearchForm;
