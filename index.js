import { requestAccess } from "./api.js";

window.sendTest = async function () {
  try {
    const response = await requestAccess({
      app_id: "demo_app",
      user_id: "user_001",
      data_type: "location",
      purpose: "analytics",
      destination: "frontend-ui",
      timestamp: new Date().toISOString()
    });

    alert("Response received. Check console.");
    console.log("Backend response:", response);
  } catch (err) {
    console.error(err);
    alert("Backend request failed");
  }
};
