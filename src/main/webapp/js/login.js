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
        success: function () {

            var json = "<i class=\"fa fa-user-circle-o\">Mi cuenta</i>";
            
            
            $('#profile').replaceWith(json);

            console.log("SUCCESS : ");
    

        },
        error: function (e) {

           console.log(e);

        }
    });
    
}