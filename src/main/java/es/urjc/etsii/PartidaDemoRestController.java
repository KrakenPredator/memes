package es.urjc.etsii;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.List;

@RestController
public class PartidaDemoRestController {


    @Autowired
    private PartidaDemoRepository demoRepository;


    @PostConstruct
    private void initDatabase(){
/**
        //Demos de prueba

        java.util.Date fecha = new Date();
        String fechaActual = fecha.toString();
        String[] lista = fechaActual.split(" ");
        String dia = lista[0]+"-"+lista[2]+"-"+lista[1]+"-"+lista[5];
        String hora = lista[3];

        demoRepository.save(new PartidaDemo(dia,hora,1,1,0));
        demoRepository.save(new PartidaDemo(dia,hora,2,1,15));**/
    }

    @RequestMapping(value = "/checkDemo/{gId}/{uId}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> checkDemos( @PathVariable("gId") int gameId, @PathVariable("uId") String userId){
        List<PartidaDemo> demosList = demoRepository.findPartidaDemosByGameIdAndUserId(gameId, Integer.valueOf(userId));
        if(limiteAlcanzado(demosList)){
            return ResponseEntity.badRequest().body("Ha superado el límite de tiempo de prueba");
        }
        else{
            return new ResponseEntity<>(tiempo(demosList), HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/saveDemo/{gId}/{uId}/{time}", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> saveDemo( @PathVariable("gId") int gameId, @PathVariable("uId") String userId, @PathVariable("time") String time){
        java.util.Date fecha = new Date();
        String fechaActual = fecha.toString();
        String[] lista = fechaActual.split(" ");
        String dia = lista[0]+"-"+lista[2]+"-"+lista[1]+"-"+lista[5];
        String hora = lista[3];
        PartidaDemo pd= new PartidaDemo(dia, hora, Integer.valueOf(gameId), Integer.valueOf(userId), Double.valueOf(time));
        demoRepository.save(pd);
        return new ResponseEntity<>("ok", HttpStatus.OK);

    }


    private int tiempo(List<PartidaDemo> demos){
        int cont = 0;
        for (int i = 0; i < demos.size(); i++) {
            cont+=demos.get(i).getDuration();
        }
        return 15-cont;
    }


    public boolean limiteAlcanzado(List<PartidaDemo> demos){

        if(demos.isEmpty()){
            return false;
        }

        double cont = 0;

        for (int i = 0; i < demos.size(); i++) {
            cont+=demos.get(i).getDuration();
        }
        if(cont>=15) {
            return true;
        }
        return false;
    }


}
