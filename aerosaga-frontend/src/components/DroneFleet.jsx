
import { Eye } from "lucide-react";

export default function DroneFleet({ drones, onSelect }) {
  return (
    <section className="panel fleet-panel">
      <div className="panel-heading">
        <h3>Drone Fleet</h3>
        <span className="muted">{drones.length} drones</span>
      </div>

      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Drone ID</th>
              <th>Status</th>
              <th>Battery</th>
              <th>Current Mission</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {drones.map((drone) => (
              <tr key={drone.id}>
                <td className="drone-id">{drone.id}</td>
                <td>
                  <span className={`status ${drone.status.toLowerCase()}`}>
                    {drone.status}
                  </span>
                </td>
                <td>
                  <div className="battery-cell">
                    <span>{drone.battery}%</span>
                    <div className="battery-track">
                      <div
                        className={`battery-fill ${drone.battery < 50 ? "low" : ""}`}
                        style={{ width: `${drone.battery}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td>{drone.mission}</td>
                <td>{drone.location}</td>
                <td>
                  <button className="view-button" onClick={() => onSelect(drone)}>
                    <Eye size={14} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
