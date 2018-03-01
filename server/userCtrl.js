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
const createUser = (req, res, next) => {
    console.log("created")
    console.log(req.body)
    userlist.push(req.body)
    res.status(200).json(userlist);
}

const getUsers = (req, res, next) => {
   
    res.status(200).json(userlist);
  };

const updateUser = (req, res, next) => {
    console.log(req)
    for (var i = 0; i < userlist.length; i++){

    }
    res.status(200).json(userlist);
}

const deleteUser = (req, res, next) => {
    console.log(params)
}


module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser

}