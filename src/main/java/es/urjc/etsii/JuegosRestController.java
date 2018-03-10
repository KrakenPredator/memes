package es.urjc.etsii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.annotation.PostConstruct;
import java.io.File;

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

	//@Autowired
	//private ImageRepository imageRepository;


	@PostConstruct
	private void initDatabase() {
		Juego cod = new Juego("Call Of Dutty WII", 49.95, "Sledgehammer Games", "Activision", "Acción, Primera persona (FPS)(Bélico, Zombies, Segunda Guerra Mundial y Paramilitares y mercenarios)", "1-12 (Competitivo: 12 online / Cooperativo: 4 online)", "5-6 horas + multijugador incalculable", "Textos en español y voces en español", "3/11/2017", "18", "", "resources/codCover.jpg_large");
		juegoRepository.save(cod);
		Juego pubg = new Juego("Player Unknown's Battlegrounds", 24.95, "Bluehole Studio", "Bluehole, Inc.", "Acción, Primera persona (FPS), Battle royale, Supervivencia, Shooter (Bélico, Moderno y Paramilitares y mercenarios)", "100 (1 a 4 por equipo) (Competitivo: Sí, online / Cooperativo: Sí, online)", "Incalculable", "Textos en español y voces en inglés","26/1/2018","12", "", "resources/pubgCover.jpg");
		juegoRepository.save(pubg);
		Juego dbz = new Juego("Dragon Ball Fighter Z", 39.95, "Arc System Works", "Bandai Namco", "Acción, Lucha (Anime, Manga y TV)", "1-6 (2 local - 6 online) (Competitivo: Sí / Cooperativo: Sí)", "9-10 horas + multijugador incalculable", "Textos en español y voces en inglés y japonés", "20/12/2017", "18", "", "resources/dbfCover.jpg");
		juegoRepository.save(dbz);
		Juego fifa = new Juego("Fifa 18", 39.95, "Arc System Works", "Bandai Namco", "Acción, Lucha (Anime, Manga y TV)", "1-6 (2 local - 6 online) (Competitivo: Sí / Cooperativo: Sí)", "9-10 horas + multijugador incalculable", "Textos en español y voces en inglés y japonés", "20/12/2017", "18", "", "resources/fifa18Cover.png");
		juegoRepository.save(fifa);
		Juego kcd = new Juego("Kingdom Come Deliverance", 39.95, "Arc System Works", "Bandai Namco", "Acción, Lucha (Anime, Manga y TV)", "1-6 (2 local - 6 online) (Competitivo: Sí / Cooperativo: Sí)", "9-10 horas + multijugador incalculable", "Textos en español y voces en inglés y japonés", "20/12/2017", "18", "", "resources/kcdCover.jpg");
		juegoRepository.save(kcd);
		Juego gow = new Juego("God Of War", 59.95, "Sony Santa Monica", "Sony", "Acción, Acción y aventura, Hack and Slash (Fantasía y Antigua Grecia)", "1", "20 horas", "Textos en español y voces en español", "20/4/2018", "18","", "resources/gowCover.jpg");
		juegoRepository.save(gow);
		Juego rd2 = new Juego("Red Dead Redemption 2", 64.95, "RockStar Games", "Take 2", "Acción, Acción y aventura (Western)", "1-2(2 local - 12 online) (Competitivo: Sí / Cooperativo: Sí)", ">9-10 horas + multijugador incalculable", "Textos en español y voces en inglés", "26/10/2018", "18", "", "resources/rd2Cover.jpg");
		juegoRepository.save(rd2);
		Juego tw3 = new Juego("The Witcher 3", 64.95, "RockStar Games", "Take 2", "Acción, Acción y aventura (Western)", "1-2(2 local - 12 online) (Competitivo: Sí / Cooperativo: Sí)", ">9-10 horas + multijugador incalculable", "Textos en español y voces en inglés", "2/10/2018", "18", "vXmU3LAK8Ss", "resources/tw3Cover.jpg");
		juegoRepository.save(tw3);
	}

	@RequestMapping(value = "/saveGame", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> registerGame(@RequestBody Juego game){
		juegoRepository.save(game);
		return new ResponseEntity<>("ok", HttpStatus.OK);
	}

	@RequestMapping(value = "/deleteGame/{identifier}", method = RequestMethod.DELETE)
	@ResponseBody
	public ResponseEntity<?> deleteGame( @PathVariable("identifier") int gameId){
		juegoRepository.delete(gameId);
		return new ResponseEntity<>("ok", HttpStatus.OK);
	}

}
