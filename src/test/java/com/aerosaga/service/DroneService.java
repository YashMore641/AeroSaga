package com.aerosaga.service;

import com.aerosaga.model.Drone;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DroneService {
    public List<Drone> getAllDrones(){
        return List.of(
                new Drone("DRONE-001", "AVAILABLE", 95.0),
                new Drone("DRONE-002", "IN_MISSION", 68.0),
                new Drone("DRONE-003", "CHARGING", 30.0)
        );
    }
}
