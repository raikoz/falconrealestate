import { motion } from "framer-motion";
import {
  ShoppingBag, Baby, MessageSquare, Car, Dog, Trees,
  BookOpen, Users, Dumbbell, Waves, Gamepad2, Flower2,
} from "lucide-react";

const amenities = [
  { icon: ShoppingBag, name: "Convenience Store" },
  { icon: Baby, name: "Children's Play Area" },
  { icon: MessageSquare, name: "Semi Open Chit-Chat Area" },
  { icon: Car, name: "EV Charging Point" },
  { icon: Dog, name: "Pet Park" },
  { icon: Trees, name: "Lawn & Garden" },
  { icon: BookOpen, name: "Library Lounge" },
  { icon: Users, name: "Multi-purpose Hall" },
  { icon: Gamepad2, name: "Tennis Court" },
  { icon: Waves, name: "Swimming Pool" },
  { icon: Dumbbell, name: "Open Gym" },
  { icon: Flower2, name: "Yoga Zone" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Lifestyle
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            World-Class Amenities
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto"
        >
          {amenities.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-4 md:p-5 text-center group hover:border-primary/40 transition-all cursor-default"
            >
              <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] md:text-xs font-body font-medium text-foreground/80 leading-tight">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
