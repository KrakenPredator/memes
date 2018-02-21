package es.urjc.etsii;

import java.net.InetAddress;
import java.util.Date;

public class Conexion {
    private String fecha, hora;
    private String ip;
    private String username;
    private boolean result;

    public Conexion(){

    }

    public Conexion(String fecha, String hora, String ip, String userName, boolean res){
        this.fecha = fecha;
        this.hora = hora;
        this.ip = ip;
        this.username = userName;
        this.result = res;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }
}
