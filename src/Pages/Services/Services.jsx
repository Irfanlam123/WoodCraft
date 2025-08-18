import { useState, useEffect } from "react";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer";
import { getAllServices } from "../../Server/servicesApi";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiLoader,
  FiAlertCircle,
  FiCheckCircle,
  FiDollarSign,
  FiHome,
  FiBriefcase,
  FiSearch,
} from "react-icons/fi";
import ServicesShowcase from "./Work";
import { Link } from "react-router-dom";

// ... (inside your ServicesPage component)

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Color definitions
  const colors = {
    primary: "#4a0404", // Deep burgundy
    secondary: "#d97706", // Amber-600
    lightBg: "#fffbeb", // Amber-50
    accent: "#b45309", // Amber-700
    textDark: "#1f2937", // Gray-800
    textLight: "#f3f4f6", // Gray-100
    residential: "#3b82f6", // Blue-500
    commercial: "#10b981", // Green-500
    both: "#8b5cf6", // Purple-500
  };
  // ... (inside your ServicesPage component)

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getAllServices();
        setServices(data);
        setError(null);
      } catch (err) {
        setError(err.message || "Error fetching services");
        setServices([]);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Filter services by category and search term
  const filteredServices = services
    .filter(
      (service) =>
        activeTab === "all" ||
        service.category === activeTab ||
        service.category === "both"
    )
    .filter(
      (service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const tabConfig = [
    {
      id: "all",
      label: "All Services",
      icon: <FiCheckCircle className="mr-2" />,
    },
    {
      id: "residential",
      label: "Residential",
      icon: <FiHome className="mr-2" />,
    },
    {
      id: "commercial",
      label: "Commercial",
      icon: <FiBriefcase className="mr-2" />,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen" style={{ background: colors.lightBg }}>
        <div className="flex flex-col items-center justify-center h-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <FiLoader
              className="text-4xl mb-4"
              style={{ color: colors.primary }}
            />
          </motion.div>
          <p className="font-medium" style={{ color: colors.primary }}>
            Loading our services...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen" style={{ background: colors.lightBg }}>
        <div className="flex flex-col items-center justify-center h-full px-4">
          <FiAlertCircle
            className="text-4xl mb-4"
            style={{ color: colors.primary }}
          />
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: colors.primary }}
          >
            Oops!
          </h2>
          <p
            className="text-center max-w-md mb-6"
            style={{ color: colors.primary }}
          >
            We couldn't load our services. {error}
          </p>
          <Button
            text="Try Again"
            onClick={() => window.location.reload()}
            style={{ backgroundColor: colors.primary }}
            className="hover:bg-opacity-90 text-white"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: colors.lightBg }}>
      {/* Hero Section */}
      <div
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ backgroundColor: colors.primary }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Premium Services
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: colors.textLight }}
          >
            Exceptional solutions tailored to your residential or commercial
            needs
          </p>
        </motion.div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: `linear-gradient(to top, ${colors.lightBg}, transparent)`,
          }}
        ></div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-6 py-12 -mt-10">
        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 mb-8 border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ borderColor: colors.primary + "20" }}
        >
          {/* Search Input */}
          <div className="mb-6 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch
                  className="h-5 w-5"
                  style={{ color: colors.primary }}
                />
              </div>
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                style={{
                  borderColor: colors.primary + "40",
                  focusRingColor: colors.primary,
                  backgroundColor: colors.lightBg,
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabConfig.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id ? "shadow-md" : ""
                }`}
                style={{
                  backgroundColor:
                    activeTab === tab.id ? colors.primary : colors.lightBg,
                  color: activeTab === tab.id ? "white" : colors.textDark,
                }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-medium" style={{ color: colors.primary }}>
            Showing {filteredServices.length}{" "}
            {filteredServices.length === 1 ? "service" : "services"}
            {activeTab !== "all" && ` in ${activeTab}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div
              className="inline-block p-6 rounded-full mb-4"
              style={{ backgroundColor: colors.primary + "10" }}
            >
              <FiAlertCircle
                className="text-4xl"
                style={{ color: colors.primary }}
              />
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: colors.primary }}
            >
              No services found
            </h3>
            <p className="max-w-md mx-auto" style={{ color: colors.primary }}>
              {searchTerm
                ? "Try a different search term or category"
                : "We couldn't find any services matching your criteria"}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  style={{ borderTop: `4px solid ${colors.primary}` }}
                >
                  {service.image_url && (
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={service.image_url}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1/3"
                        style={{
                          background: `linear-gradient(to top, rgba(74,4,4,0.7), transparent)`,
                        }}
                      ></div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: colors.primary }}
                      >
                        {service.name}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.category === "residential"
                            ? "bg-blue-100 text-blue-800"
                            : service.category === "commercial"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {service.category}
                      </span>
                    </div>
                    <p
                      className="mt-2 line-clamp-3"
                      style={{ color: colors.textDark }}
                    >
                      {service.description}
                    </p>
                    <div
                      className="mt-4 flex items-center"
                      style={{ color: colors.primary }}
                    >
                      <FiDollarSign className="mr-1" />
                      <span className="font-medium">{service.price_range}</span>
                    </div>
                    <div className="mt-6">
                      <Link
                        to="/BookNow"
                        style={{
                          backgroundColor: colors.primary,
                          display: "block",
                          width: "100%",
                          textAlign: "center",
                          padding: "0.75rem 1.5rem",
                          borderRadius: "0.375rem",
                          color: "white",
                          fontWeight: 500,
                          transition: "opacity 0.2s",
                        }}
                        className="hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                      >
                        Get Exact Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
      <ServicesShowcase />
      <Footer />
    </div>
  );
};

export default ServicesPage;
