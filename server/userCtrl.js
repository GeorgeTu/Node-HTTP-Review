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


const getUsers = (req, res, next) => {
    console.log("Hi")
    res.status(200).json(userlist);
  };


module.exports = {
    getUsers
}