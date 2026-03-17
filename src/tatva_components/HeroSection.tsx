import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/gallery-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Falcon Tatva" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-28 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
          >
            Luxury Living Redefined
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
          >
            <span className="gold-gradient-text">FALCON</span>{" "}
            <span className="text-foreground">TATVA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl font-body text-foreground/70 max-w-2xl mx-auto mb-2 px-4"
          >
            Luxury Apartments in{" "}
            <span className="text-primary font-semibold">Khandagiri, Bhubaneswar, Odisha</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xs md:text-sm font-body text-muted-foreground mb-8 px-4"
          >
            Four G+17 Towers · 3.92 Acres · 3 BHK, 3.5 BHK & 4 BHK
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <a
            href="/Tatva_Brochure.pdf"
            download="Falcon_Tatva_Brochure.pdf"
            className="gold-gradient-bg text-primary-foreground font-body font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm tracking-wide w-full sm:w-auto text-center"
          >
            DOWNLOAD BROCHURE
          </a>
          <a
            href="#contact"
            className="glass-card px-8 py-3 rounded-lg font-body font-semibold text-primary text-sm tracking-wide hover:bg-primary/10 transition-colors w-full sm:w-auto text-center"
          >
            SCHEDULE SITE VISIT
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#overview" className="text-primary/60 hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
