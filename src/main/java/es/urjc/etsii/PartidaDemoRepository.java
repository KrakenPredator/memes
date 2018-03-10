package es.urjc.etsii;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "demos", path = "demos")
public interface PartidaDemoRepository extends CrudRepository<PartidaDemo, Integer> {
    PartidaDemo findPartidaDemoByIdGameAndIdUser(@Param("idGame") String idGame, @Param("idUser") String idUser);
}
