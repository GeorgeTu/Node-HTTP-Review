// we need to require express, body-parser, and cors.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//assign express to our app variable
const app = express();

// import controller that holds userdata and methods
const userCtrl = require(`${__dirname}/userCtrl.js`);

//Define port to listen to
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