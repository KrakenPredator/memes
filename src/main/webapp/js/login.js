var loggedInUSer = null;

function logOut() {

    loggedInUSer = null;
    $('#login-link').replaceWith("<li id=\"login-link\"><a id=\"login-link\" href=\"#modalLogin\" \" data-toggle=\"modal\"><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-in\"></span> Iniciar sesión</a></li>");
    $('#profile').replaceWith("<li id=\"profile\" style=\"display:none;\"><a  href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Perfil</a></li>");
    $('#addGames').replaceWith("<li id=\"addGames\" style='display: none;'><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n");
}

function checkear_usuario2(){


    var html =
        "<div class=\"row game\" style=\"background-color: ghostwhite; border-radius: 1%; margin: 2%;\">\n" +
        "\t\t\t\t\t<div class=\"col-md-12\">\n" +
        "\t\t\t\t\t\t<div class=\"row\" style=\"font-size: 1.5em; text-align: right;\">\n" +
        "\t\t\t\t\t\t\t<div style=\"margin-left: 0.5em\">\n" +
        "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
        "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-pencil\"></span>\n" +
        "\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
        "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n" +
        "\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-top: 1.5em;\">\n" +
        "\t\t\t\t\t\t\t<img id=\"gameCover0\" class=\"gameCover\" src=\"resources/codCover.jpg_large\" alt=\"codCover\" style=\"height:100%; width:100%; border-radius: 5%;\">\n" +
        "\t\t\t\t\t\t\t<a href=\"demoView.html\"><button href=\"/demoView.html\" id=\"demoButton0\" type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 2em;  onclick=\"openDemoTab()>Probar demo</button></a>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-top: 1.5em;\">\n" +
        "\t\t\t\t\t\t\t<span class=\"a_n\">\n" +
        "\t\t\t\t\t\t\t<p class=\"accion battle shooter zombies\">"+juegoActual.getTitle()+"</p>\n" +
        "\t\t\t\t\t\t\t<dt>Comprar aquí:</dt><dd><a href=\"storeView.html\" >Descarga digital</a>"+juegoActual.price+"</dd><dt>Desarrollador:</dt><dd>"+juegoActual.getDeveloper()+"</dd>\n" +
        "\t\t\t\t\t\t\t<dt>Editor:</dt><dd><span itemprop=\"name\">Activision</span></dd>\n" +
        "\t\t\t\t\t\t\t<div class=\"lin10\"></div><dl><dt class=\"edit_tematicas\" data-id_juego=\"28122\">Género:</dt><dd><span>Acción, Primera persona (FPS)<span class=\"c6 a_c6\">(Bélico, Zombies, Segunda Guerra Mundial y Paramilitares y mercenarios)</span></span></dd>\n" +
        "\t\t\t\t\t\t\t<dt>Jugadores:</dt><dd>1-12 (Competitivo: 12 online / Cooperativo: 4 online)</dd><dt>Duración:</dt><dd>5-6 horas + multijugador incalculable</dd>\n" +
        "\t\t\t\t\t\t\t<dt>Idioma:</dt><dd>Textos en español y voces en español</dd>\n" +
        "\t\t\t\t\t\t\t<dt>Lanzamiento:</dt><dd><span itemprop=\"releaseDate\" content=\"2017-11-03\">3 de noviembre de 2017</span>\n" +
        "\t\t\t\t\t\t\t<span class=\"c6\">(Pegi: +18)</span></dd></dl></span>\n" +
        "\t\t\t\t\t\t</div> \n" +
        "\t\t\t\t\t\n" +
        "</div>";

    $('#body').replaceWith(html);



    var user = {}
    user["username"]=$("#email").val();
    user["password"]=$("#passwd").val();

    $.ajax({
        type: "GET",
        contentType : 'application/json; charset=utf-8',
        url: "/users/search/findByUsername?username=mane",
        cache: false,
        timeout: 600000,
        dataType: 'json',
        success: function (e) {
            console.log(e);
            $.ajax({
                type: "POST",
                contentType : 'application/json; charset=utf-8',
                url: "/register",
                cache: false,
                timeout: 600000,
                dataType: 'json',
                data: JSON.stringify(e),
                success: function (e) {
                    loggedInUSer = e;
                },
                error: function (e) {
                }
            });
        },
        error: function (e) {
           console.log("failure: "+e.responseText);
           $('#iniciado').replaceWith("<p id='iniciado'>Error al iniciar sesión</p>")

        }
    });
    
}

function checkear_usuario(){
    var user = {}
    user["username"]=$("#email").val();
    user["password"]=$("#passwd").val();

    $.ajax({
        type: "POST",
        contentType : 'application/json; charset=utf-8',
        url: "/login",
        cache: false,
        timeout: 600000,
        dataType: 'json',
        data: JSON.stringify(user),
        success: function (e) {
            loggedInUSer = e;
            console.log("Successful Login "+e.name+" is inside, we are inside nigga");
            var profile = "<li id='profile'><a  href='#'><span class='glyphicon glyphicon-user'></span> "+e.name+"</a></li>";
            $('#profile').replaceWith(profile);
            $('#modalLogin').modal('hide');
            var sesion = "<li id=\"login-link\"><a onclick='logOut()' data-toggle=\"modal\" href='#'><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-out\"></span> Cerrar sesión</a></li>";
            $('#login-link').replaceWith(sesion);

            console.log(e);
            if(e.admin){
                var addGamesOption = "<li id=\"addGames\"><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n";
                $('#addGames').replaceWith(addGamesOption);
            }
        },
        error: function (e) {
            console.log("failure: "+e.responseText);
            $('#iniciado').replaceWith("<p id='iniciado'>Error al iniciar sesión</p>")

        }
    });

}