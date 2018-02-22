function checkear_usuario(){
    var user = {}
    user["username"]=$("#email").val();
    user["password"]=$("#passwd").val();
    
    $.ajax({
        type: "GET",
        contentType : 'application/json; charset=utf-8',
        dataType : 'json',
        url: "/login",
        data: JSON.stringify(user),
        success: function () {

            var json = "<i class=\"fa fa-user-circle-o\">Mi cuenta</i>";
            
            
            $('#profile').html(json);

            console.log("SUCCESS : ");
    

        },
        error: function (e) {

           console.log(e);

        }
    });
    
}