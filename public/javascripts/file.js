//アップロード
$("#uploadFile").change(function() {
    //ファイル名
    var file = this.files[0].name;

    fabric.Image.fromURL('../images/' + file, function(oImg) {
    
        oImg.scale(0.5).setFlipX(true);
        canvas.add(oImg);
        canvas.renderAll();
        });
});