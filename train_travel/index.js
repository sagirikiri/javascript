function inputStation() {
   var station = prompt("1.A駅 2.B駅 3.C駅\n行き先の駅を1, 2, 3から選んでください"); //ローカル変数
   station = Number(station);
   return station;
}

var station = inputStation();

function getTrainType(station) {
    var type;

    switch(station){
  case 1:
     type ="快速";
     break;
  case 2:
     type ="快速と急行";
     break;
  case 3:
     type ="特急";
     break;
  default:
     // 選択肢以外のものを入力した場合はエラー文を表示
     alert("駅が正しく入力されていません。このページを再度読み込んでください。");
}
    return type;
    }

var type = getTrainType(station); 

function displayTrainType() {
  var station = inputStation();
  var type = getTrainType(station);

  if(station >= 1 && station <= 3){

    alert("その駅には"+type+"が停車します");
  }else{
    displayTrainType();
  }
}

displayTrainType();

