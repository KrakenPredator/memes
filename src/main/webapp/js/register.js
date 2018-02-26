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

function registrar_usurio() {
    var user = {}
    user["username"] = $("#usernameReg").val();
    user["name"] = $("#nombreReg").val()+" "+$("#apellidosReg").val();
    user["email"] = $("#emailReg").val();
    user["password"] = $("#passwdReg").val();
    var pass_rep = $("#passwdRegRep").val();
    $.ajax({
        type: "POST",
        contentType : 'application/json; charset=utf-8',
        url: "/register",
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