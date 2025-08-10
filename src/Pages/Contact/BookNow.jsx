import { useState } from 'react';
import Footer from '../../Components/Footer';

const BookNowPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const services = [
    'Custom Furniture Making',
    'Wooden Flooring Installation',
    'Repair & Restoration',
    'Kitchen & Wardrobe Design',
    'Doors & Windows Work',
    'Office & Commercial Carpentry',
    'Outdoor Woodwork'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1531824475211-72594993ce2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      {/* Overlay */}
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        {/* Hero Section */}
        <div className="relative py-12 px-4 sm:py-16 md:py-20 bg-[#4a0404]/90 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Book Our Services</h1>
            <p className="text-base sm:text-lg max-w-3xl mx-auto">
              Fill out the form below to get a quote or book our carpentry services
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-5 md:px-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden border border-amber-700/20">
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Service Request Form</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                    >
                      <option value="">-- Select a Service --</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                    />
                  </div>

                  {/* Full-width fields */}
                  <div>
                    <label htmlFor="address" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Address / Location <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base"
                      placeholder="Any special requirements or details about your project..."
                    />
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <button
                    type="submit"
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-md sm:rounded-lg shadow-sm sm:shadow-md transition duration-300 transform hover:scale-105 text-sm sm:text-base"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-10 md:mt-12 bg-[#4a0404]/90 backdrop-blur-sm text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-amber-700/20">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">What Happens Next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              <div className="flex items-start">
                <div className="bg-amber-600 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1">Confirmation</h4>
                  <p className="text-xs sm:text-sm text-amber-100">We'll confirm your request within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1">Scheduling</h4>
                  <p className="text-xs sm:text-sm text-amber-100">We'll arrange a convenient time for your project</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1">Quality Work</h4>
                  <p className="text-xs sm:text-sm text-amber-100">Our craftsmen will deliver exceptional results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookNowPage;