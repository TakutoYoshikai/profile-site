var isEntered = [
  false,
];

var msgs = [
  "僕の名前は吉開拓人。大学生だよ",
  "趣味はカフェ巡り。行きつけのお店がたくさんあるよ！",
  "アニメも大好き！",
  "こう見えてパソコンに強いです(キリッ",
  "よければ友達になってください！",
  "Facebookはこちら！"
];

var images = [
  "./images/takuto.jpg",
  "./images/cafe.jpg",
  "./images/anime.jpg",
  "./images/pc.jpg",
  "./images/qr.jpg",
  "./images/facebook.jpg"

];

function addChar(index) {
  if (msgs[index] == "") {
    clearInterval(timers[index]);
    if (index == 4) {
      document.getElementById("msg" + index).innerHTML += "<br><br><a href='http://line.naver.jp/ti/p/Y-sPE4erWR'><img src='" + images[index] + "' class='img'></a>";
    } else if (index == 5) {
      document.getElementById("msg" + index).innerHTML += "<br><br><a href='https://m.facebook.com/qr?id=100008255985123'><img src='" + images[index] + "' class='img'></a>";
    } else {
      document.getElementById("msg" + index).innerHTML += "<br><br><img src='" + images[index] + "' class='img'>";
    }
    return;
  }
  var ch = msgs[index][0];
  msgs[index] = msgs[index].slice(1);
  document.getElementById("msg" + index).innerHTML += ch;
}

var timers = [
  null,
  null,
  null,
  null,
  null,
  null
];

window.onload = function() {
    timers[0] = setInterval(function() {
      addChar(0);
    }, 100);
    isEntered[0] = true;
}
window.onscroll = function(e) {
  var scrollHeight = document.documentElement.scrollHeight - (document.body.scrollTop || document.documentElement.scrollTop)- document.documentElement.clientHeight;
  console.log(scrollHeight);
  if (scrollHeight < 2000 && !isEntered[1]) {
    timers[1] = setInterval(function() {
      addChar(1);
    }, 100);
    isEntered[1] = true;

  }
  if (scrollHeight < 1500 && !isEntered[2]) {
    timers[2] = setInterval(function() {
      addChar(2);
    }, 100);
    isEntered[2] = true;
  } 
  if (scrollHeight < 1000 && !isEntered[3]) {
    timers[3] = setInterval(function() {
      addChar(3);
    }, 100);
    isEntered[3] = true;
  }
  if (scrollHeight < 500 && !isEntered[4]) {
    timers[4] = setInterval(function() {
      addChar(4);
    }, 100);
    isEntered[4] = true;

  } 
  if (scrollHeight < 90 && !isEntered[5]) {
    timers[5] = setInterval(function() {
      addChar(5);
    }, 100);
    isEntered[5] = true;
  } 
}
