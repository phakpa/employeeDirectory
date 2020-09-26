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

        console.log(this.state.image);
        console.log(this.state.name);
        console.log(this.state.phone);
        console.log(this.state.email);
        console.log(this.state.dob);
        console.log(this.state.result);
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <SearchForm handleInputChange={this.handleInputChange} />
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
