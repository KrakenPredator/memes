$(document).ready(function(){
    start();
});
var value = 3600;
function changeValue() {
    --value;
  document.getElementById("timer").innerHTML = Math.trunc(value/3600)+":"+Math.trunc(value/60)+":"+value%60;
}

function start() {
  timerInterval = setInterval(changeValue, 1000);  
}