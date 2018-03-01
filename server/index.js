const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const userCtrl = require(`${__dirname}/userCtrl.js`);

const port = 3333;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("HIT ON EACH REQUEST");
  console.log("REQ.BODY: ", req.body);
  next();
});




app.get("/api/getusers", userCtrl.getUsers)
app.post("/api/createUser", userCtrl.createUser)
app.put("/api/updateuser", userCtrl.updateUser)
app.delete("/api/deleteuser", userCtrl.deleteUser)




app.listen(port, () => {console.log(`Listening on ${port}`)})