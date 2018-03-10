package es.urjc.etsii;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "demos", path = "demos")
public interface PartidaDemoRepository extends CrudRepository<PartidaDemo, Integer> {
    PartidaDemo findPartidaDemoByGameIdAnAndUserId(@Param("gameId") int gameId, @Param("userId") int userId);
}
