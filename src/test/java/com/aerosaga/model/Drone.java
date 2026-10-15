package com.aerosaga.model;

public class Drone {
    private String droneID;
    private String status;
    private Double batteryLevel;

    public Drone(String droneID, String status, Double batteryLevel) {
        this.droneID = droneID;
        this.status = status;
        this.batteryLevel = batteryLevel;
    }

    public String getDroneID() {
        return droneID;
    }

    public String getStatus() {
        return status;
    }

    public Double getBatteryLevel() {
        return batteryLevel;
    }
}
