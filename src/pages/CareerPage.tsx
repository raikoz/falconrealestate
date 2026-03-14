import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

const CareerPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">CAREER</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-balance">
              Build Your Future<br />
              <span className="text-primary-dark">With Us</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-lg leading-relaxed">
              Join Falcon Real Estate and be part of a team that's redefining the skyline of Eastern India. We're always looking for passionate professionals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-mono-tech text-xs tracking-widest text-muted-foreground mb-4">OFFICE ADDRESS</h3>
                  <a href="https://maps.app.goo.gl/igfEDkeKDyBxfsex9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed group-hover:text-primary transition-colors">
                      Falcon House, A/22, Cuttack Road,<br />
                      1st Floor, Bhubaneswar-751006,<br />
                      Odisha, India
                    </span>
                  </a>
                </div>

                <div>
                  <h3 className="font-mono-tech text-xs tracking-widest text-muted-foreground mb-4">CALL NOW</h3>
                  <div className="flex flex-col gap-2">
                    {["+91 674 257 1976", "+91 743 700 8800", "+91 797 867 7741"].map((num) => (
                      <a key={num} href={`tel:${num.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
                        <Phone size={16} className="shrink-0 text-primary" />
                        <span className="font-mono-tech text-sm group-hover:text-primary transition-colors">{num}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-mono-tech text-xs tracking-widest text-muted-foreground mb-4">MAIL US</h3>
                  <a href="mailto:info@falconrealestate.in" className="flex items-center gap-3 group">
                    <Mail size={16} className="shrink-0 text-primary" />
                    <span className="font-mono-tech text-sm group-hover:text-primary transition-colors">info@falconrealestate.in</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Application Form */}
            <AnimatedSection delay={0.15}>
              <div className="shadow-card p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-2">Apply Now</h2>
                <p className="text-sm text-muted-foreground mb-8">Share your details and we'll reach out for relevant opportunities.</p>

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
                      COVER LETTER
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
                    className="w-full bg-primary text-primary-foreground py-4 font-mono-tech text-sm tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center justify-center gap-2 mt-2"
                    whileTap={{ scale: 0.96 }}
                  >
                    <Send size={16} />
                    SUBMIT APPLICATION
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CareerPage;
