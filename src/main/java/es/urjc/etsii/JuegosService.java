package es.urjc.etsii;

import java.util.ArrayList;
import java.util.*;

import org.springframework.stereotype.Service;

/**
 * Servicio Spring para gestión de peticiones REST.
 * 
 * @author J. M. Colmenar
 *
 */
@Service
public class JuegosService {
	private HashMap<String, Juego> juegos;
	
	public JuegosService() {
		// Creación de la lista de juegos.
		juegos = new HashMap<String, Juego>();

		Juego cod = new Juego("Call Of Dutty WII", 49.95, "Sledgehammer Games", "Activision", "Acción, Primera persona (FPS)(Bélico, Zombies, Segunda Guerra Mundial y Paramilitares y mercenarios)", "1-12 (Competitivo: 12 online / Cooperativo: 4 online)", "5-6 horas + multijugador incalculable", "Textos en español y voces en español","3 de noviembre de 2017","Pegi: +18");

		juegos.put(cod.getTitle(), cod);

		Juego pubg = new Juego("Player Unknown's Battlegrounds", 24.95, "Bluehole Studio", "Bluehole, Inc.", "Acción, Primera persona (FPS), Battle royale, Supervivencia, Shooter (Bélico, Moderno y Paramilitares y mercenarios)", "100 (1 a 4 por equipo) (Competitivo: Sí, online / Cooperativo: Sí, online)", "Incalculable", "Textos en español y voces en inglés","26 de enero de 2018","Pegi: +12");

		juegos.put(pubg.getTitle(), pubg);
	}
	
	// Métodos para obtener las películas
	public List<Juego> getJuegos() {
		List<Juego> ret = new ArrayList<Juego>();
		ret.addAll(juegos.values());
		return ret;
	}

	public Juego getJuego(int index) {
		return juegos.get(index);
	}

	public Juego getJuegoByName(String name){
		return findByName(name);
	}

	private Juego findByName(String str){
		return juegos.get(str);
	}

}
