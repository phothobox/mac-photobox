var express = require('express');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');
var ejs = require('ejs');
var mysql = require('mysql');
//var mysql2 = require('./mysql.js');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

/*
app.get('/', function (req, res, next) {
  res.render('index');
});
*/

require('./socket.js')(io);

http.listen(3000, function () {
  console.log('listening on 3000');
});

 
////////////////MYSQL CONNECTION//////////////////////////// 
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
    app.get('/', function (req, res, next) {
      res.render('index.ejs',{
        title: 'Hello World!!!!!',
        data:rows
      });
    });
  }
 
});
 
// userdataのカラムを取得
connection.query('SHOW COLUMNS FROM imgurl;', function (err, rows, fields) {
  if (err) { 
    console.log('err: ' + err); 
  }
  
});

// 接続終了
connection.end();

////////////////MYSQL CONNECTION//////////////////////////// 
