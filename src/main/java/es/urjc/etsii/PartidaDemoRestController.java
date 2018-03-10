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

        //Demos de prueba

        java.util.Date fecha = new Date();
        String fechaActual = fecha.toString();

        demoRepository.save(new PartidaDemo(fechaActual,"10:10",1,1,0));
    }

    @RequestMapping(value = "/checkDemo", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<?> registerGame(@RequestBody PartidaDemo demo){
        List<PartidaDemo> demosList = demoRepository.findPartidaDemosByGameIdAndUserId(demo.getGame(),demo.getId());

        if(limiteAlcanzado(demosList)){
            return ResponseEntity.badRequest().body(null);
        }
        else{

            return new ResponseEntity<>("ok", HttpStatus.OK);
        }



    }

    public boolean limiteAlcanzado(List<PartidaDemo> demos){

        double cont = 0;

        for (int i = 0; i < demos.size(); i++) {
            cont+=demos.get(i).getDuration();
        }

        if(cont>=3600){
            return true;
        }

        else{
            return false;
        }
    }


}
