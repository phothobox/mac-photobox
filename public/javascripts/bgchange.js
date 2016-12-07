$(function() {
 
    /*
     * ラジオボタンのチェックが変更されたタイミングで
     * 呼び出されるイベントハンドラ―を登録
     */
    $("input:radio[name=bg]").change(function() {
 
        // チェックされた値をコンソール出力
        console.log($( this ).val());
         
         //チェックされた値でcssを動的に書き換える
         $('#layer1').css({
              
                backgroundImage: 'url("images/'+$( this ).val()+'")'

            });

        
    });
 
    /*
     * このタイミングで選択されている値を外部から書き換えても、
     * 登録したchangeイベントハンドラは呼び出されない
     */
    
    //$("input[name=bg]").val(["bg1.jpg"]);
 
    /*
     * そこで、現在選択されているchangeイベントを直接呼び出す。
     */
    //$("input:radio[name=bg]:checked").change();
 
});