import { motion } from "framer-motion";
import locationMap from "@/assets/location-map.jpg";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 md:py-24 bg-emerald-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Connectivity
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            Location Map
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card overflow-hidden max-w-4xl mx-auto"
        >
          <img
            src={locationMap}
            alt="Falcon Tatva Location Map - Khandagiri, Bhubaneswar"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
