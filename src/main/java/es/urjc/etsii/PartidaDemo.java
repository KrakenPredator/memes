package es.urjc.etsii;

import sun.security.krb5.internal.PAData;

public class PartidaDemo {
    private String date;
    private String time;
    private Juego game;
    private Usuario user;
    private double duration;

    public PartidaDemo(){

    }

    public PartidaDemo(String date, String time, Juego game, Usuario user, double duration){
        this.date = date;
        this.time = time;
        this.game = game;
        this.user = user;
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

    public Juego getGame() {
        return game;
    }

    public void setGame(Juego game) {
        this.game = game;
    }

    public Usuario getUser() {
        return user;
    }

    public void setUser(Usuario user) {
        this.user = user;
    }

    public double getDuration() {
        return duration;
    }

    public void setDuration(double duration) {
        this.duration = duration;
    }
}
