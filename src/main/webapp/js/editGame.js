var param = undefined;
$(document).ready(function () {
    param = new URL(document.location.href).search.substring(4);
    $.ajax({
        type: "GET",
        contentType: 'application/json; charset=utf-8',
        url: "/games/"+param,
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (game) {
            $("#img").val(game.img);
            $("#title").val(game.title);
            $("#price").val(game.price);
            $("#developer").val(game.developer);
            $("#duration").val(game.duration);
            $("#editor").val(game.editor);
            $("#players").val(game.players);
            $("#genre").val(game.genre);
            $("#language").val(game.language);
            $("#releaseDate").val(game.releaseDate);
            $("#pegi").val(game.pegi);
        },
        error: function (e) {
            console.log("failure: " + e.responseText);
        }
    });

});