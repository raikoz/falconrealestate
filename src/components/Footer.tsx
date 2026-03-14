import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import falconLogo from "@/assets/falcon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={falconLogo} alt="Falcon Real Estate" className="h-12 w-auto brightness-0 invert mb-6" />
            <p className="text-background/60 text-sm max-w-xs leading-relaxed">
              A pioneer in building luxury homes, townships and diversified real estate properties in Eastern India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono-tech text-xs tracking-widest text-background/40 mb-6">NAVIGATION</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projects" },
                { label: "About Us", path: "/about" },
                { label: "Gallery", path: "/gallery" },
                { label: "Career", path: "/career" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-background/60 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-mono-tech text-xs tracking-widest text-background/40 mb-6">PROJECTS</h4>
            <div className="flex flex-col gap-3">
              {["Falcon Tatva", "JSP Harmony", "The Hub", "Falcon Crest", "Falcon Residency"].map((p) => (
                <Link
                  key={p}
                  to="/projects"
                  className="text-sm text-background/60 hover:text-primary transition-colors duration-300"
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-tech text-xs tracking-widest text-background/40 mb-6">CONTACT</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://maps.app.goo.gl/igfEDkeKDyBxfsex9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-background/60 hover:text-primary transition-colors"
              >
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Falcon House, A/22, Cuttack Road, 1st Floor, Bhubaneswar-751006, Odisha
              </a>
              <a href="tel:+916742571976" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                <Phone size={16} className="shrink-0" />
                +91 674 257 1976
              </a>
              <a href="mailto:info@falconrealestate.in" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                <Mail size={16} className="shrink-0" />
                info@falconrealestate.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono-tech text-xs text-background/40">
            © {new Date().getFullYear()} FALCON REAL ESTATE. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono-tech text-xs text-background/40">
            RERA AUTHORITY: WWW.RERA.ODISHA.GOV.IN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
