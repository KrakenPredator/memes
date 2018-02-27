package es.urjc.etsii;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "connections", path = "connections")
public interface ConexionRepository extends CrudRepository<Conexion, Integer> {
    List<Conexion> getConexionsByUsernameAndResult(String username, Boolean result);
}
