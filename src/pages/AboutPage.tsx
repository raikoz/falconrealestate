import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import interiorImg from "@/assets/interior-living.jpg";
import heroImg from "@/assets/hero-building.jpg";
import directorImg from "@/assets/director-portrait.jpg";

const timeline = [
  { year: "1985", event: "Falcon Group founded by Mr. Tara Ranjan Patnaik" },
  { year: "1997", event: "Falcon Real Estate established with a vision of crafting luxury living spaces" },
  { year: "2010", event: "Falcon Crest delivered — flagship residential project in Bhubaneswar" },
  { year: "2020", event: "Crossed 2 Million sq. ft. of delivered spaces" },
  { year: "2023", event: "Falcon Tatva launched — redefining luxury in Odisha" },
  { year: "2024", event: "JSP Harmony & The Hub — expanding the portfolio" },
];

const team = [
  { name: "Mr. Jayanta Ghose", role: "General Manager (Project)" },
  { name: "Vikrant Gupta", role: "Head Sales & Marketing" },
];

const AboutPage = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">ABOUT US</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-balance max-w-3xl leading-tight">
              Falcon Group Setting
              <br />
              <span className="text-primary-dark">Global Standards</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Group Story */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-muted-foreground leading-relaxed">
                The journey of a thousand miles begins with a single step. What spawned off from Odisha as a humble seedling in 1985 has since traversed the globe to become one of the nation's leading conglomerates.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Founded by <strong className="text-foreground">Mr. Tara Ranjan Patnaik</strong> and supported by his brother Mr. Prava Ranjan Patnaik, the Falcon Group is built on the foundation laid by Falcon Marine Exports Ltd. In the decades since, the Group has experienced extraordinary growth, entering and excelling in Real Estate, Aqua Feeds, Retail, and Agro-Processing.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-10">
                <div>
                  <p className="text-3xl font-bold text-primary"><AnimatedCounter end={2800} suffix=" Cr" /></p>
                  <p className="font-mono-tech text-[10px] tracking-wider text-muted-foreground mt-1">REVENUE (2022-23)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary"><AnimatedCounter end={5000} suffix="+" /></p>
                  <p className="font-mono-tech text-[10px] tracking-wider text-muted-foreground mt-1">EMPLOYEES</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                className="aspect-[4/5] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              >
                <img src={heroImg} alt="Falcon development" className="w-full h-full object-cover" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Real Estate */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">FALCON REAL ESTATE</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
                A Revered Player in Residential & Commercial Projects
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-6 max-w-lg">
                Our mission is to create global standards of housing projects for an unparalleled living experience. With an existing land bank of roughly 500 acres, we have the capacity to create millions of square feet of living space in the years to come.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 gap-6">
                <div className="glass p-8">
                  <h3 className="font-semibold mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To become the leading choice in real estate, known for our dedication to quality, client satisfaction, and innovative property solutions.
                  </p>
                </div>
                <div className="glass p-8">
                  <h3 className="font-semibold mb-2">Our Strategy</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We prioritize client needs, leverage market insights, and employ a proactive approach to deliver effective, efficient, and tailored real estate solutions.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-16">An Inspiring Journey</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08} className="relative mb-12 last:mb-0">
                <div className={`flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <span className="font-mono-tech text-2xl font-bold text-primary">{item.year}</span>
                    <p className="text-sm text-muted-foreground mt-2 max-w-xs inline-block">{item.event}</p>
                  </div>
                  <div className="absolute left-4 md:relative md:left-auto w-3 h-3 bg-primary rounded-full shrink-0 mt-2 md:mt-3 -translate-x-1/2 md:translate-x-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="py-24 bg-foreground text-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="font-mono-tech text-xs tracking-[0.2em] text-background/40">LEADERSHIP</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">From the Desk of Our Director</h2>
              <h3 className="text-xl text-primary mt-4">Parthajeet Patnaik — Director</h3>
              <p className="text-background/60 leading-relaxed mt-6">
                Passionate by heart, ambitious by nature, Parthajeet Patnaik is the director of Falcon Real Estate, Falcon Marine Exports Ltd, and Patnaik Steels & Alloys Ltd. With a constant urge to grow and redefine the skyline of Odisha, he embraces innovation, unparalleled ethics, values and remains steadfast in commitment to excellence.
              </p>
              <p className="text-background/60 leading-relaxed mt-4">
                Under his visionary leadership, Falcon Real Estate aims to be a leading developer in Odisha that can fulfill the dream of millions of home buyers.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="aspect-square overflow-hidden max-w-sm mx-auto">
                <img src={directorImg} alt="Parthajeet Patnaik - Director" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-16">Meet the Leaders</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="shadow-card p-8 hover:shadow-card-hover transition-shadow duration-500">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                    <span className="font-mono-tech text-xl text-primary-dark">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="font-mono-tech text-xs text-muted-foreground mt-1">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;
