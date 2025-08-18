import React, { useEffect, useState } from "react";
import { getAllGalleries } from "../../Server/galleryAPI";
import { motion, AnimatePresence } from "framer-motion";
import { FiLoader, FiAlertCircle } from "react-icons/fi";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const data = await getAllGalleries();
        if (!data || data.length === 0) {
          throw new Error("No gallery data found");
        }
        setGalleries(data);
      } catch (err) {
        console.error("Gallery fetch error:", err);
        setError(err.message || "Failed to load gallery");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        >
          <FiLoader className="text-4xl text-amber-600" />
        </motion.div>
        <p className="mt-4 text-gray-600">Loading our portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20">
        <FiAlertCircle className="text-4xl text-red-500" />
        <p className="mt-4 text-red-500 max-w-md text-center px-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
        >
          Reload Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Craftsmanship
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              A visual journey through our finest furniture creations
            </p>
          </motion.div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          alt="Featured furniture"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Fluid Gallery Grid */}
      <div className="container mx-auto px-4 py-16">
        {galleries.length > 0 ? (
          <div className="relative w-full">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <AnimatePresence>
                {galleries.map((item, index) => {
                  // Create dynamic positioning
                  const row = Math.floor(index / 3) % 2;
                  const offset = row === 0 ? 'md:translate-y-12' : 'md:-translate-y-12';
                  
                  return (
                    <motion.div
                      key={item.id}
                      className={`relative group ${offset} hover:z-10`}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          bounce: 0.4,
                          duration: 0.8
                        }
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Organic shape container */}
                      <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          initial={{ clipPath: "circle(0% at 50% 50%)" }}
                          whileHover={{ clipPath: "circle(75% at 50% 50%)" }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        <img
                          src={item.image_url}
                          alt={item.project_name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/images/fallback.jpg";
                            e.target.onerror = null;
                          }}
                        />
                        
                        {/* Floating info panel */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ y: 50 }}
                          whileHover={{ y: 0 }}
                        >
                          <h3 className="text-white text-xl font-semibold mb-2">
                            {item.project_name}
                          </h3>
                          <p className="text-amber-100 text-sm line-clamp-2">
                            {item.description}
                          </p>
                          {item.material_used && (
                            <span className="inline-block mt-2 px-2 py-1 bg-amber-600/80 text-white text-xs rounded-full">
                              {item.material_used}
                            </span>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No gallery items to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;