//2016/12/03
//描画ペン
$('#draw-mode1').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#0000ff';
  canvas.freeDrawingBrush.width = 5;
  canvas.isDrawingMode = !canvas.isDrawingMode;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  if (canvas.isDrawingMode) { $(this).html('On'); }
  if (!canvas.isDrawingMode) { $(this).html('Off'); }
});
//Green
$('#draw-mode2').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#00ff00';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('On'); }
  if (!canvas.isDrawingMode) { $(this).html('Off'); }
});
//Red
$('#draw-mode3').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#ff0000';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('On'); }
  if (!canvas.isDrawingMode) { $(this).html('Off'); }
});
//Black
$('#draw-mode4').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#000000';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('On'); }
  if (!canvas.isDrawingMode) { $(this).html('Off'); }
});
//white
$('#draw-mode5').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#f0f0f0';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('On'); }
  if (!canvas.isDrawingMode) { $(this).html('Off'); }
});
//Yellow
$('#draw-mode6').on('click', function () {
  console.log(this);
  canvas.freeDrawingBrush.color = '#FFFF00';
  canvas.freeDrawingBrush.width = 5;
  canvas.freeDrawingBrush.setShadow("2px 2px 10px rgba(0,0,0,0.2)");
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('On'); }
  if (!canvas.isDrawingMode) { $(this).html('Off'); }
});




