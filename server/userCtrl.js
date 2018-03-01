const userlist = [
    {
        username: "Chris Foster",
        email: "chriswfoster@gmail.com",
        roomNumber: 55
    },
    {
        username: "Paul Bunyan",
        email: "giant@lumberjacks.com",
        roomNumber: 1881
    },
    {
        username: "Billy",
        email: "Billy@billy.com",
        roomNumber: 1
    },
    {
        username: "Gene Simmons",
        email: "gSimmons@kiss.com",
        roomNumber: 18
    },
    
]

//create user object using the req.body
const createUser = (req, res, next) => {
    userlist.push(req.body)
    res.status(200).json(userlist);
}

//get the list of users
const getUsers = (req, res, next) => {
    res.status(200).json(userlist);
  };

//update a user's roomNumber
const updateUser = (req, res, next) => {
    for (var i = 0; i < userlist.length; i++){
      if(req.query.user === userlist[i].username){
        userlist[i].roomNumber = req.query.room
      }
    }
    res.status(200).json(userlist);
}

//delete a user by name
const deleteUser = (req, res, next) => {
    for (var i = 0; i < userlist.length; i++){
        if(req.query.user === userlist[i].username){
            userlist.splice(i, 1)
            i-=1
        }
    }
    res.status(200).json(userlist);
}


module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser

}