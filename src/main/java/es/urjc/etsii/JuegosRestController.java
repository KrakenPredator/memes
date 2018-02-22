package es.urjc.etsii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

/**
 * Controlador Spring para gestión de peticiones REST.
 * 
 * @author J. M. Colmenar
 *
 */
@RestController
public class JuegosRestController {

	@Autowired
	private JuegosService juegosService;

	@RequestMapping(value = "/juegos", method = RequestMethod.GET)
	public List<Juego> getJuegos() {
		return juegosService.getJuegos();
	}

	@RequestMapping(value = "/juegos/{index}", method = RequestMethod.GET)
	public Juego getJuego
			(@PathVariable("index") int index) {
		return juegosService.getJuego(index);
	}

	@PostMapping("/login")
    @ResponseBody
	public ResponseEntity<?> getSearchResultViaAjax(@RequestBody Login search) {
		System.out.println(search.getUsername());
		return new ResponseEntity<String>("hecho", HttpStatus.OK);
	}

}
