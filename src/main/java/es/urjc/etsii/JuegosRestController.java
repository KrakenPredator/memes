package es.urjc.etsii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

	@RequestMapping(value="/login", method=RequestMethod.GET)
	@ResponseBody
	public String getSearchResultViaAjax(
			@RequestBody Login search, Errors errors) {
		System.out.println(search.getUsername());
		return "success";
	}

}
