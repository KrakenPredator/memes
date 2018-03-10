package es.urjc.etsii;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;


@Entity

public class PartidaDemo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    private String date;
    private String time;
    private int gameId;
    private int userId;
    private double duration;

    public PartidaDemo(){

    }

    public PartidaDemo(String date, String time, int gameId, int userId, double duration){
        this.date = date;
        this.time = time;
        this.gameId = gameId;
        this.userId = userId;
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

    public int getGame() {
        return gameId;
    }

    public void setGame(int game) {
        this.gameId = game;
    }

    public int getUser() {
        return userId;
    }

    public void setUser(int user) {
        this.userId = user;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }
}
