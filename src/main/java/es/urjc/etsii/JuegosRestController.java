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
	private JuegoRepository juegoRepository;


	@PostConstruct
	private void initDatabase() {
		Juego cod = new Juego("Call Of Dutty WII", 49.95, "Sledgehammer Games", "Activision", "Acción, Primera persona (FPS)(Bélico, Zombies, Segunda Guerra Mundial y Paramilitares y mercenarios)", "1-12 (Competitivo: 12 online / Cooperativo: 4 online)", "5-6 horas + multijugador incalculable", "Textos en español y voces en español","3 de noviembre de 2017","Pegi: +18", "");
		juegoRepository.save(cod);


		Juego pubg = new Juego("Player Unknown's Battlegrounds", 24.95, "Bluehole Studio", "Bluehole, Inc.", "Acción, Primera persona (FPS), Battle royale, Supervivencia, Shooter (Bélico, Moderno y Paramilitares y mercenarios)", "100 (1 a 4 por equipo) (Competitivo: Sí, online / Cooperativo: Sí, online)", "Incalculable", "Textos en español y voces en inglés","26 de enero de 2018","Pegi: +12", "");
		juegoRepository.save(pubg);
	}

	@RequestMapping(value = "/juegos", method = RequestMethod.GET)
	public List<Juego> getJuegos() {
		return (List<Juego>) juegoRepository.findAll();
	}

	@RequestMapping(value = "/juegos/{index}", method = RequestMethod.GET)
	public Juego getJuego
			(@PathVariable("index") int index) {
		return juegoRepository.findOne(index);
	}

}
