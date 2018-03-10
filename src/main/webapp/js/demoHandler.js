var url;
$(document).ready(function () {
    params = new URL(document.location.href).search;
    url = params.substring(5);
    start();
});

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        width: 853,
        height: 480,
        videoId: url,
        playerVars: {
            autoplay: 1,
            controls: 0,
            color: 'white'
        }
    });
}

$('#pause').on('click', function () {
    console.log("paused");
});

var value = 3600;
var current = 0;
function changeValue() {
    var actual = player.getCurrentTime();
    if(actual>current) {
        value-=1;
    }
    document.getElementById("timer").innerHTML = Math.trunc(value / 3600) + ":" + Math.trunc(value / 60) + ":" + value % 60;
    current = player.getCurrentTime();
}

function start() {
    timerInterval = setInterval(changeValue, 1000);
}

function probarDemo(gameId) {
    $.ajax({
        type: "GET",
        contentType : 'application/json; charset=utf-8',
        url: "/demos/{gameId}",
        cache: false,
        timeout: 600000,
        success:function () {

        },
        error:function(){
        }
    });
}