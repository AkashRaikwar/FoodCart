import React, { Component } from 'react';
import axios from "axios";
 
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  }
 
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };
 
  handleSubmitAdd = (event) => {
    event.preventDefault();
 
    const userData = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };
 
    axios.post('https://dummyjson.com/users/add', userData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("User is added successfully with id " + res.data.id);
      })
      .catch((error) => {
        alert(error);
      });
  };
 
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmitAdd} autoComplete='on|off'>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
 
export default SignUp;
