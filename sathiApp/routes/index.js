var express = require('express');
const { resource } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/result-list', function (req, res, next) {
  res.render('resultList');
})

router.get('/home',function(req,res,next){
  res.render('createSathi');
});

module.exports = router;
