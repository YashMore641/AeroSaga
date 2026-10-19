package com.aerosaga.activity;

public class DroneActivitiesImpl implements DroneActivities {

    @Override
    public String takeoff(String droneId) {

        System.out.println(
                "Drone " + droneId + " is preparing for takeoff..."
        );

        System.out.println(
                "Drone " + droneId + " has taken off successfully."
        );
        return "TAKEOFF_COMPLETED";
    }
}