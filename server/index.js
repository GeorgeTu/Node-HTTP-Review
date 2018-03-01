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


// Invoke app.use and tell it to add the middleware below. Then the middleware will be added onto your express middleware stack.
app.use(cors());
app.use(bodyParser.json());


app.use((req, res, next) => { // we can console log our req.body, params, or query here. This will help you see if the req data is making it to the server properly. Good for troubleshooting where your requests could be failing, and to see what your data looks like on the server side.
    console.log("Middleware firing off...")
    console.log("Body: ", req.body)
    console.log("Query: ", req.query)
    // invoke next to pass the request through...
  next();
});


//define methods, paths, and handlers.
app.get("/api/getusers", userCtrl.getUsers)
app.post("/api/createUser", userCtrl.createUser)
app.put("/api/updateuser", userCtrl.updateUser)
app.delete("/api/deleteuser", userCtrl.deleteUser)




app.listen(port, () => {console.log(`Listening on ${port}`)})