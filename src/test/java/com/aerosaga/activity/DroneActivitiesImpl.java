package com.aerosaga.activity;

public class DroneActivitiesImpl implements DroneActivities {

    @Override
    public String takeoff(String droneId) {
        System.out.println(
                droneId + ": Taking off from base..."
        );
        return "TAKEOFF_COMPLETED";
    }

    @Override
    public String navigate(String droneId) {
        System.out.println(
                droneId + ": Navigating to destination..."
        );
        return "NAVIGATION_COMPLETED";
    }

    @Override
    public String dropPackage(String droneId) {
        System.out.println(
                droneId + ": Package delivered successfully."
        );
        return "PACKAGE_DELIVERED";
    }

    @Override
    public String returnToBase(String droneId) {
        System.out.println(
                droneId + ": Returning to base..."
        );
        return "RETURN_COMPLETED";
    }
}