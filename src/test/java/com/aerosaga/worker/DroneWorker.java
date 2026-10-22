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

        WorkflowServiceStubs service =
                WorkflowServiceStubs.newLocalServiceStubs();

        WorkflowClient client =
                WorkflowClient.newInstance(service);

        WorkerFactory factory =
                WorkerFactory.newInstance(client);

        Worker worker =
                factory.newWorker(TASK_QUEUE);

        worker.registerWorkflowImplementationTypes(
                DroneMissionWorkflowImpl.class
        );

        worker.registerActivitiesImplementations(
                new DroneActivitiesImpl()
        );

        System.out.println(
                "AeroSaga Temporal Worker started."
        );

        System.out.println(
                "Task Queue: " + TASK_QUEUE
        );

        factory.start();
    }
}