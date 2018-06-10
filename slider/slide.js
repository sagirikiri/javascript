var imgList =[
  "macchanrio.png",
  "shinchoku.jpg"
  ];

for(var i = 0;i < imgList.length;i++){　//for文をimgListの要素の数だけ回す
  var slide = document.createElement("li");

  slide.innerHTML = "<img src='"+imgList[i]+"'>";  //HTMLに要素を追加した
  document.getElementsByClassName("sliderInner")[0].appendChild(slide); //slideをどこに置くかをきめた

  var nav = document.createElement("li");

  nav.setAttribute("data-nav-index",i);
  document.getElementsByClassName("nav")[0].appendChild(nav);

}

var imageSlide = document.getElementsByClassName("sliderInner")[0].getElementsByTagName("li");
var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
var nowIndex = 0;
imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");
// classList.add()は引数に指定したクラス名をメソッドの前に指定している要素に付与する
// 配列でもっていて 追加・削除・含むかどうか・切り替え が簡単にできる

function sliderSlide(val) {
  
  if(isChanging === true){
      return false;
  }

  isChanging = true;
  imageSlide[nowIndex].classList.remove("show");
  dotNavigation[nowIndex].classList.remove("current");
  nowIndex = val;

  imageSlide[nowIndex].classList.add("show");
  dotNavigation[nowIndex].classList.add("current");


  slideTimer = setTimeout(function(){
      isChanging = false;
  },600)
  }

document.getElementById("arrow-prev").addEventListener("click", function(){
  var index = nowIndex - 1;
  if(index < 0){
    index = length;
  }
  sliderSlide(index);
},false);

document.getElementById("arrow-next").addEventListener("click",function(){
  var index = nowIndex + 1;
  if(index > length){
    index = 0;
  }
}, false);


for(var i = 0;i < dotNavigation.length; i++){
  dotNavigation[i].addEventListener("click",new Function(){
    var index = Number(this.getAttribute("data-nav-index"));
    sliderSlide(index);
  }, false);
}