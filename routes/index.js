var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 
/* POST home page. */
router.post('/', function(req, res, next) {
  var title = req.body.title;
  console.log(title);
});
//




module.exports = router;
