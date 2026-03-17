import { motion } from "framer-motion";
import { Flame, Droplets, Mountain, Cloud, Wind } from "lucide-react";

const elements = [
  { icon: Flame, name: "Fire", desc: "Represents the energy of transformation. Fire is the most potent element — it can destroy and create." },
  { icon: Droplets, name: "Water", desc: "Represents the energy of fluidity. The most vital element for the survival of all living beings." },
  { icon: Mountain, name: "Earth", desc: "Represents the energy of stability. Provides a supportive environment for all living beings." },
  { icon: Cloud, name: "Sky", desc: "Represents the energy of space. Present everywhere, yet it cannot be seen or touched." },
  { icon: Wind, name: "Air", desc: "Represents motion's energy. Carries the oxygen necessary for all living beings' survival." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const FiveElementsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-emerald-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            The Five Elements
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-xs md:text-sm font-body text-foreground/60 max-w-2xl mx-auto px-4">
            All our lives are blessed by the blissful presence of the five basic elements that constitute our beautiful cosmos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mt-10 md:mt-12 max-w-5xl mx-auto"
        >
          {elements.map((el) => (
            <motion.div
              key={el.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
              className="glass-card p-5 md:p-6 text-center group hover:border-primary/40 transition-all"
            >
              <el.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-base md:text-lg text-primary mb-2">{el.name}</h3>
              <p className="text-[10px] md:text-xs font-body text-foreground/60 leading-relaxed">{el.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FiveElementsSection;
