var img;
var file = document.getElementById("img");

function fileChoose() {
    var filePath = $("#img").val();
    console.log(filePath);
    img = filePath;
}

function registrar_juego() {
    var formData = new FormData($('#game')[0]);
    var user = {}
    user["title"] = $("#title").val();
    user["price"] = $("#price").val();
    user["developer"] = $("#developer").val();
    user["duration"] = $("#duration").val();
    user["editor"] = $("#editor").val();
    user["players"] = $("#players").val();
    user["genre"] = $("#genre").val();
    user["language"] = $("#language").val();
    user["releaseDate"] = $("#releaseDate").val();
    user["pegi"] = $("#pegi").val();
    user["img"] = formData;
    $.ajax({
        type: "POST",
        contentType : 'application/json; charset=utf-8',
        url: "/saveGame",
        cache: false,
        timeout: 600000,
        dataType: 'json',
        data: JSON.stringify(user),
        success:function (e) {
            console.log(e.toString());
        },
        error: function (e) {

        }
    });
}