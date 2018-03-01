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
            console.log(e.toString());
        },
        error: function (e) {

        }
    });
}