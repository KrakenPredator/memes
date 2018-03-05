function pintar_juego(juegoActual) {
    var html =
        "<div class=\"row game\" style=\"background-color: ghostwhite; border-radius: 1%; margin: 2%;\">\n" +
        "\t\t\t\t\t<div class=\"col-md-12\">\n" +
        "\t\t\t\t\t\t<div class=\"row\" style=\"font-size: 1.5em; text-align: right;\">\n" +
        "\t\t\t\t\t\t\t<div style=\"margin-left: 0.5em\">\n" +
        "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
        "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-pencil\"></span>\n" +
        "\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t\t<a href=\"#\">\n" +
        "\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span>\n" +
        "\t\t\t\t\t\t\t\t</a>\n" +
        "\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"col-md-4\" style=\"margin-top: 1.5em;\">\n" +
        "\t\t\t\t\t\t\t<img id=\"gameCover0\" class=\"gameCover\" src=\"resources/codCover.jpg_large\" alt=\"codCover\" style=\"height:100%; width:100%; border-radius: 5%;\">\n" +
        "\t\t\t\t\t\t\t<a href=\"demoView.html\"><button href=\"/demoView.html\" id=\"demoButton0\" type=\"button\" class=\"btn btn-primary\" style=\"margin-top: 2em;  onclick=\"openDemoTab()>Probar demo</button></a>\n" +
        "\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t<div class=\"col-md-8\" style=\"margin-top: 1.5em;\">\n" +
        "\t\t\t\t\t\t\t<span class=\"a_n\">\n" +
        "\t\t\t\t\t\t\t<p class=\"accion battle shooter zombies\">"+juegoActual.getTitle()+"</p>\n" +
        "\t\t\t\t\t\t\t<dt>Comprar aquí:</dt><dd><a href=\"storeView.html\" >Descarga digital</a>"+juegoActual.price+"</dd><dt>Desarrollador:</dt><dd>"+juegoActual.getDeveloper()+"</dd>\n" +
        "\t\t\t\t\t\t\t<dt>Editor:</dt><dd><span itemprop=\"name\">Activision</span></dd>\n" +
        "\t\t\t\t\t\t\t<div class=\"lin10\"></div><dl><dt class=\"edit_tematicas\" data-id_juego=\"28122\">Género:</dt><dd><span>Acción, Primera persona (FPS)<span class=\"c6 a_c6\">(Bélico, Zombies, Segunda Guerra Mundial y Paramilitares y mercenarios)</span></span></dd>\n" +
        "\t\t\t\t\t\t\t<dt>Jugadores:</dt><dd>1-12 (Competitivo: 12 online / Cooperativo: 4 online)</dd><dt>Duración:</dt><dd>5-6 horas + multijugador incalculable</dd>\n" +
        "\t\t\t\t\t\t\t<dt>Idioma:</dt><dd>Textos en español y voces en español</dd>\n" +
        "\t\t\t\t\t\t\t<dt>Lanzamiento:</dt><dd><span itemprop=\"releaseDate\" content=\"2017-11-03\">3 de noviembre de 2017</span>\n" +
        "\t\t\t\t\t\t\t<span class=\"c6\">(Pegi: +18)</span></dd></dl></span>\n" +
        "\t\t\t\t\t\t</div> \n" +
        "\t\t\t\t\t\n" +
        "</div>"


}