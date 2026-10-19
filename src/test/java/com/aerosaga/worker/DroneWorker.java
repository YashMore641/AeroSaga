package com.aerosaga.worker;

import com.aerosaga.activity.DroneActivitiesImpl;
import com.aerosaga.workflow.DroneMissionWorkflowImpl;

import io.temporal.client.WorkflowClient;
import io.temporal.serviceclient.WorkflowServiceStubs;
import io.temporal.worker.Worker;
import io.temporal.worker.WorkerFactory;

public class DroneWorker {

    public static final String TASK_QUEUE =
            "AEROSAGA_DRONE_TASK_QUEUE";

    public static void main(String[] args) {

        // Connect to the local Temporal Server.
        WorkflowServiceStubs service =
                WorkflowServiceStubs.newLocalServiceStubs();

        WorkflowClient client =
                WorkflowClient.newInstance(service);

        // Create the Worker factory.
        WorkerFactory factory =
                WorkerFactory.newInstance(client);

        // Create a Worker for the AeroSaga task queue.
        Worker worker =
                factory.newWorker(TASK_QUEUE);

        // Register the workflow implementation.
        worker.registerWorkflowImplementationTypes(
                DroneMissionWorkflowImpl.class
        );

        // Register the activity implementation.
        worker.registerActivitiesImplementations(
                new DroneActivitiesImpl()
        );

        System.out.println(
                "AeroSaga Temporal Worker is starting..."
        );

        System.out.println(
                "Task Queue: " + TASK_QUEUE
        );

        // Start polling for workflow and activity tasks.
        factory.start();

        System.out.println(
                "Worker is running. Press Ctrl+C to stop."
        );
    }
}