package br.gov.sp.fatec.opendroid.OpenDroid;    

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    
    @GetMapping("/ola-mundo")
    public String aloMundo() {
        return "Olá Mundo!!";
    }
}