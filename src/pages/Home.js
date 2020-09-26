import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import TableEmployee from "../components/TableEmployee";

class Home extends Component {
  state = {
    result: [],
    image: [],
    name: [],
    phone: [],
    email: [],
    dob: [],
    search: "",
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        let results = res.data.results;
        let image = [];
        let name = [];
        let phone = [];
        let email = [];
        let dob = results.map((e) => {
          return e.dob.date.slice(0, 10);
        });

        let newDob = [];
        for (let i = 0; i < dob.length; i++) {
          let year = dob[i].slice(0, 4);

          let month = dob[i].slice(5, 7);
          let day = dob[i].slice(8, 10);
          newDob.push(month + "-" + day + "-" + year);
        }

        for (let i = 0; i < results.length; i++) {
          image.push(results[i].picture.medium);
          name.push(results[i].name.first + " " + results[i].name.last);
          phone.push(results[i].phone);
          email.push(results[i].email);
        }

        this.setState({
          result: results,
          image: image,
          name: name,
          phone: phone,
          email: email,
          dob: newDob,
        });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    event.preventDefault();
    let tempStr = event.target.value;
    this.setState({
      search: tempStr,
    });

    if (tempStr !== "") {
      let origResults = this.state.result;
      let tempResult = origResults.filter((x) =>
        x.name.last.toLowerCase().includes(tempStr.toLowerCase())
      );

      console.log(tempResult);

      let results = tempResult;
      let image = [];
      let name = [];
      let phone = [];
      let email = [];
      let dob = results.map((e) => {
        return e.dob.date.slice(0, 10);
      });

      let newDob = [];
      for (let i = 0; i < dob.length; i++) {
        let year = dob[i].slice(0, 4);

        let month = dob[i].slice(5, 7);
        let day = dob[i].slice(8, 10);
        newDob.push(month + "-" + day + "-" + year);
      }

      for (let i = 0; i < results.length; i++) {
        image.push(results[i].picture.medium);
        name.push(results[i].name.first + " " + results[i].name.last);
        phone.push(results[i].phone);
        email.push(results[i].email);
      }

      this.setState({
        image: image,
        name: name,
        phone: phone,
        email: email,
        dob: newDob,
      });
    } else {
      let results = this.state.result;
      let image = [];
      let name = [];
      let phone = [];
      let email = [];
      let dob = results.map((e) => {
        return e.dob.date.slice(0, 10);
      });

      let newDob = [];
      for (let i = 0; i < dob.length; i++) {
        let year = dob[i].slice(0, 4);

        let month = dob[i].slice(5, 7);
        let day = dob[i].slice(8, 10);
        newDob.push(month + "-" + day + "-" + year);
      }

      for (let i = 0; i < results.length; i++) {
        image.push(results[i].picture.medium);
        name.push(results[i].name.first + " " + results[i].name.last);
        phone.push(results[i].phone);
        email.push(results[i].email);
      }

      this.setState({
        image: image,
        name: name,
        phone: phone,
        email: email,
        dob: newDob,
      });
    }
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <TableEmployee
          image={this.state.image}
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
          dob={this.state.dob}
        />
      </div>
    );
  }
}

export default Home;
