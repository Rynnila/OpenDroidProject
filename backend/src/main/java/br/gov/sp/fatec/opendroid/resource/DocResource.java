package br.gov.sp.fatec.opendroid.resource;

import br.gov.sp.fatec.opendroid.model.Doc;
import br.gov.sp.fatec.opendroid.repository.DocRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Tag(name = "Docs", description = "Docs end-points")
@RestController
@RequestMapping("/doc")
public class DocResource {

    @Autowired
    private DocRepository docRepository;

    @Operation(summary = "Retrieve all Docs", description = "Get all Docs object. The response is all Docs object")
    @GetMapping("/findAll")
    public List<Doc> listarDocs() {
        return docRepository.findAll();
    }

    @Operation(summary = "Retrieve a Doc by Id", description = "Get a Doc object by specifying its id. The response is Doc object")
    @GetMapping("/find/{id}")
    public ResponseEntity<Doc> buscarDocPorId(@PathVariable String id) {
        Optional<Doc> docOptional = docRepository.findById(id);
        return docOptional.map(doc -> ResponseEntity.ok().body(doc)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Insert a Doc by Id", description = "Insert a Doc object. The response is Doc object")
    @PostMapping("/insert")
    public ResponseEntity<Doc> criarDoc(@RequestBody Doc doc) {
        Doc novoDoc = docRepository.save(doc);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoDoc);
    }

    @Operation(summary = "Update a Doc by Id", description = "Update a Doc object by specifying its id. The response is Doc object")
    @PutMapping("/update/{id}")
    public ResponseEntity<Doc> atualizarDoc(@PathVariable String id, @RequestBody Doc doc) {
        if (!docRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        doc.setId(id);
        Doc docAtualizado = docRepository.save(doc);
        return ResponseEntity.ok().body(docAtualizado);
    }

    @Operation(summary = "Delete a Doc by Id", description = "Delete a Doc object by specifying its id. The response is Doc object")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletarDoc(@PathVariable String id) {
        if (!docRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        docRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
