package br.gov.sp.fatec.opendroid.OpenDroid.Controller;

import br.gov.sp.fatec.opendroid.OpenDroid.Domain.user.RequestUser;
import br.gov.sp.fatec.opendroid.OpenDroid.Domain.user.ResetPasswordRequest; // Novo
import br.gov.sp.fatec.opendroid.OpenDroid.Domain.user.user;
import br.gov.sp.fatec.opendroid.OpenDroid.Domain.user.userRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173") // Permite CORS para o frontend
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

    // Novo endpoint para redefinir senha
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody @Valid ResetPasswordRequest request) {
        user user = repository.findByEmail(request.getEmail());
        if (user != null && user.getPassword().equals(request.getCurrentPassword())) {
            user.setPassword(request.getNewPassword());
            repository.save(user);
            return ResponseEntity.ok("Password reset successful.");
        }
        return ResponseEntity.status(400).body("Invalid email or current password.");
    }
}
