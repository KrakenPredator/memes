var sesionIniciada = false;

function logOut() {

    sesionIniciada = false;
    $('#login-link').replaceWith("<li id=\"login-link\"><a id=\"login-link\" href=\"#modalLogin\" \" data-toggle=\"modal\"><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-in\"></span> Iniciar sesión</a></li>");
    $('#profile').replaceWith("<li id=\"profile\" style=\"display:none;\"><a  href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Perfil</a></li>");

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
            console.log("Successful Login"+e.name+" is inside, we are inside nigga");
            var profile = "<li id='profile'><a  href='#'><span class='glyphicon glyphicon-user'></span> "+e.name+"</a></li>";
            $('#profile').replaceWith(profile);
            $('#modalLogin').modal('hide');
            var sesion = "<li id=\"login-link\"><a onclick='logOut()' data-toggle=\"modal\" href='#'><span id=\"sesion-icon\" class=\"glyphicon glyphicon-log-out\"></span> Cerrar sesión</a></li>";
            $('#login-link').replaceWith(sesion);
        },
        error: function (e) {
           console.log("failure: "+e.responseText);
           $('#iniciado').replaceWith("<p id='iniciado'>Error al iniciar sesión</p>")

        }
    });
    
}