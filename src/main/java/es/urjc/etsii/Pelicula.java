package es.urjc.etsii;

import java.util.List;

/**
 * Representación de los datos básicos de una película.
 * 
 * @author J. M. Colmenar
 *
 */
public class Pelicula {
	private String titulo;
	private int anio;
	private String imdb;
	private List<Actor> actores;
	
	public Pelicula() {
	}
	
	public Pelicula(String titulo, int anio, String imdb) {
		this.titulo = titulo;
		this.anio = anio;
		this.imdb = imdb;
	}

	// Getters y setters
	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}

	public String getImdb() {
		return imdb;
	}

	public void setImdb(String imdb) {
		this.imdb = imdb;
	}

	public List<Actor> getActores() {
		return actores;
	}

	public void setActores(List<Actor> actores) {
		this.actores = actores;
	}

	
	
}
