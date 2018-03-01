import React, { Component } from "react"
import logo from "./logo.svg"
import axios from 'axios'
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  createUser() {}

  readUser() {
    axios.get("/api/getusers")
    .then(response => this.setState({users: response.data}))
  }

  updateUser() {}

  deleteUser() {}

  render() {
    const {users} = this.state
    const userList = users.map((user, i) => <p key={i}>user</p>)

    return (
      <div className="App">
  <div><h1>CRUDDY USERS</h1></div>
        <div className="crudFlex">
          <div className="crudBoxes">Create:
          <input placeholder = "User's name" />
          <input placeholder = "User's email" />
          <input placeholder = "Room NUMBER" />
          <button>Create User</button>
          </div>
          
          <div className="crudBoxes">Read:
          <button>Get List of Users</button></div>

          <div className="crudBoxes">Update</div>
          <div className="crudBoxes">Delete</div>
        </div>
      </div>
    )
  }
}

export default App
