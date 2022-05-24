var express = require('express');
var router = express.Router();
const auth = require("../middlewares/auth");
const controller = require("../controller/user")
const db = require("../db/index");

router.get('/', function(req, res, next){
  res.send("yoooo")
});

router.get("/me", function(req, res){
  res.send("This is jonec")
});

router.get("/login", function(req, res){
  res.send("login")
})

router.post("/register", function(req, res){
  console.log(req.body);
  res.send(req.body)
})

router.get("/user", [auth.verifyToken], controller.userBoard);

module.exports = router;
