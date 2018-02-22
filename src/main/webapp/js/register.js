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