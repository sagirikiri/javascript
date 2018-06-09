var imgList =[
  "macchanrio.png",
  "shinchoku.jpg"
  ];

for(var i = 0;i < imgList.length;i++){
  var slide = document.createElement("li");

  slide.innerHTML = "<img src='"+imgList[i]+"'>";  //HTMLに要素を追加した
  document.getElementsByClassName("sliderInner")[0].appendChild(slide) //slideをどこに置くかをきめた

  var nav = document.createElement("li");

  nav.setAttribute("data-nav-index",i);
  document.getElementsByClassName("nav")[0].appendChild(nav);

}