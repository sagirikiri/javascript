function hello(argument) {
  alert("hello world");
}

// 関数のよびだし
hello(); 


function checkAmPm(currentHour) {
  if(currentHour < 12){
    console("AM"+currentHour+"時");
  }
  else if (currentHour == 12) {
    console.log("正午");
  }
  else{
    console.log("PM"+currentHour+"時");
  }
}

// 関数のよびだし
　checkAmPm(11);
  checkAmPm(12);
  checkAmPm(23);