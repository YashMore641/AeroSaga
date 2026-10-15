package com.aerosaga.API;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestAPI {
    @GetMapping("api/health")
    public String hello(){
        return "Hello";
    }
}
