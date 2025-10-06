const express = require('express');
const routerUser = express.Router();
const path = require('path');
const fs = require('fs');
/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req,res) => {
  fs.readFile('./user.json', (err, data) => {
    if (err) {
        throw new Error("No file user.json");
    }

    const user = JSON.parse(data);
    res.json(user);
  });
});



/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req,res) => {
  const reqUser = req.body.username;
  const reqPass = req.body.password;

  fs.readFile('./user.json', (err, data) => {
    if (err) {
        throw new Error('No file user.json');
    }

    const user = JSON.parse(data);
    if (reqUser === user.username && reqPass === user.password) {
        return res.json({status: true, message:"User is valid"});
    } else if (reqUser !== user.username) {
        return res.json({status: false, message:"User Name is invalid"});
    } else {
        return res.json({status: false, message:"Password is invalid"});
    }
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout/:username', (req,res) => {
  res.send(`<b>${req.params.username} successfully logged out.</b>`);
});

module.exports = routerUser;