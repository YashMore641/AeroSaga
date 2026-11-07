
import { BatteryCharging, Gauge, MapPin, Wind } from "lucide-react";

export default function TelemetryPanel({ drone }) {
  if (!drone) {
    return (
      <section className="panel telemetry-panel">
        <h3>Live Telemetry</h3>
        <p className="muted">Select a drone to view its telemetry.</p>
      </section>
    );
  }

  return (
    <section className="panel telemetry-panel">
      <div className="panel-heading">
        <h3>Live Telemetry</h3>
        <span className={`status ${drone.status.toLowerCase()}`}>
          {drone.status}
        </span>
      </div>

      <div className="telemetry-drone">
        <div className="drone-illustration">
          <Wind size={46} />
        </div>
        <div>
          <h2>{drone.id}</h2>
          <p className="muted">{drone.mission}</p>
        </div>
      </div>

      <div className="telemetry-row">
        <span><BatteryCharging size={17} /> Battery</span>
        <strong>{drone.battery}%</strong>
      </div>
      <div className="telemetry-row">
        <span><Gauge size={17} /> Altitude</span>
        <strong>{drone.altitude} m</strong>
      </div>
      <div className="telemetry-row">
        <span><Wind size={17} /> Speed</span>
        <strong>{drone.speed} m/s</strong>
      </div>
      <div className="telemetry-row">
        <span><MapPin size={17} /> Location</span>
        <strong>{drone.location}</strong>
      </div>

      <div className="mission-progress">
        <h4>Mission Progress</h4>
        <div className="progress-steps">
          {["Takeoff", "Navigate", "Drop", "Return"].map((step, index) => (
            <div className="progress-step" key={step}>
              <span className={index < 2 && drone.status === "Online" ? "step-done" : ""}>
                {index < 2 && drone.status === "Online" ? "✓" : index + 1}
              </span>
              <small>{step}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
