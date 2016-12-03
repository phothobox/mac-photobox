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
  imgCircle: function () {
      fabric.Image.fromURL('../images/icon.png', function(oImg) {
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
 
});
*/
//写真バージョン
//canvas.setBackgroundImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {

//imagesバージョン
// canvas.setBackgroundImage('../images/moroco.png', canvas.renderAll.bind(canvas), {});

//1203 start
//描画モードオンオフ
/*標準
$('#draw-mode').on('click', function () {
  console.log(this);
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});
*/
//Blue
$('#draw-mode1').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#0000ff';
  canvas.freeDrawingBrush.width = 5;
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});
//Green
$('#draw-mode2').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#00ff00';
  canvas.freeDrawingBrush.width = 5;
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});
//Red
$('#draw-mode3').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#ff0000';
  canvas.freeDrawingBrush.width = 5;
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});

//1203 end

function addObject (obj) {
  canvasObjects[obj]();
}

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


