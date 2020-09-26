import React from "react";

function SearchForm(props) {
  return (
    <div>
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
