$(document).ready(function(){

    $.ajax({
        type: "GET",
        contentType : 'application/json; charset=utf-8',
        url: "/games",
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success:function (listaJuegos) {
            var games = listaJuegos._embedded.games;
            var paridad = 0;
            var admin = Cookies.get("isAdmin");
            for (i = 0; i < games.length; i++) {
                var id = new URL(games[i]._links.juego.href).pathname.substring(7);
                if(admin == "true") {
                    console.log("lol");
                    var html = "<div class=\"row game\" id='game" + id + "' style=\"background-color: ghostwhite; border-radius: 1%; margin: 2%;\">\n" +
                        "\t\t\t\t\t<div class=\"col-md-12\">\n" +
                        "\t\t\t\t\t\t<div class=\"row\" style=\"font-size: 1.5em; text-align: right;\">\n" +
                        "\t\t\t\t\t\t\t<div style=\"margin-left: 0.5em\">\n" +
                        "\t\t\t\t\t\t\t\t<a href=\"createGameView.html?id=" + id + "\">\n" +
                        "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-pencil\"></span>\n" +
                        "\t\t\t\t\t\t\t\t</a>\n" +
                        "\t\t\t\t\t\t\t\t<a href=\"#\" onclick=\"delete_game(" + id + ")\">\n" +
                        "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n" +
                        "\t\t\t\t\t\t\t\t</a>\n" +
                        "\t\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-top: 1.5em;\">\n" +
                        "\t\t\t\t\t\t\t<img id=\"gameCover" + (i - 1) + "\" class=\"gameCover\" src=" + games[i].img + " style=\"height:100%; width:100%; border-radius: 5%;\">\n" +
                        "\t\t\t\t\t\t\t<a href=\"demoView.html\"><button href=\"/demoView.html\" id=\"demoButton" + (i - 1) + "\" type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 2em;  onclick=\"openDemoTab()>Probar demo</button></a>\n" +
                        "\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-top: 1.5em;\">\n" +
                        "\t\t\t\t\t\t\t<span class=\"a_n\">\n" +
                        "\t\t\t\t\t\t\t<p class=\"\">" + games[i].title + "</p>\n" +
                        "\t\t\t\t\t\t\t<dt>Comprar aquí:</dt><dd><a href=\"storeView.html\" >Descarga digital </a>" + games[i].price + "</dd><dt>Desarrollador:</dt><dd>" + games[i].developer + "</dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Editor:</dt><dd><span itemprop=\"name\">" + games[i].editor + "</span></dd>\n" +
                        "\t\t\t\t\t\t\t<div class=\"lin10\"></div><dl><dt class=\"edit_tematicas\" data-id_juego=\"" + i + "\">Género:</dt><dd><span>" + games[i].genre + "</span></dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Jugadores:</dt><dd>" + games[i].players + "</dd><dt>Duración:</dt><dd>" + games[i].duration + "</dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Idioma:</dt><dd>" + games[i].language + "</dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Lanzamiento:</dt><dd><span>" + games[i].releaseDate + "</span>\n" +
                        "\t\t\t\t\t\t\t<dt><span class=\"c6\">" + games[i].pegi + "</span></dd></dl></span>\n" +
                        "\t\t\t\t\t\t</div> \n" +
                        "\t\t\t\t\t\n" +
                        "</div>";
                }else{
                    console.log("lel");
                    var html = "<div class=\"row game\" id='game" + id + "' style=\"background-color: ghostwhite; border-radius: 1%; margin: 2%;\">\n" +
                        "\t\t\t\t\t<div class=\"col-md-12\">\n"+
                        "\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-top: 1.5em;\">\n" +
                        "\t\t\t\t\t\t\t<img id=\"gameCover" + (i - 1) + "\" class=\"gameCover\" src=" + games[i].img + " style=\"height:100%; width:100%; border-radius: 5%;\">\n" +
                        "\t\t\t\t\t\t\t<a href=\"demoView.html\"><button href=\"/demoView.html\" id=\"demoButton" + (i - 1) + "\" type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 2em;  onclick=\"openDemoTab()>Probar demo</button></a>\n" +
                        "\t\t\t\t\t\t</div>\n" +
                        "\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-top: 1.5em;\">\n" +
                        "\t\t\t\t\t\t\t<span class=\"a_n\">\n" +
                        "\t\t\t\t\t\t\t<p class=\"\">" + games[i].title + "</p>\n" +
                        "\t\t\t\t\t\t\t<dt>Comprar aquí:</dt><dd><a href=\"storeView.html\" >Descarga digital </a>" + games[i].price + "</dd><dt>Desarrollador:</dt><dd>" + games[i].developer + "</dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Editor:</dt><dd><span itemprop=\"name\">" + games[i].editor + "</span></dd>\n" +
                        "\t\t\t\t\t\t\t<div class=\"lin10\"></div><dl><dt class=\"edit_tematicas\" data-id_juego=\"" + i + "\">Género:</dt><dd><span>" + games[i].genre + "</span></dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Jugadores:</dt><dd>" + games[i].players + "</dd><dt>Duración:</dt><dd>" + games[i].duration + "</dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Idioma:</dt><dd>" + games[i].language + "</dd>\n" +
                        "\t\t\t\t\t\t\t<dt>Lanzamiento:</dt><dd><span>" + games[i].releaseDate + "</span>\n" +
                        "\t\t\t\t\t\t\t<dt><span class=\"c6\">" + games[i].pegi + "</span></dd></dl></span>\n" +
                        "\t\t\t\t\t\t</div> \n" +
                        "\t\t\t\t\t\n" +
                        "</div>";
                    }
                if(paridad == 0){
                    paridad = 1;
                    $("#colIzq").append(html);
                }else{
                    paridad = 0;
                    $("#colDer").append(html);
                }
                }

        },
        error: function (e) {
            console.log(e.toString());
        }
    });


});

function filtrarBusquedaPorNombre() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    ul = document.getElementById("gameList");
    li = ul.getElementsByClassName("game");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function delete_game(param) {
    $.ajax({
        type: "DELETE",
        contentType : 'application/json; charset=utf-8',
        url: "/deleteGame/"+param,
        cache: false,
        timeout: 600000,
        success:function () {
            document.getElementById('game'+param).remove();
        },
        error:function(){
        }
    });
}