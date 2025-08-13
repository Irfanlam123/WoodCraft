export const createBooking = async (formData) => {
  const response = await fetch("http://localhost:8080/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to create booking");
  }

  return await response.json();
};
