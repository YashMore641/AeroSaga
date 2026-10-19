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
        ).info("Starting mission for drone: " + droneId);

        String result = activities.takeoff(droneId);

        Workflow.getLogger(
                DroneMissionWorkflowImpl.class
        ).info("Mission status: " + result);

        return result;
    }
}