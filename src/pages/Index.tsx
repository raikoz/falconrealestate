import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home as HomeIcon, Factory } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactDrawer from "@/components/ContactDrawer";
import heroImg from "@/assets/hero-building.jpg";
import interiorImg from "@/assets/interior-living.jpg";
import tatvaImg from "@/assets/project-tatva.jpg";
import harmonyImg from "@/assets/project-harmony.jpg";
import hubImg from "@/assets/project-hub.jpg";

const projects = [
  {
    title: "Falcon Tatva",
    location: "Dumduma Khandgiri, Bhubaneswar",
    image: tatvaImg,
    rera: "RP/19/2023/00922",
    status: "ongoing" as const,
    slug: "falcon-tatva",
  },
  {
    title: "JSP Harmony",
    location: "BJB Nagar, Bhubaneswar",
    image: harmonyImg,
    rera: "RP/19/2024/01248",
    status: "ongoing" as const,
    slug: "jsp-harmony",
  },
  {
    title: "The Hub",
    location: "BJB Nagar, Bhubaneswar",
    image: hubImg,
    rera: "RP/19/2023/00922",
    status: "ongoing" as const,
    slug: "the-hub",
  },
];

const testimonials = [
  {
    quote: "I purchased a flat in Falcon Crest, Bhubaneswar, and am impressed by the quality construction, architectural design, and branded electrical and sanitary fittings. The open space adds immense value. The amenities, including a rooftop pool, clubhouse, gym, and kids' play area, are top-notch.",
    name: "Dr. Sudeep Mohapatra",
    role: "Doctor",
  },
  {
    quote: "One of the unique real estate developers in Bhubaneswar. I feel lucky to get a flat in their Falcon Crest Apartment. Me and my family are feeling here very homely and heavenly. I place on record my sincere thanks to these developers.",
    name: "T. Nagerswar Rao",
    role: "Business Man",
  },
];

const services = [
  {
    icon: HomeIcon,
    title: "Residential Developments",
    desc: "Vibrant residential communities with modern apartments and villas designed for comfort, style, and a fulfilling lifestyle.",
  },
  {
    icon: Factory,
    title: "Industrial Developments",
    desc: "Robust industrial projects delivering functional spaces for today's evolving manufacturing and logistics industries.",
  },
  {
    icon: Building2,
    title: "Commercial Developments",
    desc: "Innovative commercial properties that cater to businesses, enhancing productivity and fostering community engagement.",
  },
];

const Index = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <PageTransition>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale, y: heroY }}>
          <img src={heroImg} alt="Falcon Real Estate luxury development" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 pb-24 md:pb-32"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="font-mono-tech text-xs md:text-sm tracking-[0.2em] text-background/70 mb-4"
          >
            01 / FALCON REAL ESTATE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-background text-balance max-w-4xl leading-[1.05]"
          >
            Precision in Every
            <br />
            <span className="text-primary">Square Foot.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.2, 0, 0, 1] }}
            className="text-background/70 mt-6 max-w-lg text-sm md:text-base leading-relaxed"
          >
            Crafting not just luxury homes, but a legacy of love and togetherness across Eastern India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <Link to="/projects">
              <motion.button
                className="bg-primary text-primary-foreground px-8 py-4 font-mono-tech text-xs tracking-wider hover:bg-primary-dark transition-colors duration-300 flex items-center gap-2"
                whileTap={{ scale: 0.96 }}
              >
                VIEW PROJECTS <ArrowRight size={14} />
              </motion.button>
            </Link>
            <motion.button
              className="border border-background/30 text-background px-8 py-4 font-mono-tech text-xs tracking-wider hover:bg-background hover:text-foreground transition-colors duration-300"
              whileTap={{ scale: 0.96 }}
              onClick={() => setDrawerOpen(true)}
            >
              ENQUIRE NOW
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="bg-foreground text-background overflow-hidden">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 10, suffix: "+", label: "EXCLUSIVE PROJECTS" },
              { value: 2, suffix: "M+", label: "SQ. FT. DELIVERED" },
              { value: 25, suffix: "+", label: "YEARS EXPERIENCE" },
              { value: 500, suffix: "+", label: "HAPPY FAMILIES" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-left">
                  <p className="text-3xl md:text-5xl font-bold text-primary">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-mono-tech text-[10px] md:text-xs tracking-wider text-background/50 mt-2">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">02 / WHO WE ARE</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance leading-tight">
                A Trendsetting &<br />
                <span className="text-primary-dark">Futuristic Developer</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed max-w-lg text-sm md:text-base">
                A pioneer in building luxury homes, townships and diversified real estate properties, Falcon Real Estate has set a benchmark in the industry. Synonymous to innovation, unmatched quality, commitment and transparency, we have created a niche in the realty sector of Eastern India.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed max-w-lg text-sm md:text-base">
                Committed to providing exceptional services to the clientele, we believe in building lasting relationships based on trust and dedication.
              </p>
              <Link to="/about">
                <motion.button
                  className="mt-8 bg-foreground text-background px-8 py-4 font-mono-tech text-xs tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center gap-2"
                  whileTap={{ scale: 0.96 }}
                >
                  KNOW MORE <ArrowRight size={14} />
                </motion.button>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative overflow-hidden aspect-[4/5]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              >
                <img src={interiorImg} alt="Luxury interior" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                  <span className="font-mono-tech text-xs tracking-wider text-background/70">
                    LUXURY INTERIORS / FALCON CREST
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">03 / ONGOING PROJECTS</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance">
                  Delivering Excellence
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden md:flex items-center gap-2 font-mono-tech text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                VIEW ALL <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} {...project} index={i} />
            ))}
          </div>

          <Link to="/projects" className="md:hidden mt-8 flex items-center justify-center gap-2 font-mono-tech text-xs tracking-wider text-muted-foreground">
            VIEW ALL PROJECTS <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">04 / WHAT WE DO</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-16 text-balance">
              The Top Choice for<br />Real Estate
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="p-8 md:p-10 bg-background shadow-card hover:shadow-card-hover transition-shadow duration-500 group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-muted/50">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">05 / TESTIMONIALS</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-16 text-balance">
              What Our Residents Say
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-foreground text-background">
        <div className="container text-left">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-background/40">06 / GET IN TOUCH</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-balance max-w-2xl">
              Let Us Help You<br />
              <span className="text-primary">Make the Move.</span>
            </h2>
            <p className="text-background/60 mt-6 max-w-lg text-sm md:text-base leading-relaxed">
              Whether you're looking for your dream home or a premium commercial space, we're here to guide you every step of the way.
            </p>
            <motion.button
              className="mt-8 bg-primary text-primary-foreground px-12 py-5 font-mono-tech text-sm tracking-wider hover:bg-background hover:text-foreground transition-colors duration-300"
              whileTap={{ scale: 0.96 }}
              onClick={() => setDrawerOpen(true)}
            >
              REQUEST PRIVATE VIEWING
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      <ContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </PageTransition>
  );
};

export default Index;
