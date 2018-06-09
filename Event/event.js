//相手の反応
var answer = ["なるほど!","そうなんですか？","さすがです!","知らなかったです~","すごいですね!","センスいい〜"];


// ページを表示してから赤文字でテキストを追加
function addChatText(val,type) {
    if(!val) return false;
 
     var text = document.createElement('li'); //チャットに追加するHTMLタグの生成
    text.innerHTML = val;　//innerHTMLは、HTMLタグの中身を書き込み・上書きをするメソッド

    if(type == "other"){
      text.classList.add("messageOther");　//otherの投稿にmessageOtherクラスを追加
    }

    var chatWindow = document.getElementById("chatList");
    chatWindow.appendChild(text);　//appendChild()で要素とテキストをHTMLに追加
}

// はじめの相手の反応
setTimeout(function(){
  addChatText("こんにちは!","other") //
},1000);



//送信ボタンを押されたときのメソッド
document.getElementById('chatSend').addEventListener("click",function(){ //送信ボタンを押したときの動作を設計
    var inputText = document.getElementById("chatInput");
    addChatText(inputText.value,"you");
    inputText.value = "";

});

setInterval(function(){
  var index = Math.floor(Math.random() * answer.length);
  addChatText(answer[index],"other");　//otherの発言としてanswerを返す。

},8000);//8秒後に返信が返ってくる
