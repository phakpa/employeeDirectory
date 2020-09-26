import React from "react";

function TableEmployee(props) {
  return (
    <div>
      <table className="table table-hover table-striped table-light">
        <thead className="thead-light">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        {props.image.map((results, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">
                <img src={results} alt={results}></img>
              </th>
              <td>{props.name[index]}</td>
              <td>{props.phone[index]}</td>
              <td>
                <a href="mailto:">{props.email[index]}</a>
              </td>
              <td>{props.dob[index]}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default TableEmployee;
