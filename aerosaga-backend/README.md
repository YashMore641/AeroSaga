# AeroSaga

Aerosaga is a Java/Spring Boot and Temporal.io autonomous drone mission-control simulation.

## Requirements coverage

- Temporal workflow with takeoff, navigation, package drop, and return-to-base stages
- Durable offline/reconnect waits, pause/resume signals, emergency abort, retries, and saga compensation
- Queryable mission status and REST/WebSocket operator APIs
- 3D Cesium fleet visualization with live simulated telemetry
- 50-drone telemetry simulation, operator controls, mission timeline, and fleet dashboard

## Run locally

1. Install Java 21 and start a local Temporal development server.
2. Start the backend:
   `cd aerosaga-backend && mvnw.cmd spring-boot:run`
3. Start the frontend in another terminal:
   `cd aerosaga-frontend && npm install && npm run dev`
4. Open `http://localhost:5173`.

The backend starts without Temporal, but mission workflows require the Temporal server at `127.0.0.1:7233`.
