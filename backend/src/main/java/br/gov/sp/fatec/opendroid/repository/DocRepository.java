package br.gov.sp.fatec.opendroid.repository;


import br.gov.sp.fatec.opendroid.model.Doc;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DocRepository extends MongoRepository<Doc, String> {
}
