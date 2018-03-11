package es.urjc.etsii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
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
        if(loggedIn == null){
            return ResponseEntity.badRequest().body("El usuario no existe");
        }

        if(superaIntentos(user.getUsername())){
            return ResponseEntity.badRequest().body("Lo sentimos, ha superado el número de intentos de conexión \n " +
                    "contacte con el administrador del sitio web.");
        }
        Conexion newConexion;
        java.util.Date fecha = new Date();
        String fechaActual = fecha.toString();
        String[] lista = fechaActual.split(" ");
        String dia = lista[0]+"-"+lista[2]+"-"+lista[1]+"-"+lista[5];
        String hora = lista[3];
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
                .getRequest();
        String ip = request.getRemoteAddr();
        newConexion = new Conexion(dia, hora, ip, user.getUsername(), true);
        if (loggedIn.getPassword().equals(user.getPassword())) {
            conexionRepository.save(newConexion);
            return new ResponseEntity<Usuario>(loggedIn, HttpStatus.OK);
        }else {
            newConexion.setResult(false);
            conexionRepository.save(newConexion);
            return ResponseEntity.badRequest().body("La contraseña es errónea");
        }
    }

    private boolean superaIntentos(String username){
        List<Conexion> conexiones = conexionRepository.getConexionsByUsername(username);
        if(conexiones.size() < 3){
            return false;
        }else{
            int intentosSeguidos = 0;
            for(int i = conexiones.size()-1; i >= conexiones.size()-3; i--){
                if(!conexiones.get(i).getResult())
                    intentosSeguidos++;
            }
            return intentosSeguidos==3;
        }
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> registerUsuario(@RequestBody Usuario user){
        System.out.println(user.getUsername());
        userRepository.save(new Usuario(user.getUsername(), user.getPassword(), user.getName(), user.getEmail(), false));
        return new ResponseEntity<String>("Usuario registrado con éxito", HttpStatus.OK);
    }

}