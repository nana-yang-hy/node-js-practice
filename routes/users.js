var express = require('express');
var router = express.Router();

var users = {
  '001':{
    "id":"001",
    "name":"Nana",
    "username":"nana",
    "password":"2000"
  },
  '002':{
    "id":"002",
    "name":"Peter",
    "username":"peter",
    "password":"1000"
  }
};

var loginStore = [];

router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/', function(req, res, next) {
  let id = req.body.id;
  users[id]= req.body;  
  res.send(users);
});

router.post('/login', function(req, res, next) {
  console.log(req.body.id);
  console.log(req.body.username);
  console.log(req.body.password);

  const id = req.body.id;
  const username = req.body.username;
  const password = req.body.password;
  var user = users[id];

  console.log(user);
  if(username == user.username && password == user.password){
    loginStore.push(id);
    res.send({"status":`Welcome.. ${user.name}`});
  }else{
    res.send({"status":"login failed.."});
  }  
});


router.get('/loginStatusSearch', function(req, res, next) {
  res.send(loginStore);
});

router.get('/:userId', function(req, res, next) {
  console.log(req.params.userId);
  res.send(users['001']);
});


module.exports = router;
