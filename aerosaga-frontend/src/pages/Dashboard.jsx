
import { useState } from "react";
import {
  Plane, Activity, CircleCheck, CircleAlert, CalendarDays,
  Clock3, Map as MapIcon, Menu, Bell
} from "lucide-react";
import { drones, missions } from "../data/mockData";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import DroneFleet from "../components/DroneFleet";
import TelemetryPanel from "../components/TelemetryPanel";
import RecentMissions from "../components/RecentMissions";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [selectedDrone, setSelectedDrone] = useState(
    drones.find((drone) => drone.id === "DRONE-002")
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeMissions = missions.filter(
    (mission) => mission.status === "In Progress"
  ).length;

  const completedMissions = missions.filter(
    (mission) => mission.status === "Completed"
  ).length;

  const failedMissions = missions.filter(
    (mission) => mission.status === "Failed"
  ).length;

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <header className="topbar">
          <button
            className="icon-button menu-button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={22} />
          </button>
          <div className="topbar-right">
            <button className="icon-button" aria-label="Notifications">
              <Bell size={20} />
            </button>
            <div className="avatar">YD</div>
            <div className="user-info">
              <strong>Yash More</strong>
              <span>Operator</span>
            </div>
          </div>
        </header>

        <div className="page-content">
          <div className="welcome-row">
            <div>
              <h1>{activePage === "Dashboard" ? "Mission Control Dashboard" : activePage}</h1>
              <p>Monitor your drones and missions in real time.</p>
            </div>
            <div className="date-info">
              <span><CalendarDays size={17} /> {new Date().toLocaleDateString("en-IN", {
                day: "numeric", month: "short", year: "numeric"
              })}</span>
              <span><Clock3 size={17} /> {new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit", minute: "2-digit"
              })}</span>
            </div>
          </div>

          {activePage !== "Dashboard" && (
            <div className="page-notice">
              <h2>{activePage}</h2>
              <p>This section is ready for the next development phase. Fleet and mission data are currently mock data.</p>
              <button className="view-button" onClick={() => setActivePage("Dashboard")}>
                Return to Dashboard
              </button>
            </div>
          )}

          <div className="stats-grid">
            <StatCard title="Total Drones" value={drones.length} subtitle={`${drones.filter(d => d.status === "Online").length} online · ${drones.filter(d => d.status === "Offline").length} offline`} icon={Plane} tone="blue" />
            <StatCard title="Active Missions" value={activeMissions} subtitle="Currently in progress" icon={Activity} tone="green" />
            <StatCard title="Completed Missions" value={completedMissions} subtitle="In sample data" icon={CircleCheck} tone="purple" />
            <StatCard title="Failed Missions" value={failedMissions} subtitle="In sample data" icon={CircleAlert} tone="red" />
          </div>

          <div className="main-grid">
            <section className="panel map-panel">
              <div className="panel-heading">
                <h3><MapIcon size={19} /> Live Fleet Map</h3>
                <span className="live-indicator"><i /> Demo Data</span>
              </div>
              <div className="map-canvas">
                <div className="map-grid" />
                <div className="map-river" />
                <svg className="flight-routes" viewBox="0 0 700 300" preserveAspectRatio="none" aria-label="Illustrative drone routes">
                  <path d="M70 230 L190 90 L350 150 L510 80 L630 210" />
                  <path d="M190 90 L350 150 L400 240 L630 210" />
                </svg>
                {[
                  { id: "DRONE-001", x: "27%", y: "30%" },
                  { id: "DRONE-002", x: "68%", y: "27%" },
                  { id: "DRONE-003", x: "48%", y: "55%" },
                  { id: "DRONE-004", x: "78%", y: "72%" },
                  { id: "DRONE-005", x: "13%", y: "75%" },
                ].map((marker) => {
                  const drone = drones.find((item) => item.id === marker.id);
                  return (
                    <button
                      key={marker.id}
                      className={`map-marker ${drone.status === "Offline" ? "offline" : ""} ${selectedDrone?.id === marker.id ? "selected" : ""}`}
                      style={{ left: marker.x, top: marker.y }}
                      onClick={() => setSelectedDrone(drone)}
                      title={`Select ${marker.id}`}
                    >
                      <Plane size={17} />
                      <span>{marker.id}</span>
                    </button>
                  );
                })}
                <div className="map-legend">
                  <span><i className="legend-online" /> Online</span>
                  <span><i className="legend-offline" /> Offline</span>
                  <span><i className="legend-route" /> Mission route</span>
                </div>
                <span className="map-caption">Illustrative map · Mock GPS coordinates</span>
              </div>
            </section>

            <TelemetryPanel drone={selectedDrone} />
          </div>

          <div className="bottom-grid">
            <DroneFleet drones={drones} onSelect={setSelectedDrone} />
            <RecentMissions missions={missions} />
          </div>

          <footer className="app-footer">
            AeroSaga Mission Control · Frontend prototype · Not connected to live drones
          </footer>
        </div>
      </main>
    </div>
  );
}
