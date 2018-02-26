package es.urjc.etsii;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "games", path = "games")
public interface JuegoRepository extends CrudRepository<Juego, Integer> {
    Juego findByTitle(@Param("title") String title);
}
