var url;
var gId;
var parametros;
$(document).ready(function () {
    parametros = new URL(document.location.href).search;
    url = parametros.substring(5, 16);
    gId = parametros.substring(21);
    start();
});

var player;

var value = 3600;

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


function pauseDemo() {
    player.pauseVideo();
    console.log("/saveDemo/" + parametros.substring(21) + "/" + Cookies.get("userId") + "/" + (3600 - value));
    $.ajax({
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        url: "/saveDemo/" + parametros.substring(21) + "/" + Cookies.get("userId") + "/" + (3600 - value),
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (e) {

        },
        error: function (e) {
            //AQUI VA EL CODIGO PARA MOSTRAR QUE NO PUEDE PORQUE NO TIENE TIEMPO
        }
    });
}

$('#pause').on('click', function () {
    console.log("paused");
});

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



