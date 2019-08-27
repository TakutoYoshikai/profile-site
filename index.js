var isEntered = [
  false,
];

var msgs = [
  "僕の名前は吉開拓人。大学生だよ",
  "趣味はカフェ巡り。行きつけのお店がたくさんあるよ！",
  "こう見えてパソコンに強いです(キリッ",
  "よければ友達になってください！"
];

var images = [
  "./images/takuto.jpg",
  "./images/cafe.jpg",
  "./images/pc.jpg",
  "./images/qr.jpg",

];

function addChar(index) {
  if (msgs[index] == "") {
    clearInterval(timers[index]);
    document.getElementById("msg" + index).innerHTML += "<br><br><img src='" + images[index] + "' class='img'>";
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
  null
];

window.onload = function() {
    timers[0] = setInterval(function() {
      addChar(0);
    }, 100);
    isEntered[0] = true;
}
window.onscroll = function(e) {
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
  console.log(scrollHeight);
  if (scrollHeight < 700 && !isEntered[1]) {
    timers[1] = setInterval(function() {
      addChar(1);
    }, 100);
    isEntered[1] = true;
  } else if (scrollHeight < 400 && !isEntered[2]) {
    timers[2] = setInterval(function() {
      addChar(2);
    }, 100);
    isEntered[2] = true;
  } else if (scrollHeight < 20 && !isEntered[3]) {
    timers[3] = setInterval(function() {
      addChar(3);
    }, 100);
    isEntered[3] = true;

  }
}
