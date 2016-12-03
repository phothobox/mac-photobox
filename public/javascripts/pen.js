//2016/12/03
//描画ペン
$('#draw-mode1').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#0000ff';
  canvas.freeDrawingBrush.width = 5;
  canvas.isDrawingMode = !canvas.isDrawingMode;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});
//Green
$('#draw-mode2').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#00ff00';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});
//Red
$('#draw-mode3').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#ff0000';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});
//Black
$('#draw-mode4').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#000000';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});




