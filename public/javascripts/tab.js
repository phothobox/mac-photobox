$(function(){
  $('#tab-menu li').on('click', function(){
    if($(this).not('active')){
      // タブメニュー
      $(this).addClass('active').siblings('li').removeClass('active');
      // タブの中身
      var index = $('#tab-menu li').index(this);
      $('#tab-box div').eq(index).addClass('active').siblings('div').removeClass('active');
    }
  });
});