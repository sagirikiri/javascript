function hello(argument) {
  alert("hello world");
}

// 関数のよびだし
hello(); 


function checkAmPm(currentHour) {

  var result; //ローカル変数（関数内でのみ使える）
  if(currentHour < 12){
    return "午前"+currentHour+"時";
  }
  else if (currentHour == 12) {
    return "正午"+currentHour+"時";
  }
  else{
    return "午後";
  }
}

var currentHour = 11; //グローバル変数（どこでも使える）


// 関数のよびだし
　checkAmPm(11);
  checkAmPm(12);
  checkAmPm(23);

