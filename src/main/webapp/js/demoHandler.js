var url;
var gId;
var parametros;
var value = 15;
var inicial = 15;
$(document).ready(function () {
    parametros = new URL(document.location.href).search;
    url = parametros.substring(5, 16);
    gId = parametros.substring(21);
    $.ajax({
        type: "GET",
        contentType : 'application/json; charset=utf-8',
        url: "/checkDemo/"+gId+"/"+Cookies.get("userId"),
        cache: false,
        timeout: 600000,
        success:function (e) {
            console.log("valor actualizado");
            value = e.toString();
            inicial = value;
            start();
        },
        error: function (e) {
            alert("Ha superdado el tiempo de prueba");
            var host = new URL(document.location.href).host;
            window.location.href = "http://"+host+"/gamesView.html";
        }
    });
});

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        width: 853,
        height: 480,
        videoId: url,
        playerVars: {
            controls: 0,
            color: 'white',
        },
        events: {
            'onReady': autoPlay
        }
    });
}

function autoPlay(){
    player.playVideo();
}

function pauseDemo() {
    $(".container-fluid").hide();
    $.ajax({
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        url: "/saveDemo/" + parametros.substring(21) + "/" + Cookies.get("userId") + "/" + (inicial - value),
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (e) {
            alert("Ha consumido el tiempo de demo");
            var host = new URL(document.location.href).host;
            window.location.href = "http://"+host+"/gamesView.html";
        },
        error: function (e) {
            alert("Ha consumido el tiempo de demo");
            var host = new URL(document.location.href).host;
            window.location.href = "http://"+host+"/gamesView.html";        }
    });
}


var current = 0;
var interval;
function changeValue() {
    if(value == 0){
        player.stopVideo();
        pauseDemo();
        clearInterval(interval);
    }else{
        var actual = player.getCurrentTime();
        if (actual > current) {
            value -= 1;
        }
        document.getElementById("timer").innerHTML = Math.trunc(value / 3600) + ":" + Math.trunc(value / 60) + ":" + value % 60;
        current = player.getCurrentTime();
    }
}
function start() {
    interval = setInterval(changeValue, 1000);
}



