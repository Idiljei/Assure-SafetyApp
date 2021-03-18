export const getAlerts = (type) => {
  if (type) {
    const alerts = {
      sharing: "Sharing live location with safety network!",
      verify: "Please enter your PIN to cancel.",
      cancelled: "No longer sharing your live location. Glad you're safe!",
      incorrect: "The PIN is incorrect. Live location is still being shared.",
    }

    return alerts;
  }
  
  if (!type) {
    const alerts = {
      sharing: "Calling Emergency Services.",
      verify: "Please enter your PIN to cancel.",
      cancelled: "Cancelling call to Emergency Services. Glad you're safe!",
      incorrect: "The PIN is incorrect. Still calling Emergency Services.",
    }

    return alerts;
  }
};