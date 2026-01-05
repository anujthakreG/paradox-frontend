import { requestAccess } from "./api.js";

const btn = document.getElementById("sendBtn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  output.innerText = "Sending request...";

  try {
    const res = await requestAccess({
      app_id: "demo_app",
      user_id: "user_001",
      data_type: "location",
      purpose: "delivery_tracking",
      destination: "frontend",
      timestamp: new Date().toISOString()
    });

    output.innerText = JSON.stringify(res, null, 2);
  } catch (err) {
    output.innerText = "Error: " + err.message;
  }
});
