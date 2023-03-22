
$(function(){
  //タイトルのフォームが入力されたらsubmitボタンを押せるようにする

  //タイトルフォームが入力されたら場合のイベントセット
  $('.js-form-validate').on('keyup',function(){
    //タイトルフォームの中身を取得してて中身が入っているか確認
    if($(this).val()){
      //中身が入っているならsubmitを活性にする(disalbedを外す)
      $('.js-disabled-submit').prop('disabled', false);
    }else{
      //中身が入っていなければ非活性に戻す
      $('.js-disabled-submit').prop('disabled', true);
    }
  });

});
