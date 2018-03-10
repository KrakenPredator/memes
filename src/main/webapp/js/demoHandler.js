var api = "AIzaSyC-nQaxVToNcO3Kz8jjvmn5CCtVBPoYEGc";

// Search for a specified string.
$(document).ready(function search() {
    gapi.client.set("apiKey", "AIzaSyC-nQaxVToNcO3Kz8jjvmn5CCtVBPoYEGc");
    gapi.client.load("youtube", "v3", function () {

    });
    var q = "cod gameplay";
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
    });

    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        console.log(response.result);
        var video = '<div class="embed-responsive embed-responsive-16by9">\n' +
            '            <iframe width="1920" height="1080" src="https://www.youtube.com/embed/0AByE1oa84E?autoplay=1&showinfo=0&controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n' +
            '        </div>'
    });
});