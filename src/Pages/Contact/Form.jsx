import React, { useState } from "react";
import { createBooking } from "../../Server/bookingService";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact_info: "",
    service_id: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const services = [
    { id: 1, name: "Custom Furniture Making" },
    { id: 2, name: "Wooden Flooring Installation" },
    { id: 3, name: "Repair & Restoration" },
    { id: 4, name: "Kitchen & Wardrobe Design" },
    { id: 5, name: "Doors & Windows Work" },
    { id: 6, name: "Office & Commercial Carpentry" },
    { id: 7, name: "Outdoor Woodwork" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dateTime = new Date(`${formData.date}T${formData.time}`).toISOString();
      
      const bookingData = {
        name: formData.name,
        contact_info: formData.contact_info,
        address: formData.address,
        service_id: parseInt(formData.service_id),
        date_time: dateTime,
        notes: formData.notes,
      };

      const data = await createBooking(bookingData);
      console.log("Booking success:", data);
      alert("Thank you for your booking request! We will contact you shortly.");

      setFormData({
        name: "",
        contact_info: "",
        service_id: "",
        date: "",
        time: "",
        address: "",
        notes: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto py-6 px-4">
        <div className="bg-white/90 rounded-lg shadow-md overflow-hidden border border-amber-700/20">
          <div className="p-4 sm:p-5">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Service Request Form
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-xs"
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <label htmlFor="contact_info" className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact_info"
                    name="contact_info"
                    required
                    value={formData.contact_info}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-xs"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service_id" className="block text-xs font-medium text-gray-700 mb-1">
                    Select Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service_id"
                    name="service_id"
                    required
                    value={formData.service_id}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-xs"
                  >
                    <option value="">-- Select a Service --</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time in one row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="date" className="block text-xs font-medium text-gray-700 mb-1">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-xs font-medium text-gray-700 mb-1">
                      Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-xs"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-xs font-medium text-gray-700 mb-1">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-xs"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-xs"
                    placeholder="Special requirements or project details..."
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-md shadow-sm transition duration-200 text-xs"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Compact Additional Info */}
        <div className="mt-6 bg-[#4a0404]/90 text-white rounded-lg p-3 border border-amber-700/20">
          <h3 className="text-sm font-bold mb-2">
            What Happens Next?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="flex items-start">
              <div className="bg-amber-600 p-1 rounded-full mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-xs mb-0.5">Confirmation</h4>
                <p className="text-2xs text-amber-100">Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 p-1 rounded-full mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-xs mb-0.5">Scheduling</h4>
                <p className="text-2xs text-amber-100">Convenient time</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber-600 p-1 rounded-full mr-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-xs mb-0.5">Quality Work</h4>
                <p className="text-2xs text-amber-100">Exceptional results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;