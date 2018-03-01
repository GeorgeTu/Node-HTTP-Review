// we need to require express, body-parser, and cors.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//assign express to our app variable
const app = express();

// import controller that holds userdata and methods. Use 2 undercores for dirname :)
const userCtrl = require(`${__dirname}/userCtrl.js`);

// Define port to listen to
// Look at proxy in package.json. Proxy simply points front end to your back end.
// This is so you don't have to type 'http://localhost:3000/API/METHOD for every single request
const port = 3333;


app.use(cors());
app.use(bodyParser.json());


app.use((req, res, next) => {
    console.log("Middleware firing off...")
    console.log("Body: ", req.body)
    console.log("Query: ", req.query)
  next();
});


//define methods, paths, and handlers.
app.get("/api/getusers", userCtrl.getUsers)
app.post("/api/createUser", userCtrl.createUser)
app.put("/api/updateuser", userCtrl.updateUser)
app.delete("/api/deleteuser", userCtrl.deleteUser)




app.listen(port, () => {console.log(`Listening on ${port}`)})