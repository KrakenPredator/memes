package es.urjc.etsii;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

@RestController
public class PartidaDemoRestController {
    @Autowired
    private PartidaDemoRepository partidaDemoRepository;

    @PostConstruct
    public void createDemos(){
        PartidaDemo pd = new PartidaDemo("", "", "1", "1",0);
        partidaDemoRepository.save(pd);
    }
}
