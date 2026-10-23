
import { Clock3, Plane } from "lucide-react";

export default function RecentMissions({ missions }) {
  return (
    <section className="panel recent-panel">
      <div className="panel-heading">
        <h3><Clock3 size={18} /> Recent Missions</h3>
        <span className="muted">{missions.length} records</span>
      </div>

      <div className="recent-list">
        {missions.map((mission) => (
          <div className="recent-item" key={mission.id}>
            <div className="recent-icon"><Plane size={18} /></div>
            <div className="recent-info">
              <strong>{mission.id}</strong>
              <span>{mission.drone}</span>
              <small>{mission.time}</small>
            </div>
            <span className={`mission-badge ${mission.status.toLowerCase().replace(" ", "-")}`}>
              {mission.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
