package es.urjc.etsii;

/**
 * Clase simplificada que representa un actor.
 * 
 * @author J. M. Colmenar
 *
 */
public class Actor {
	private String nombre;
	private String apellidos;
	
	public Actor() {
	}
	
	public Actor(String nombre, String apellidos) {
		this.nombre = nombre;
		this.apellidos = apellidos;
	}

	
	// Getters y setters
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
		
}
