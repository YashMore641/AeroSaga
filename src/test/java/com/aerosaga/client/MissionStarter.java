package com.aerosaga.client;

import com.aerosaga.workflow.DroneMissionWorkflow;
import com.aerosaga.worker.DroneWorker;

import io.temporal.client.WorkflowClient;
import io.temporal.client.WorkflowOptions;
import io.temporal.serviceclient.WorkflowServiceStubs;

public class MissionStarter {

    public static void main(String[] args) {

        WorkflowServiceStubs service =
                WorkflowServiceStubs.newLocalServiceStubs();

        WorkflowClient client =
                WorkflowClient.newInstance(service);

        DroneMissionWorkflow workflow =
                client.newWorkflowStub(
                        DroneMissionWorkflow.class,
                        WorkflowOptions.newBuilder()
                                .setWorkflowId(
                                        "mission-drone-002"
                                )
                                .setTaskQueue(
                                        DroneWorker.TASK_QUEUE
                                )
                                .build()
                );

        try {
            String result =
                    workflow.executeMission("DRONE-002");

            System.out.println(
                    "Mission result: " + result
            );

        } finally {
            service.shutdown();
        }
    }
}