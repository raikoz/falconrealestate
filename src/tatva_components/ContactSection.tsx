import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Enquiry from Falcon Tatva Website");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message || "I am interested in Falcon Tatva. Please contact me."}`
    );
    window.location.href = `mailto:info.tatva@falconrealestate.in?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            Schedule Your Site Visit
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-sm text-muted-foreground font-body">
            Special Price Benefits On Limited Units
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card-strong p-6 md:p-8 rounded-2xl"
          >
            <h3 className="text-xl font-display font-bold text-primary mb-6">
              Request Callback
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full gold-gradient-bg text-primary-foreground font-body font-bold py-3 rounded-lg text-sm tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                SEND ENQUIRY
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-center gap-5"
          >
            {[
              { href: "tel:+917978104620", icon: Phone, label: "Call Us", value: "+91 79781 04620" },
              { href: "mailto:info.tatva@falconrealestate.in", icon: Mail, label: "Email", value: "info.tatva@falconrealestate.in" },
              { href: "https://wa.me/917978104620?text=Enquiry%20from%20Falcon%20Tatva", icon: MessageCircle, label: "WhatsApp", value: "Chat with us", external: true },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-5 md:p-6 flex items-center gap-4 hover:border-primary/40 transition-colors group"
              >
                <div className="gold-gradient-bg p-3 rounded-xl flex-shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-body text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm md:text-base font-body font-bold text-foreground group-hover:text-primary transition-colors truncate">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
