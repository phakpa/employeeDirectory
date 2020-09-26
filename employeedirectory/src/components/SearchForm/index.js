import React from "react";

function SearchForm(props) {
  return (
    <div>
      <p>Hello {props.search}</p>
      <form>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          placeholder="employee name"
          id="employee"
        />
      </form>
    </div>
  );
}

export default SearchForm;
