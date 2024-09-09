package br.gov.sp.fatec.opendroid.OpenDroid.Controller;

import br.gov.sp.fatec.opendroid.OpenDroid.Model.Usuario;
import br.gov.sp.fatec.opendroid.OpenDroid.Repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.ui.Model;

import java.util.List;



@RestController
@RequestMapping("/user")
public class Controller {

    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("email", "");
        return "login";
    }
    @PostMapping("login")
    public String buscar(@RequestParam String email, Model model) {
        List<Usuario> usuarios = usuarioRepository.findByEmail(email);
        model.addAttribute("usuarios", usuarios);
        return "index";
    }

    @GetMapping("/home")
    public String home() {
        return "Página Home";
    }

    @GetMapping("/perfil")
    public String perfil() {
        return "Página do Usuário";
    }

    @GetMapping("/cadastro")
    public String cadastro(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "cadastro";
    }
    @PostMapping("/cadastro")
    public String cadastrar(@ModelAttribute Usuario usuario) {
        usuarioRepository.save(usuario);
        return "redirect:/user/login";
    }
}