//206/12/09 
$("input:radio[name=bg]").change(function() {
 
         //チェックされた値で背景を動的に書き換える 
            fabric.Image.fromURL("../images/"+$( this ).val(), function(img) {
                canvas.setBackgroundImage(img);
                canvas.renderAll();
        
    });
 });
    