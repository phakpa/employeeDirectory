import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import TableEmployee from "../components/TableEmployee";

class Home extends Component {
  state = {
    search: "",
    image: [],
    name: [],
    phone: [],
    email: [],
    dob: [],
    counter: 0,
  };

  componentDidMount() {
    API.search()
      .then((res) => {
        let results = res.data.results;
        let image = [];
        let name = [];
        let phone = [];
        let email = [];
        let dob = [];

        for (let i = 0; i < results.length; i++) {
          image.push(results[i].picture.medium);
          name.push(results[i].name.first + " " + results[i].name.last);
          phone.push(results[i].phone);
          email.push(results[i].email);
          dob.push(results[i].dob.date);
        }
        this.setState({
          image: image,
          name: name,
          phone: phone,
          email: email,
          dob: dob,
        });

        console.log(this.state.image);
        console.log(this.state.name);
        console.log(this.state.phone);
        console.log(this.state.email);
        console.log(this.state.dob);
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
          counter={this.state.counter}
        />
      </div>
    );
  }
}

export default Home;
