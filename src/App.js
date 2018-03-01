import React, { Component } from "react"
import logo from "./logo.svg"
import axios from "axios"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      ///// user array
      users: [],

      ///// input text
      createusertext: "",
      createemailtext: "",
      createroomtext: "",
      updateroomnametext: "",
      updateroomnumbertext: "",
      deleteusertext: ""
    }
  }
  ///////////////////////////////////// CRUD METHODS:
  createUser(username, email, roomNumber) {
    axios
      .post("/api/createuser", {
        username,
        email,
        roomNumber
      })
      .then(response => this.setState({ users: response.data }))
  }

  readUser() {
    axios
      .get("/api/getusers")
      .then(response => this.setState({ users: response.data }))
  }

  updateUser(user, room) {
    axios
      .put(`/api/updateuser?user=${user}&room=${room}`)
      .then(response => this.setState({ users: response.data }))
  }

  deleteUser(user) {
    axios
      .delete(`/api/deleteuser/?user=${user}`)
      .then(response => this.setState({ users: response.data }))
  }

  ///////////////////////////////////// ON CHANGE METHODS:

  createUserText(val) {
    this.setState({ createusertext: val })
  }
  createEmailText(val) {
    this.setState({ createemailtext: val })
  }
  createRoomNumberText(val) {
    this.setState({ createroomtext: val })
  }

  updateUserNameText(val) {
    this.setState({ updateroomnametext: val })
  }
  updateRoomNumberText(val) {
    this.setState({ updateroomnumbertext: val })
  }
  deleteusertext(val) {
    this.setState({ deleteusertext: val })
  }

  render() {
    const { users } = this.state
    const userList = users.map((user, i) => (
      <p key={i}>
        Name: {user.username}. Email:{user.email}. Room: {user.roomNumber}.
      </p>
    ))

    return (
      <div className="App">
        <div>
          <h1>CRUDDY USERS</h1>
        </div>
        <div className="crudFlex">
          <div className="crudBoxes">
            Create:
            <input
              placeholder="User's name"
              onChange={e => this.createUserText(e.target.value)}
            />
            <input
              placeholder="User's email"
              onChange={e => this.createEmailText(e.target.value)}
            />
            <input
              placeholder="Room NUMBER"
              onChange={e => this.createRoomNumberText(e.target.value)}
            />
            <button
              onClick={() =>
                this.createUser(
                  this.state.createusertext,
                  this.state.createemailtext,
                  this.state.createroomtext
                )
              }
            >
              Create User
            </button>
          </div>

          <div className="crudBoxes">
            Read:
            <button onClick={() => this.readUser()}>Get List of Users</button>
            {userList}
          </div>

          <div className="crudBoxes">
            Update:
            <input
              placeholder="User's name"
              onChange={e => this.updateUserNameText(e.target.value)}
            />
            <input
              placeholder="New Room Number"
              onChange={e => this.updateRoomNumberText(e.target.value)}
            />
            <button
              onClick={() =>
                this.updateUser(
                  this.state.updateroomnametext,
                  this.state.updateroomnumbertext
                )
              }
            >
              Update User's Room
            </button>
          </div>

          <div className="crudBoxes">
            Delete:
            <input
              placeholder="User's Name"
              onChange={e => this.deleteusertext(e.target.value)}
            />
            <button onClick={() => this.deleteUser(this.state.deleteusertext)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
