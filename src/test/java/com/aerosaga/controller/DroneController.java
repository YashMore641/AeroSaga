package com.aerosaga.controller;

import com.aerosaga.model.Drone;
import com.aerosaga.service.DroneService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/drones")
public class DroneController {
    private final DroneService droneService;

    public DroneController(DroneService droneService) {
        this.droneService = droneService;
    }
    @GetMapping
    public List<Drone> getALlDrones(){
        return droneService.getAllDrones();
    }
}
