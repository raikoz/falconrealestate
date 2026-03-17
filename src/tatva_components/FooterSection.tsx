import { motion } from "framer-motion";
import logo from "@/assets/falcon-tatva-logo.png";

const FooterSection = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border py-10 md:py-12 bg-emerald-card/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Falcon Tatva" className="h-10" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-xs font-body text-muted-foreground">
              RERA Registration: RP/19/2023/00922
            </p>
            <p className="text-xs font-body text-muted-foreground mt-1 break-all md:break-normal">
              E-Mail: info.tatva@falconrealestate.in | Website: www.falconrealestate.in
            </p>
            <p className="text-xs font-body text-muted-foreground mt-2">
              ©{new Date().getFullYear()} Falcon Tatva. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[10px] font-body text-muted-foreground/60 max-w-4xl mx-auto leading-relaxed px-4">
            DISCLAIMER: This website is meant for information purposes only. Content is sourced from
            the developer/builder. Nothing on this website constitutes advertising, marketing, booking,
            selling or an offer for sale. The developer/builder is not liable for any consequence of
            any action taken by the viewer relying on the information.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;
