package es.urjc.etsii;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class UsuarioService {
    private HashMap<String, Usuario> usuarios;

    public UsuarioService(){
        usuarios = new HashMap<String, Usuario>();

        Usuario javi = new Usuario("krpr", "1234", "javichi","xxxx@gmail.com");
        usuarios.put(javi.getUsername(), javi);
        Usuario mane = new Usuario("mane", "4321", "manuelmane", "yyyy@gmail.com");
        usuarios.put(mane.getUsername(), mane);

    }

    public List<Usuario> getUsuarios() {
        List<Usuario> ret = new ArrayList<Usuario>();
        ret.addAll(usuarios.values());
        return ret;
    }

    public Usuario getUsuarioByUsername(String username){
        return usuarios.get(username);
    }
}
