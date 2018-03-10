package es.urjc.etsii;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PartidaDemo {
    private String date;
    private String time;
    private String idGame;
    private String idUser;
    private double duration;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public PartidaDemo(){

    }

    public PartidaDemo(String date, String time, String game, String user, double duration){
        this.date = date;
        this.time = time;
        this.idGame = game;
        this.idUser = user;
        this.duration = duration;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getGame() {
        return idGame;
    }

    public void setGame(String game) {
        this.idGame = game;
    }

    public String getUser() {
        return idUser;
    }

    public void setUser(String user) {
        this.idUser = user;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }
}
