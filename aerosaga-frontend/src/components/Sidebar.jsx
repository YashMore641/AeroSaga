
import {
  Plane, LayoutDashboard, Users, ClipboardList,
  Map, ChartNoAxesColumn, Settings, X
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Fleet", icon: Users },
  { label: "Missions", icon: ClipboardList },
  { label: "Live Map", icon: Map },
  { label: "Reports", icon: ChartNoAxesColumn },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({ activePage, onNavigate, open, onClose }) {
  return (
    <>
      {open && <button className="mobile-overlay" onClick={onClose} aria-label="Close navigation" />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <Plane size={30} />
          <div>
            <h2>AeroSaga</h2>
            <p>Drone Mission Control</p>
          </div>
          <button className="mobile-close" onClick={onClose} aria-label="Close navigation">
            <X size={20} />
          </button>
        </div>

        <nav className="nav-list">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-item ${activePage === label ? "active" : ""}`}
              onClick={() => {
                onNavigate(label);
                onClose();
              }}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Plane size={25} />
          <div>
            <strong>Smarter Drones</strong>
            <p>Safer Tomorrow</p>
          </div>
        </div>
      </aside>
    </>
  );
}
