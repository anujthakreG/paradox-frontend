// api.js — FINAL MVP VERSION

const API_BASE = "https://paradox-protocol.onrender.com";

export async function requestAccess(payload) {
  const res = await fetch(`${API_BASE}/request-access`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("Backend request failed");
  }

  return res.json();
}
