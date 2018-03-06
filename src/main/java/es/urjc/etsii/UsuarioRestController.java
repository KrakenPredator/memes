package es.urjc.etsii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;


@RestController
public class UsuarioRestController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ConexionRepository conexionRepository;

    @PostConstruct
    private void initDatabase() {
// Nuevos usuarios
        userRepository.save(new Usuario("krpr", "1234", "Javier Lopez", "mail@mail.com", true));
        userRepository.save(new Usuario("mane", "1234", "Manuel Viejo", "mail@mail.com", true));
        userRepository.save(new Usuario("beny", "1234", "Beny Martin", "mail@mail.com", false));
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> getUsuario(@RequestBody Login user){
        Usuario loggedIn = userRepository.findByUsername(user.getUsername());
        Conexion newConexion;
        if(conexionRepository.getConexionsByUsernameAndResult(user.getUsername(), false).size() >= 3){
            return ResponseEntity.badRequest().body(null);
        }
        if (loggedIn != null && (loggedIn.getPassword().equals(user.getPassword()))) {
            newConexion = new Conexion(String.valueOf(System.currentTimeMillis()), String.valueOf(System.currentTimeMillis()),
                    "192.168.1.1", user.getUsername(), true);
            conexionRepository.save(newConexion);

            return new ResponseEntity<Usuario>(loggedIn, HttpStatus.OK);
        }else {
            newConexion = new Conexion(String.valueOf(System.currentTimeMillis()), String.valueOf(System.currentTimeMillis()),
                    "192.168.1.1", user.getUsername(), false);
            conexionRepository.save(newConexion);
            return ResponseEntity.badRequest().body(null);
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> registerUsuario(@RequestBody Usuario user){
        System.out.println(user.getUsername());
        userRepository.save(new Usuario(user.getUsername(), user.getPassword(), user.getName(), user.getEmail(), user.isAdmin()));
        System.out.println(userRepository.findAll());
        return new ResponseEntity<Iterable<Usuario>>(userRepository.findAll(), HttpStatus.OK);
    }

}
