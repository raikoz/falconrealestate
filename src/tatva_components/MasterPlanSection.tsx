import { motion } from "framer-motion";
import masterPlan1 from "@/assets/master-plan-1.jpg";
import masterPlan2 from "@/assets/master-plan-2.jpg";

const MasterPlanSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Blueprint
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            Master Plan
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[masterPlan1, masterPlan2].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="glass-card overflow-hidden"
            >
              <img
                src={img}
                alt={`Master Plan ${i + 1}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterPlanSection;
