import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  { type: "3 BHK", subtitle: "3 BHK + Servant Room", price: "1.8", area: "2355 SqFt", featured: false },
  { type: "3.5 BHK", subtitle: "3.5 BHK + Servant Room", price: "2.1", area: "2632 - 2639 SqFt", featured: true },
  { type: "4 BHK", subtitle: "4 BHK + Servant Room", price: "2.5", area: "3205 SqFt", featured: false },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-emerald-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-3">
            Investment
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            Pricing
          </h2>
          <div className="section-divider" />
          <p className="text-xs md:text-sm text-muted-foreground mt-4 font-body">
            Construction Linked Flexi Payment Plans Available
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.type}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className={`relative rounded-2xl p-6 md:p-8 text-center transition-all duration-300 ${
                plan.featured
                  ? "glass-card-strong border-primary/40 shadow-lg shadow-primary/10"
                  : "glass-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient-bg text-primary-foreground text-xs font-body font-bold px-4 py-1 rounded-full tracking-wider">
                  POPULAR
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-display font-bold text-primary mb-1">
                {plan.type}
              </h3>
              <p className="text-xs font-body text-muted-foreground mb-6">
                {plan.subtitle}
              </p>
              <div className="mb-6">
                <span className="text-sm font-body text-muted-foreground">₹</span>
                <span className="text-3xl md:text-4xl font-display font-bold gold-gradient-text">
                  {plan.price}
                </span>
                <span className="text-base md:text-lg font-body text-muted-foreground"> Cr*</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm font-body text-foreground/80">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{plan.area}</span>
              </div>
              <a
                href="#contact"
                className={`mt-6 inline-block w-full py-3 rounded-lg font-body font-semibold text-sm tracking-wide transition-all ${
                  plan.featured
                    ? "gold-gradient-bg text-primary-foreground"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                ENQUIRE NOW
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
