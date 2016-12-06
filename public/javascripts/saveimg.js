//2016/12/06
//NOTE:サーバー側に画像保存作成中

var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET users listing. */
router.post('/', function(req, res, next) {
    var base64Data = req.body.img.replace(/^data:image\/png;base64,/, "");

  fs.writeFile(req.body.path,base64Data,'base64',function(err){
      console.log(err);
      res.send(req.body.path+"書き込み完了");
  })
});

module.exports = router;