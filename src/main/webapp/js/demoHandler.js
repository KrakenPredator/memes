var stop = true;
var url;
$(document).ready(function () {

    url = "TSYqDvTLOYU";
    start();
});

function place_video (url) {
    /*var embedded = '<div id="video" class="embed-responsive embed-responsive-16by9">\n' +
        '            <iframe width="1920" height="1080" src="https://www.youtube.com/embed/'+url+'?autoplay=1&showinfo=0&controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n' +
        '           </div>';
    $('#video').replaceWith(embedded);*/
}

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
        }/*,
        events: {
            onReady: initialize
        }*/
    });
}
/*
function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)

}

// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time').text(formatTime( player.getCurrentTime() ));
    $('#duration').text(formatTime( player.getDuration() ));
}

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}

$('#progress-bar').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player.seekTo(newTime);

});

function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100);
}
*/

$('#video').on('click', function () {
    player.pauseVideo();
    stop = false;
});

$('#video').on('click', function () {
    player.playVideo();
    stop = true;
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