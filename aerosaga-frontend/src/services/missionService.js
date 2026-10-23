
const API_BASE_URL = "http://localhost:8080/api";

export async function getDroneFleet() {
  const response = await fetch(`${API_BASE_URL}/drones`);

  if (!response.ok) {
    throw new Error("Failed to fetch drone fleet");
  }

  return response.json();
}

export async function getMissions() {
  const response = await fetch(`${API_BASE_URL}/missions`);

  if (!response.ok) {
    throw new Error("Failed to fetch missions");
  }

  return response.json();
}
