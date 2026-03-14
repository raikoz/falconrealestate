import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  index: number;
}

const TestimonialCard = ({ quote, name, role, index }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.2, 0, 0, 1] }}
      className="glass p-8 md:p-10 flex flex-col"
    >
      <Quote size={24} className="text-primary mb-6 shrink-0" />
      <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-8">
        {quote}
      </p>
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="font-mono-tech text-xs text-muted-foreground mt-0.5">{role}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
