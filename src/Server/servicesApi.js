// servicesApi.js

// GET all services
export const getAllServices = async () => {
  const response = await fetch("http://localhost:8080/api/services");
  
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return await response.json();
};

// POST new service
export const createService = async (serviceData) => {
  const response = await fetch("http://localhost:8080/api/services", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serviceData),
  });

  if (!response.ok) {
    throw new Error("Failed to create service");
  }

  return await response.json();
};
