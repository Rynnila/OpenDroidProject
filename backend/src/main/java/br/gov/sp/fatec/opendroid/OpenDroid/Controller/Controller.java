package br.gov.sp.fatec.opendroid.OpenDroid.Controller;

import br.gov.sp.fatec.opendroid.OpenDroid.Domain.user.RequestUser;
import br.gov.sp.fatec.opendroid.OpenDroid.Domain.user.user;
import br.gov.sp.fatec.opendroid.OpenDroid.Domain.user.userRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class Controller {

    @Autowired
    private userRepository repository;

    @GetMapping
    public ResponseEntity getAllUsers(){
        var allusers = repository.findAll();
        return ResponseEntity.ok(allusers);
    }

    @PostMapping
    private ResponseEntity registerUsers(@RequestBody @Valid RequestUser data){
        System.out.println(data);
        user user1 = new user(data);
        repository.save(user1);
        return ResponseEntity.ok().build();
    }

}