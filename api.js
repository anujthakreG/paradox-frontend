const API_BASE = window.API_BASE;

export async function requestAccess(payload) {
  const res = await fetch(`${API_BASE}/request-access`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return res.json();
}
