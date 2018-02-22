$(document).ready(function(){
    start();
});
var value = 236;//236
function changeValue() {
    if(value == 0){
        
    }else{
        --value;
        document.getElementById("timer").innerHTML = Math.trunc(value/3600)+":"+Math.trunc(value/60)+":"+value%60;
    }
    
}

function start() {
  timerInterval = setInterval(changeValue, 1000);  
}