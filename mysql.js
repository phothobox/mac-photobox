
//var app = require('./app');
// requireの設定


var express = require('express');
var app = express();
var mysql = require('mysql');
 
// MySQLとのコネクションの作成
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '123qwEcc',
  database: 'images'
});
 
// 接続
connection.connect();
 
connection.query('SELECT * from imgurl;', function (err, rows, fields) {
  if (err) { console.log('err: ' + err); 
  } else {
      /*app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      */
     
    console.log(rows);
    console.log(fields);
    
    
      app.get('/', function(err, req, res, next) {
     
     // res.render('index', {  
        res.render('index.ejs', {
        data: rows
        });
        
    });


  }

   // console.log(rows[0].Field);
   // console.log(rows[1].Field);

 
  //console.log('imgpath: ' + rows[0].imgpath);
  //console.log('id: ' + rows[0].id);

 
});
 
// userdataのカラムを取得
connection.query('SHOW COLUMNS FROM imgurl;', function (err, rows, fields) {
  if (err) { 
    console.log('err: ' + err); 
  }
  
});

// 接続終了
connection.end();


