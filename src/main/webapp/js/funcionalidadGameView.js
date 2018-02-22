var colIzq;
var colder;
$(document).ready(function(){
    
    var juegos = document.getElementsByClassName('gameCover');
    for(var i = 0; i <= juegos.length; i++){
        var img4 = document.createElement('img');
        img4.setAttribute('src', $('#gameCover'+i).attr('src'));
        img4.crossOrigin = "Anonymous";
        var vibrant = new Vibrant(img4);
        var swatches = vibrant.swatches();
        for (var swatch in swatches){
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
                console.log(swatch, swatches[swatch].getHex());
                document.getElementById("demoButton"+i).style.backgroundColor = swatches[swatch].getHex();
                document.getElementById("demoButton"+i).style.border = swatches[swatch].getHex();
                break;
            }
        }
    }
    colIzq = document.getElementById("colIzq").cloneNode(true);
    colDer = document.getElementById("colDer").cloneNode(true);
    
});
    

function openDemoTab(){
    var args = [];
    //src="resources/codGameplay.mkv"
    args.push("resources/codGameplay.mkv");
    newTab(args);
}

function filtrarBusquedaPorNombre() {
    
    var input, filter, ul, li, a, i;
    input = document.getElementById("busqueda");
    filter = input.value.toUpperCase();
    ul = document.getElementById("gameList");
    li = ul.getElementsByClassName("game");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
    

}



