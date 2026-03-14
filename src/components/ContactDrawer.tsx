import { useState } from "react";
import { motion } from "framer-motion";
import { X, Send } from "lucide-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDrawer = ({ isOpen, onClose }: ContactDrawerProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-card-hover overflow-y-auto"
      >
        <div className="p-8 md:p-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-mono-tech text-xs tracking-widest text-muted-foreground">ENQUIRY</span>
              <h2 className="text-2xl font-bold mt-1">Request Private Viewing</h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {[
              { label: "FULL NAME", key: "name" as const, type: "text" },
              { label: "EMAIL", key: "email" as const, type: "email" },
              { label: "PHONE", key: "phone" as const, type: "tel" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-mono-tech text-xs tracking-widest text-muted-foreground mb-2 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
            ))}
            <div>
              <label className="font-mono-tech text-xs tracking-widest text-muted-foreground mb-2 block">
                MESSAGE
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 font-mono-tech text-sm tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
              whileTap={{ scale: 0.96 }}
            >
              <Send size={16} />
              SUBMIT ENQUIRY
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactDrawer;
