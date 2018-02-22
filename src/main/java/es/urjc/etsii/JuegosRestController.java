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

	@Autowired
	private UsuarioService usuarioService;

	@RequestMapping(value = "/juegos", method = RequestMethod.GET)
	public List<Juego> getJuegos() {
		return juegosService.getJuegos();
	}

	@RequestMapping(value = "/juegos/{index}", method = RequestMethod.GET)
	public Juego getJuego
			(@PathVariable("index") int index) {
		return juegosService.getJuego(index);
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
	public ResponseEntity<?> getUsuario(@RequestBody Login user){
		Usuario loggedIn = usuarioService.getUsuarioByUsername(user.getUsername());
		if (loggedIn != null && (loggedIn.getPassword().equals(user.getPassword())))
			return new ResponseEntity<Usuario>(loggedIn, HttpStatus.OK);
		else
			return ResponseEntity.badRequest().body(null);
	}

}
