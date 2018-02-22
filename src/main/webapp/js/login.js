var sesionIniciada = false;
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
        data: JSON.stringify(user),
        success: function (e) {
            console.log("Successful Login"+e);
            var profile = "<a id=\"profile\" href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> "+e.name+"</a>"
            $('#profile').replaceWith(profile);
            $('#modalLogin').modal('hide');
        },
        error: function (e) {
           console.log("failure: "+e.responseText);
           $('#loginForm').append("<p>Error al iniciar sesión</p>")

        }
    });
    
}