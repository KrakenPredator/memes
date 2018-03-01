var img;

$("#img").on('change', function () {
    var filePath = $(this).val();
    img = filePath;
})

function registrar_juego() {
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
    user["img"] = img;
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