  var element = document.getElementById("weather");

  element.innerHTML　= "<span>曇り</span>";
  element.style.color = "#FF7d89";

  var classElement = document.querySelector(".weather");　//querySelectorはクラスやセレクタで要素
  console.log(classElement);
  classElement.weather = "color:#ff7c89";
  
  var querySelectorElement = document.querySelector("dl");
  console.log(querySelectorElement);

  var element = document.createElement("p");  //タグを生成する
  var text = document.createTextNode("こんにちは"); //テキストを生成する

  document.body.appendChild(element).appendChild(text);//どこに要素を追加するかをきめている
　
 
