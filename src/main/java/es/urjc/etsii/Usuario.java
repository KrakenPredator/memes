package es.urjc.etsii;

public class Usuario {

    private String username;
    private String password;
    private String name;
    private String lastname;
    private String email;
    private String birthdate;
    private String country;
    private String city;
    private boolean isAdmin;


    public Usuario(){
    }

    public Usuario(String username, String password, String name, String lastname, String email, String birthdate, String country, String city, boolean isAdmin){
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.birthdate = birthdate;
        this.country = country;
        this.city = city;
        this.isAdmin = isAdmin;
    }
    public Usuario(String username, String pass, String name, String email){
        this.username = username;
        this.password = pass;
        this.name = name;
        this.email = email;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(String birthdate) {
        this.birthdate = birthdate;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}
