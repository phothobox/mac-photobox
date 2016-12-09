/* global fabric, $ */
// var c = document.getElementById('canvas');

var canvasObjects = {
  redCircle: function () {
    var redCircle = new fabric.Circle({
      top: 100,
      left: 100,
      radius: 30,
      fill: 'crimson',
      stroke: 'black',
      strokeWidth: 5
    });
    canvas.add(redCircle);
  },

  blueCircle: function () {
    var blueCircle = new fabric.Circle({
      top: 100,
      left: 200,
      radius: 30,
      fill: 'blue',
      stroke: 'black',
      strokeWidth: 5
    });
    canvas.add(blueCircle);
  },
  
  greenCircle: function () {
    var greenCircle = new fabric.Circle({
      top: 100,
      left: 300,
      radius: 30,
      fill: 'green',
      stroke: 'black',
      strokeWidth: 5
    });
    canvas.add(greenCircle);
  },

//images
//FIXME:画像をいれると遅延が大きくなる不具合
  imgCircle: function (img) {
      fabric.Image.fromURL( img, function(oImg) {
        // scale image down, and flip it, before adding it onto canvas
        oImg.scale(0.5).setFlipX(true);
        canvas.add(oImg);
        canvas.renderAll();
        });
    
  },

  //2016/12/01 start
  //textimage
  textCircle: function addText(e) {
          
        var custontxt=new fabric.IText('Tap and Type', {
          left: 100, 
          top: 100, 
          fontFamily: 'Comic Sans', 
          fontSize: 30,  
          textShadow: 'rgba(0,0,0,0.3) 5px 5px 5px'
         });
        canvas.add(custontxt);
    },
  
  //clearall
  //FIXME:同期されなくなり不安定
  clearall: function() {
    
    canvas.clear();
    canvas.renderAll.bind(canvas);
    },

  //drawCircle
  //FIXME:これなんの関数か不明
  drawCircle: function () {
      canvas.isDrawingMode = true;

      canvas.freeDrawingColor = "red";

      canvas.freeDrawingLineWidth = 5;

      canvas.renderAll();

      canvas.calcOffset();
    },

   
  //setBackgroundImageCB
  setBackgroundImageCB: function () {
    fabric.Image.fromURL('../images/moroco.png', function(img) {
      canvas.setBackgroundImage(img);
      canvas.renderAll();
    });
  },
  
};

$(document).ready(function () {
  var buttons = [];
  for (var object in canvasObjects) {
    var button = '<button onclick="addObject(\'' + object + '\')">' + object + '</button>';
    buttons.push(button);
  }
  $('#canvas-objects').append(buttons);
});

var canvas = new fabric.Canvas('canvas');

//キャンバスの背景を設定
//NOTE:使用停止中
//色バージョン
/*
var canvas = new fabric.Canvas('canvas', {
  backgroundColor: 'rgb(100,100,200)',
  selectionColor: 'blue',
  selectionLineWidth: 2
*/

function addObject (obj) {
  canvasObjects[obj]();
}

//2016/12/07
//imgCircle用にimg情報を取得
$('.cut').click(function() {
    
    var img = $(this).find("img").attr("src"); 
      canvasObjects.imgCircle(img);
    });

// Delete Button
window.deleteObject = function () {
  canvas.getActiveObject().remove();
};
document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.keyCode === 8 || event.keyCode === 46) {
    event.preventDefault();
    canvas.getActiveObject().remove();
  }
}, false);


//loadのさいにはじめから表示しておく場合
canvasObjects.redCircle();
canvasObjects.blueCircle();
canvasObjects.textCircle();
//canvasObjects.imgCircle();
//canvasObjects.setBackgroundImageCB();
//canvasObjects.blueCircle();
//canvasObjects.greenCircle();

///蛇足///
/*
$(function(){
    $('#draw-mode5').click(function() {
        sendData();
    });
});
 
function sendData() {
    $.ajax({
        url: "/",
        type: "get",
        data: {"data": "rows"},
        success: function(data) {
            alert("データが送信されました。 : " + JSON.stringify(data));
        }
    });
    
}
 

 $(function() {
  $.getJSON(data, function(data) {
    var
      ulObj = $("#draw-mode5"),
      len = data.length;

    for(var i = 0; i < len; i++) {
      ulObj.append($("<li>").attr({"id":data[i].id}).text(data[i].imgpath));
    }
  });
  
  $(function() {
  $.getJSON(data, function(data) {
    alert("データが受信されました。 : " + JSON.stringify(data));
    
    }
  );
 });
  

*/