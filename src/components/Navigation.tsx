import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Users, Image, Briefcase, Phone, Menu, X } from "lucide-react";
import falconLogo from "@/assets/falcon-logo.png";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/projects", label: "Projects", icon: Building2 },
  { path: "/about", label: "About", icon: Users },
  { path: "/gallery", label: "Gallery", icon: Image },
  { path: "/career", label: "Career", icon: Briefcase },
  { path: "/contact", label: "Contact", icon: Phone },
];

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Pages where the hero is dark (video/image background)
  const isHeroPage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // When not scrolled on hero page: white text + white logo (over dark video)
  // When scrolled or on non-hero pages: dark text + dark logo (over glass/white bg)
  const isOverDark = isHeroPage && !scrolled;

  return (
    <>
      {/* Top bar with logo */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-arch ${
          scrolled ? "glass shadow-card" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={falconLogo}
              alt="Falcon Real Estate"
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                isOverDark ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-mono-tech text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === item.path
                    ? isOverDark ? "text-background" : "text-foreground"
                    : isOverDark ? "text-background/70 hover:text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label.toUpperCase()}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isOverDark ? "text-background" : "text-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass-dark md:hidden"
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-background p-8 pt-24 flex flex-col gap-1"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg font-mono-tech text-sm tracking-wide transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom dock nav (mobile) */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 glass rounded-2xl shadow-card-hover md:hidden">
        <div className="flex items-center justify-around py-2">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center gap-0.5 p-2"
            >
              <item.icon
                size={20}
                className={
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }
              />
              {location.pathname === item.path && (
                <motion.div
                  layoutId="dock-dot"
                  className="w-1 h-1 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
