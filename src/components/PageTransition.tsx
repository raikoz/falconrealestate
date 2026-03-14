import { ReactNode } from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 20, opacity: 0 }}
    transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
