package es.urjc.etsii;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Date;

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



}
