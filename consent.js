import { requestAccess } from "./api";
export async function sendConsentDecision(consentData) {
  const response = await requestAccess({
    app_id: "demo_app",
    user_id: "user_001",
    data_type: "location",
    purpose: consentData.purpose,
    destination: "frontend-ui",
    timestamp: new Date().toISOString()
  });

  console.log("Backend response:", response);
  return response;
}
