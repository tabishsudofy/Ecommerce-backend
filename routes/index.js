var express = require('express');
var router = express.Router();

/* GET home page. */
console.log("abc");
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
