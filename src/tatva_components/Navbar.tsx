import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/falcon-tatva-logo.png";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Pricing", href: "#pricing" },
  { label: "Amenities", href: "#amenities" },
  { label: "Brochure", href: "#brochure" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-3 md:p-4"
    >
      <div className="glass-card-strong rounded-2xl">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <img src={logo} alt="Falcon Tatva" className="h-10 md:h-14" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+917978104620"
              className="flex items-center gap-2 text-sm font-medium text-primary whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              +91 79781 04620
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gold-subtle overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-body font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+917978104620"
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <Phone className="w-4 h-4" />
                  +91 79781 04620
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
