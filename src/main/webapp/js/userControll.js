$(document).ready(function(){
    username = Cookies.get('username');
    admin = Cookies.get('isAdmin');
    if(username!= null) {
        var profile = "<li id='profile'><a  href='#'><span class='glyphicon glyphicon-user'></span> " + username + "</a></li>";
        $('#profile').replaceWith(profile);
        var sesion = "<li id=\"login-link\"><a onclick='logOut()' data-toggle=\"modal\" href='#'><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-out\"></span> Cerrar sesión</a></li>";
        $('#login-link').replaceWith(sesion);
        var botoneria = '<li><a href="gamesView.html"> <span class="fa fa-gamepad"></span> Juegos</a></li>\n' +
            '                    <li id="addGames" style=\'display: none;\'><a href="createGameView.html"> <span class="fa fa-gamepad" ></span> Añadir Juegos</a></li>\n' +
            '                ';
        $("#botoneria").append(botoneria);
        if (admin == "true") {
            var addGamesOption = "<li id=\"addGames\"><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n";
            $('#addGames').replaceWith(addGamesOption);
        }else{
            var addGamesOption = "<li id=\"addGames\" style='display: none;'><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n";
            $('#addGames').replaceWith(addGamesOption);
        }
    }
});

function logOut() {
    loggedInUSer = null;
    $('#login-link').replaceWith("<li id=\"login-link\"><a id=\"login-link\" href=\"#modalLogin\" \" data-toggle=\"modal\"><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-in\"></span> Iniciar sesión</a></li>");
    $('#profile').replaceWith("<li id=\"profile\" style=\"display:none;\"><a  href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Perfil</a></li>");
    $('#addGames').replaceWith("<li id=\"addGames\" style='display: none;'><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n");
    Cookies.remove('username');
    Cookies.remove('isAdmin');
    Cookies.remove('userId');
    var host = new URL(document.location.href).host;
    window.location.href = "http://"+host+"/";
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
            Cookies.set('username', e.name, {expires: 14});
            Cookies.set('isAdmin', e.admin, {expires: 14});
            Cookies.set('userId', e.id, {expires: 14});
            var profile = "<li id='profile'><a  href='#'><span class='glyphicon glyphicon-user'></span> "+e.name+"</a></li>";
            $('#profile').replaceWith(profile);
            $('#modalLogin').modal('hide');
            var sesion = "<li id=\"login-link\"><a onclick='logOut()' data-toggle=\"modal\"><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-out\"></span> Cerrar sesión</a></li>";
            $('#login-link').replaceWith(sesion);
            var botoneria = '<li><a href="gamesView.html"> <span class="fa fa-gamepad"></span> Juegos</a></li>\n' +
                '                    <li id="addGames" style=\'display: none;\'><a href="createGameView.html"> <span class="fa fa-gamepad" ></span> Añadir Juegos</a></li>\n' +
                '                ';
            $("#botoneria").append(botoneria);
            console.log(e.admin);
            if(e.admin){
                var addGamesOption = "<li id=\"addGames\"><a href=\"createGameView.html\"> <span class=\"fa fa-gamepad\" ></span> Añadir Juegos</a></li>\n";
                $('#addGames').replaceWith(addGamesOption);
            }else{
                var host = new URL(document.location.href).host;
                window.location.href = "http://"+host+"/gamesView.html";
            }
        },
        error: function (e) {
            console.log("failure: "+e.responseText);
            $('#iniciado').replaceWith("<p id='iniciado'>"+e.responseText+"</p>")

        }
    });

}

var modalShow = true;

function changeModal() {
    if (modalShow){
        $('#modalLogin').modal('hide');
        $('#modalRegister').modal('show');
        modalShow = false;
    }else{
        $('#modalRegister').modal('hide');
        $('#modalLogin').modal('show');
        modalShow = true;
    }
}

function registrar_usuario() {
    var game = {}
    game["username"] = $("#usernameReg").val();
    game["name"] = $("#nombreReg").val();
    game["email"] = $("#emailReg").val();
    game["password"] = $("#passwdReg").val();
    var pass_rep = $("#passwdRegRep").val();
    $.ajax({
        type: "POST",
        contentType : 'application/json; charset=utf-8',
        url: "/register",
        cache: false,
        timeout: 600000,
        dataType: 'json',
        data: JSON.stringify(game),
        success:function (e) {
            changeModal();
        },
        error: function (e) {

        }
    });
}

