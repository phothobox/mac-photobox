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
//FIXME:画像をいれると遅延が大きくなる不具合(廃止中)
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
          
        var custontxt=new fabric.IText('Tap and Type', {left: 100, top: 100, fontFamily: 'Comic Sans', fontSize: 30,  textShadow: 'rgba(0,0,0,0.3) 5px 5px 5px' });
        canvas.add(custontxt);
    },
  
  //clearall
  //FIXME:同期されなくなり不安定(廃止中)
  clearall: function() {
    
    canvas.clear();
    canvas.renderAll.bind(canvas);
    },

  //2016/12/01 end
  //drawCircle
  //FIXME:これなんの関数か不明
  drawCircle: function () {
      canvas.isDrawingMode = true;

      canvas.freeDrawingColor = "red";

      canvas.freeDrawingLineWidth = 5;

      canvas.renderAll();

      canvas.calcOffset();
    }
  
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
/*
//色バージョン
var canvas = new fabric.Canvas('canvas', {
  backgroundColor: 'rgb(100,100,200)',
  selectionColor: 'blue',
  selectionLineWidth: 2
 
});
*/
//写真バージョン
//canvas.setBackgroundImage('http://fabricjs.com/assets/jail_cell_bars.png', canvas.renderAll.bind(canvas), {

//imagesバージョン
  canvas.setBackgroundImage('../images/moroco.png', canvas.renderAll.bind(canvas), {

});


//描画モードオンオフ
$('#draw-mode').on('click', function () {
  console.log(this);
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});

//2016/12/02 start
//change background
//FIXME:同期がされなくなるので背景変化は今は使わない
/*
$('#draw-bg').on('click', function () {
   canvas.setBackgroundImage('../images/moroco.png', canvas.renderAll.bind(canvas), {});
});
*/
//2016/12/02 end


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

canvasObjects.redCircle();
canvasObjects.blueCircle();
canvasObjects.greenCircle();
//2016/12/02 start
//canvasObjects.imgCircle();
canvasObjects.textCircle();
//canvasObjects.clearall();
//canvasObjects.drawCircle();
//2016/12/02 end
