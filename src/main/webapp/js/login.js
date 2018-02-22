var sesionIniciada = false;
function checkear_usuario(){
    var user = {}
    user["username"]=$("#email").val();
    user["password"]=$("#passwd").val();
    
    $.ajax({
        type: "POST",
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        url: "/login",
        cache: false,
        timeout: 600000,
        data: JSON.stringify(user),
        success: function (response) {
            console.log("SUCCESS : "+response);
        },
        error: function (e) {

            var profile = "<a id=\"profile\" href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> "+e.responseText+"</a>"

            $('#profile').replaceWith(profile);
           console.log("failure: "+e.responseText);

        }
    });
    
}