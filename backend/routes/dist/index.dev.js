"use strict";

var express = require('express');

var router = express.Router();
var users = [{
  email: 'abc@gmail.com',
  password: '12345'
}];
/* GET home page. */

router.get('/', function (req, res, next) {
  res.send("Welcome to backend server");
});
router.post('/login', function (req, res) {
  var result = users.find(function (user) {
    return user.email == req.body.email;
  });

  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        message: "Successful Login!!"
      });
    } else {
      res.status(200).send({
        message: "Password Incorrect!!"
      });
    }
  } else {
    res.status(200).send({
      message: "User not found!!"
    });
  }
});
module.exports = router;