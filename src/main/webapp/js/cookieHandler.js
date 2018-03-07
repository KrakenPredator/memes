$(document).ready(function(){
    username = Cookies.get('username');
    admin = Cookies.get('isAdmin');
    if(username!= null) {
        var profile = "<li id='profile'><a  href='#'><span class='glyphicon glyphicon-user'></span> " + username + "</a></li>";
        $('#profile').replaceWith(profile);
        var sesion = "<li id=\"login-link\"><a onclick='logOut()' data-toggle=\"modal\" href='#'><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-out\"></span> Cerrar sesión</a></li>";
        $('#login-link').replaceWith(sesion);
        if (admin == "true") {
            var addGamesOption = "<li id=\"addGames\"><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n";
            $('#addGames').replaceWith(addGamesOption);
        }else{
            var addGamesOption = "<li id=\"addGames\" style='display: none;'><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n";
            $('#addGames').replaceWith(addGamesOption);
        }
    }
});