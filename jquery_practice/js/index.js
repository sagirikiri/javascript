$(function(){
  $(".weather").css("color","#ff7c89").fadeOut("slow");  //.weatherのcssを変更した
});

$(function(){
  $("nav").css("background-color",'pink')
});

$(function(){
  $("#navi").css("background-color",'pink'); //idを指定している
  $(".item").css("color","red"); //クラスを指定
});

$(function(){
  $("#nice").click(function(){
      alert("いいね!");
});