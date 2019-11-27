var isEntered = [
  false,
];

var msgs = [
  "My name is Takuto Yoshikai. an Keio University student.",
  "I am an application creator. My hobby is programming too.",
  "I love anime!",
  "My life is slow pace. stopping, doing my best, and stopping",
  "Be my friend!",
  "Facebook: "
];

var images = [
  "./images/takuto3.jpg",
  "./images/dengencafe.jpg",
  "./images/bungo.jpeg",
  "./images/takuto2.jpg",
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
    }, 30);
    isEntered[0] = true;
}
window.onscroll = function(e) {
  var scrollHeight = document.documentElement.scrollHeight - (document.body.scrollTop || document.documentElement.scrollTop)- document.documentElement.clientHeight;
  console.log(scrollHeight);
  if (scrollHeight < 2000 && !isEntered[1]) {
    timers[1] = setInterval(function() {
      addChar(1);
    }, 30);
    isEntered[1] = true;

  }
  if (scrollHeight < 1500 && !isEntered[2]) {
    timers[2] = setInterval(function() {
      addChar(2);
    }, 30);
    isEntered[2] = true;
  } 
  if (scrollHeight < 1000 && !isEntered[3]) {
    timers[3] = setInterval(function() {
      addChar(3);
    }, 30);
    isEntered[3] = true;
  }
  if (scrollHeight < 500 && !isEntered[4]) {
    timers[4] = setInterval(function() {
      addChar(4);
    }, 30);
    isEntered[4] = true;

  } 
  if (scrollHeight < 90 && !isEntered[5]) {
    timers[5] = setInterval(function() {
      addChar(5);
    }, 30);
    isEntered[5] = true;
  } 
}
