package es.urjc.etsii;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Juego {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	private String title;
	private double price;
	private String developer;
	private String editor;
	private String genre;
	private String players;
	private String duration;
	private String language;
	private String releaseDate;
	private String pegi;
	private String url;
	private String img;

	public Juego() {
	}
	
	public Juego(String title, double price, String developer, String editor, String genre, String players, String duration, String language,String releaseDate, String pegi,  String url, String img) {
		this.setTitle(title);
		this.setPrice(price);
		this.setDeveloper(developer);
		this.setEditor(editor);
		this.setGenre(genre);
		this.setPlayers(players);
		this.setDuration(duration);
		this.setLanguage(language);
		this.setReleaseDate(releaseDate);
		this.setPegi(pegi);
		this.setUrl(url);
		this.setImg(img);

	}

	/*public Juego(String title, double price, String developer, String editor, String genre, String players, String duration, String language,String releaseDate, String pegi) {
		this.setTitle(title);
		this.setPrice(price);
		this.setDeveloper(developer);
		this.setEditor(editor);
		this.setGenre(genre);
		this.setPlayers(players);
		this.setDuration(duration);
		this.setLanguage(language);
		this.setReleaseDate(releaseDate);
		this.setPegi(pegi);

	}*/


	// Getters y setters

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDeveloper() {
		return developer;
	}

	public void setDeveloper(String developer) {
		this.developer = developer;
	}

	public String getEditor() {
		return editor;
	}

	public void setEditor(String editor) {
		this.editor = editor;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getPlayers() {
		return players;
	}

	public void setPlayers(String players) {
		this.players = players;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}


	public String getPegi() {
		return pegi;
	}

	public void setPegi(String pegi) {
		this.pegi = pegi;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
}
