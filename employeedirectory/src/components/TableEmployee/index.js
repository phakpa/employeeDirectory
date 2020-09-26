import React from "react";

function TableEmployee(props) {
  return (
    <div>
      <table className="table">
        <thead>
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
              <td>{props.email[index]}</td>
              <td>{props.dob[index]}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default TableEmployee;
