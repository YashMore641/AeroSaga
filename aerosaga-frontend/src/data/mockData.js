
export const drones = [
  {
    id: "DRONE-001",
    status: "Online",
    battery: 85,
    mission: "Survey-001",
    location: "18.5123° N, 73.8701° E",
    altitude: 100,
    speed: 15,
  },
  {
    id: "DRONE-002",
    status: "Online",
    battery: 78,
    mission: "Delivery-001",
    location: "18.5204° N, 73.8567° E",
    altitude: 120,
    speed: 18,
  },
  {
    id: "DRONE-003",
    status: "Online",
    battery: 65,
    mission: "Inspection-002",
    location: "18.5078° N, 73.8421° E",
    altitude: 85,
    speed: 12,
  },
  {
    id: "DRONE-004",
    status: "Online",
    battery: 92,
    mission: "Delivery-002",
    location: "18.4956° N, 73.8312° E",
    altitude: 140,
    speed: 20,
  },
  {
    id: "DRONE-005",
    status: "Offline",
    battery: 45,
    mission: "None",
    location: "18.4900° N, 73.8200° E",
    altitude: 0,
    speed: 0,
  },
];

export const missions = [
  { id: "MISSION-012", drone: "DRONE-002", status: "In Progress", time: "28 min ago" },
  { id: "MISSION-011", drone: "DRONE-001", status: "Completed", time: "1 hr ago" },
  { id: "MISSION-010", drone: "DRONE-003", status: "Completed", time: "2 hr ago" },
  { id: "MISSION-009", drone: "DRONE-004", status: "Completed", time: "3 hr ago" },
  { id: "MISSION-008", drone: "DRONE-005", status: "Failed", time: "5 hr ago" },
];
