function eliminar_juego() {
    $.ajax({
        type: "DELETE",
        contentType : 'application/json; charset=utf-8',
        url: "/deleteGame/"+param,
        cache: false,
        timeout: 600000,
        datatype: 'json',
        success:function () {

        },
        error:function(){
        }
    });
}

function registrar_juego() {
    console.log(param);
    eliminar_juego();
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