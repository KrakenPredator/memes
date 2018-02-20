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
public class PeliculasService {

	private List<Pelicula> peliculas;
	
	public PeliculasService() {
		// Creación de la lista de películas.
		peliculas = new ArrayList<Pelicula>();
		// Actores de la primera película.
		Actor keanu = new Actor("Keanu","Reeves");
		Actor laurence = new Actor("Laurence","Fishburne");
		// Creación de la película y adición de los actores.
		Pelicula matrix = new Pelicula("Matrix",1999,"http://www.imdb.com/title/tt0133093/");
		ArrayList<Actor> acts = new ArrayList<Actor>();
		acts.add(keanu);
		acts.add(laurence);
		matrix.setActores(acts);
		// Se añade la película a la lista.
		peliculas.add(matrix);
		
		// Se repite el proceso para otra película.
		Actor marlon = new Actor("Marlon","Brando");
		Actor al = new Actor("Al","Pacino");
		acts = new ArrayList<Actor>();
		acts.add(marlon);
		acts.add(al);
		Pelicula elpadrino = new Pelicula("El Padrino",1972,"http://www.imdb.com/title/tt0068646/");
		elpadrino.setActores(acts);
		peliculas.add(elpadrino);
	}
	
	// Métodos para obtener las películas
	public List<Pelicula> getPeliculas() {
		return peliculas;
	}

	public Pelicula getPelicula(int index) {
		return peliculas.get(index);
	}

}
