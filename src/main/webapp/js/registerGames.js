var img;
var file = document.getElementById("img");

function fileChoose() {
    var filePath = $("#img").val();
    console.log(filePath);
    img = filePath;
}

function registrar_juego() {
    var juego = {}
    juego["title"] = $("#title").val();
    juego["price"] = $("#price").val();
    juego["developer"] = $("#developer").val();
    juego["duration"] = $("#duration").val();
    juego["editor"] = $("#editor").val();
    juego["players"] = $("#players").val();
    juego["genre"] = $("#genre").val();
    juego["gameLanguage"] = $("#language").val();
    juego["releaseDate"] = $("#releaseDate").val();
    juego["pegi"] = $("#pegi").val();
    juego["url"] = "";
    juego["imgUrl"] = $("#img").val();
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