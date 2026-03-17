import { motion } from "framer-motion";
import { Building2, MapPin, Layers, Home, Calendar, FileCheck } from "lucide-react";

const overviewData = [
  { icon: MapPin, label: "Location", value: "Khandagiri, Bhubaneswar, Odisha" },
  { icon: Layers, label: "Land Area", value: "3.92 Acres (Approx.)" },
  { icon: Building2, label: "No. of Towers", value: "4 Towers" },
  { icon: Layers, label: "No. of Floors", value: "G + 17 Floors" },
  { icon: Home, label: "Unit Variants", value: "3 BHK, 3.5 BHK & 4 BHK" },
  { icon: Calendar, label: "Possession", value: "On Request" },
  { icon: FileCheck, label: "RERA No.", value: "RP/19/2023/00922" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const OverviewSection = () => {
  return (
    <section id="overview" className="py-20 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Discover
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            Project Overview
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto"
        >
          {overviewData.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-4 md:p-6 text-center group hover:border-primary/40 transition-colors"
            >
              <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] md:text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-xs md:text-sm font-body font-semibold text-foreground leading-tight">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
