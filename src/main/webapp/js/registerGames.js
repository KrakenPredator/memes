var param = undefined;

$(document).ready(function () {
    param = new URL(document.location.href).search.substring(4);
    if(param != "")
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

function delete_game() {

    $.ajax({
        type: "DELETE",
        contentType : 'application/json; charset=utf-8',
        url: "/deleteGame/"+param,
        cache: false,
        timeout: 600000,
        success:function () {

        },
        error:function(){
        }
    });
}

function registrar_juego() {
    if(param != "")
        delete_game();
    var juego = {};
    juego["title"] = $("#title").val();
    juego["price"] = $("#price").val();
    juego["developer"] = $("#developer").val();
    juego["duration"] = $("#duration").val();
    juego["editor"] = $("#editor").val();
    juego["players"] = $("#players").val();
    juego["genre"] = $("#genre").val();
    juego["language"] = $("#language").val();
    juego["releaseDate"] = $("#releaseDate").val();
    juego["pegi"] = "Pegi: +"+$("#pegi").val();
    juego["url"] = "";
    juego["img"] = $("#img").val();

    $.ajax({
        type: "POST",
        contentType : 'application/json; charset=utf-8',
        url: "/saveGame",
        cache: false,
        timeout: 600000,
        dataType: 'json',
        data: JSON.stringify(juego),
        success:function (e) {
            console.log(e.toString());
        },
        error: function (e) {

        }
    });
}