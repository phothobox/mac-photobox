//2016/12/09 fabricjs サムネイル画像の挿入 
$('.cut').on('click', function(e){
        
            //クリックされたimg要素のsrcを取得する
            var img = $(this).find('img').attr('src');
            fabric.Image.fromURL(img, function(img) {
                img = img.set({ left: 100, top: 150, angle: -10 })
                canvas.add(img);
                canvas.renderAll();
        
            });

});
    

