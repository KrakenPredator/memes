package es.urjc.etsii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.annotation.PostConstruct;
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
	private UserRepository userRepository;

	@Autowired
	private UsuarioService usuarioService;

	@PostConstruct
	private void initDatabase() {
// Nuevos usuarios
		userRepository.save(new Usuario("krpr", "1234", "Javier Lopez", "mail@mail.com"));
// Lectura de datos
		System.out.println("\nListado de usuarios");
		Iterable<Usuario> all = userRepository.findAll();
		for (Usuario u : all) {
			System.out.println(u);
		}
		int firstId = userRepository.findAll().iterator().next().getId();
		userRepository.delete(firstId);
		System.out.println("\nFilas que quedan: "+userRepository.count()+"\n");
	}

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

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> registerUsuario(@RequestBody Usuario user){
		System.out.println(user.getUsername());
		userRepository.save(new Usuario(user.getUsername(), user.getName(), user.getEmail(), user.getPassword()));
		System.out.println(userRepository.findAll());
		return new ResponseEntity<Iterable<Usuario>>(userRepository.findAll(), HttpStatus.OK);
	}

}
