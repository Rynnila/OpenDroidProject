package br.gov.sp.fatec.opendroid.OpenDroid;    

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    @GetMapping("/login")
    public String login() {
        return "Página de Login";
    }

    @GetMapping("/home")
    public String home() {
        return "Página Home";
    }

    @GetMapping("/perfil")
    public String perfil() {
        return "Página do Usuário";
    }

    @GetMapping("/Cadastro")
    public String cadastro() {
        return "Página de Cadastro";
    }
}