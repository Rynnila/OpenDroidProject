package br.gov.sp.fatec.opendroid.OpenDroid.Controller;

import org.springframework.web.bind.annotation.GetMapping;

public class WebController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
}
