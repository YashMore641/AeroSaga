package com.aerosaga.workflow;

import com.aerosaga.activity.DroneActivities;

import io.temporal.activity.ActivityOptions;
import io.temporal.workflow.Workflow;

import java.time.Duration;

public class DroneMissionWorkflowImpl
        implements DroneMissionWorkflow {

    private final DroneActivities activities =
            Workflow.newActivityStub(
                    DroneActivities.class,
                    ActivityOptions.newBuilder()
                            .setStartToCloseTimeout(
                                    Duration.ofMinutes(1)
                            )
                            .build()
            );

    @Override
    public String executeMission(String droneId) {

        Workflow.getLogger(
                DroneMissionWorkflowImpl.class
        ).info("Mission started for " + droneId);

        // Step 1: Takeoff
        String takeoffStatus = activities.takeoff(droneId);
        Workflow.getLogger(
                DroneMissionWorkflowImpl.class
        ).info("Status: " + takeoffStatus);

        // Step 2: Navigate
        String navigationStatus = activities.navigate(droneId);
        Workflow.getLogger(
                DroneMissionWorkflowImpl.class
        ).info("Status: " + navigationStatus);

        // Step 3: Deliver package
        String deliveryStatus = activities.dropPackage(droneId);
        Workflow.getLogger(
                DroneMissionWorkflowImpl.class
        ).info("Status: " + deliveryStatus);

        // Step 4: Return to base
        String returnStatus = activities.returnToBase(droneId);
        Workflow.getLogger(
                DroneMissionWorkflowImpl.class
        ).info("Status: " + returnStatus);

        String finalStatus =
                "MISSION_COMPLETED: " + droneId;

        Workflow.getLogger(
                DroneMissionWorkflowImpl.class
        ).info(finalStatus);

        return finalStatus;
    }
}