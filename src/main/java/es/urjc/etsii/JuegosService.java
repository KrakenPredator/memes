package es.urjc.etsii;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

/**
 * Servicio Spring para gestión de peticiones REST.
 * 
 * @author J. M. Colmenar
 *
 */
@Service
public class JuegosService {

	private List<Juego> juegos;
	
	public JuegosService() {
		// Creación de la lista de películas.
		juegos = new ArrayList<Juego>();
		// Actores de la primera película.
		Actor keanu = new Actor("Keanu","Reeves");
		Actor laurence = new Actor("Laurence","Fishburne");
		// Creación de la película y adición de los actores.
		Juego matrix = new Juego("Matrix",1999,"http://www.imdb.com/title/tt0133093/");
		ArrayList<Actor> acts = new ArrayList<Actor>();
		acts.add(keanu);
		acts.add(laurence);
		matrix.setActores(acts);
		// Se añade la película a la lista.
		juegos.add(matrix);
		
		// Se repite el proceso para otra película.
		Actor marlon = new Actor("Marlon","Brando");
		Actor al = new Actor("Al","Pacino");
		acts = new ArrayList<Actor>();
		acts.add(marlon);
		acts.add(al);
		Juego elpadrino = new Juego("El Padrino",1972,"http://www.imdb.com/title/tt0068646/");
		elpadrino.setActores(acts);
		juegos.add(elpadrino);
	}
	
	// Métodos para obtener las películas
	public List<Juego> getJuegos() {
		return juegos;
	}

	public Juego getJuego(int index) {
		return juegos.get(index);
	}

}
