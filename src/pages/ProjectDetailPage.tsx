import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import FloorplanMorph from "@/components/FloorplanMorph";
import ContactDrawer from "@/components/ContactDrawer";
import tatvaImg from "@/assets/project-tatva.jpg";
import harmonyImg from "@/assets/project-harmony.jpg";
import hubImg from "@/assets/project-hub.jpg";
import crestImg from "@/assets/project-crest.jpg";
import residencyImg from "@/assets/project-residency.jpg";
import bedroomImg from "@/assets/room-bedroom.jpg";
import interiorImg from "@/assets/interior-living.jpg";

const projectsData: Record<string, {
  title: string;
  location: string;
  address: string;
  rera: string;
  image: string;
  status: string;
  specs: { label: string; value: string }[];
  description: string;
  amenities: string[];
}> = {
  "falcon-tatva": {
    title: "Falcon Tatva",
    location: "Dumduma Khandgiri, Bhubaneswar",
    address: "Plot No 496/4145 Dumduma Khandgiri Bhubaneswar 751019",
    rera: "RP/19/2023/00922 dated 11/05/2023",
    image: tatvaImg,
    status: "ONGOING",
    specs: [
      { label: "TYPE", value: "Residential" },
      { label: "CONFIGURATION", value: "2 & 3 BHK" },
      { label: "AREA", value: "1,100 - 1,650 SQ. FT." },
      { label: "FLOORS", value: "G + 15" },
    ],
    description: "Falcon Tatva redefines luxury living with its contemporary architecture and world-class amenities. Nestled in the heart of Bhubaneswar, it offers spacious apartments designed for modern families.",
    amenities: ["Swimming Pool", "Clubhouse", "Gymnasium", "Children's Play Area", "Landscaped Gardens", "24/7 Security", "Power Backup", "Covered Parking"],
  },
  "jsp-harmony": {
    title: "JSP Harmony",
    location: "BJB Nagar, Bhubaneswar",
    address: "112, C.A, PLOT NO. C/7, BJB NAGAR, BHUBANESWAR",
    rera: "RP/19/2024/01248 dated 05/09/2024",
    image: harmonyImg,
    status: "ONGOING",
    specs: [
      { label: "TYPE", value: "Residential" },
      { label: "CONFIGURATION", value: "3 & 4 BHK" },
      { label: "AREA", value: "1,400 - 2,200 SQ. FT." },
      { label: "FLOORS", value: "G + 20" },
    ],
    description: "JSP Harmony blends urban convenience with serene living. Located in the prestigious BJB Nagar, it offers premium apartments with cutting-edge design and unparalleled connectivity.",
    amenities: ["Infinity Pool", "Sky Lounge", "Gymnasium", "Spa", "Multi-purpose Hall", "Jogging Track", "24/7 Security", "EV Charging"],
  },
  "the-hub": {
    title: "The Hub",
    location: "BJB Nagar, Bhubaneswar",
    address: "112, C.A, PLOT NO. C/7, BJB NAGAR, BHUBANESWAR",
    rera: "RP/19/2023/00922 dated 11/05/2023",
    image: hubImg,
    status: "ONGOING",
    specs: [
      { label: "TYPE", value: "Commercial" },
      { label: "CONFIGURATION", value: "Retail & Office" },
      { label: "AREA", value: "500 - 5,000 SQ. FT." },
      { label: "FLOORS", value: "G + 12" },
    ],
    description: "The Hub is a premium commercial development designed to be the epicenter of business and retail. Modern architecture meets functional design for today's enterprises.",
    amenities: ["High-speed Elevators", "Central AC", "Food Court", "Conference Rooms", "Ample Parking", "24/7 Security", "Fire Safety", "Power Backup"],
  },
  "falcon-crest": {
    title: "Falcon Crest",
    location: "Shampur, Bhubaneswar",
    address: "Shampur Junction, Bhubaneswar",
    rera: "Completed",
    image: crestImg,
    status: "COMPLETED",
    specs: [
      { label: "TYPE", value: "Residential" },
      { label: "CONFIGURATION", value: "2 & 3 BHK" },
      { label: "AREA", value: "1,000 - 1,500 SQ. FT." },
      { label: "FLOORS", value: "G + 12" },
    ],
    description: "Falcon Crest stands as a testament to Falcon Real Estate's commitment to quality. This completed project features premium residences with rooftop amenities and lush green surroundings.",
    amenities: ["Rooftop Pool", "Clubhouse", "Gymnasium", "Children's Play Area", "Landscaped Gardens", "24/7 Security"],
  },
  "falcon-residency": {
    title: "Falcon Residency",
    location: "Patia, Bhubaneswar",
    address: "Patia, Bhubaneswar",
    rera: "Completed",
    image: residencyImg,
    status: "COMPLETED",
    specs: [
      { label: "TYPE", value: "Residential" },
      { label: "CONFIGURATION", value: "2 & 3 BHK" },
      { label: "AREA", value: "950 - 1,400 SQ. FT." },
      { label: "FLOORS", value: "G + 10" },
    ],
    description: "Falcon Residency offers thoughtfully designed living spaces in the vibrant Patia locality, known for its excellent connectivity and modern urban infrastructure.",
    amenities: ["Community Hall", "Gymnasium", "Children's Play Area", "Landscaped Gardens", "24/7 Security", "Covered Parking"],
  },
};

// Simple SVG floorplan
const FloorplanSVG = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Outer walls */}
    <rect x="50" y="50" width="500" height="300" className="stroke-foreground" />
    {/* Living room */}
    <rect x="50" y="50" width="250" height="180" className="stroke-foreground" />
    <text x="130" y="145" className="fill-muted-foreground text-[10px] font-mono-tech" stroke="none">LIVING ROOM</text>
    {/* Kitchen */}
    <rect x="300" y="50" width="250" height="120" className="stroke-foreground" />
    <text x="380" y="115" className="fill-muted-foreground text-[10px] font-mono-tech" stroke="none">KITCHEN</text>
    {/* Bedrooms */}
    <rect x="300" y="170" width="125" height="180" className="stroke-foreground" />
    <text x="320" y="265" className="fill-muted-foreground text-[10px] font-mono-tech" stroke="none">BEDROOM 1</text>
    <rect x="425" y="170" width="125" height="180" className="stroke-foreground" />
    <text x="445" y="265" className="fill-muted-foreground text-[10px] font-mono-tech" stroke="none">BEDROOM 2</text>
    {/* Bathroom */}
    <rect x="50" y="230" width="125" height="120" className="stroke-foreground" />
    <text x="70" y="295" className="fill-muted-foreground text-[10px] font-mono-tech" stroke="none">BATHROOM</text>
    {/* Balcony */}
    <rect x="175" y="230" width="125" height="120" className="stroke-foreground" strokeDasharray="4 4" />
    <text x="195" y="295" className="fill-muted-foreground text-[10px] font-mono-tech" stroke="none">BALCONY</text>
    {/* Dimensions */}
    <text x="250" y="40" className="fill-primary-dark text-[9px] font-mono-tech" stroke="none" textAnchor="middle">45' - 0"</text>
    <text x="30" y="200" className="fill-primary-dark text-[9px] font-mono-tech" stroke="none" textAnchor="middle" transform="rotate(-90 30 200)">30' - 0"</text>
  </svg>
);

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const project = projectsData[slug || ""] || projectsData["falcon-tatva"];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0, 1] }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.2, 0, 0, 1] }}
          >
            <span className="font-mono-tech text-xs tracking-wider text-primary">{project.status}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-background mt-2">{project.title}</h1>
            <div className="flex items-center gap-2 mt-3 text-background/70">
              <MapPin size={14} />
              <span className="font-mono-tech text-xs tracking-wide">{project.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="bg-foreground text-background">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {project.specs.map((spec, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <p className="font-mono-tech text-[10px] tracking-wider text-background/40">{spec.label}</p>
                <p className="font-mono-tech text-sm md:text-base text-primary mt-1">{spec.value}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">OVERVIEW</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">About This Project</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed max-w-lg">{project.description}</p>
              <div className="mt-6">
                <p className="font-mono-tech text-[10px] tracking-wider text-muted-foreground">ADDRESS</p>
                <p className="text-sm mt-1">{project.address}</p>
              </div>
              <div className="mt-4">
                <p className="font-mono-tech text-[10px] tracking-wider text-muted-foreground">RERA REG. NO.</p>
                <p className="text-sm mt-1">{project.rera}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">AMENITIES</span>
              <h3 className="text-xl font-bold mt-4 mb-6">What You Get</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.amenities.map((amenity, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-muted/50 hover:bg-primary/10 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                    <span className="text-sm">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Floorplan Morph Section */}
      <section className="bg-muted/30">
        <div className="container">
          <AnimatedSection className="pt-24 pb-8">
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">FLOORPLAN → ROOM VIEW</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Scroll to Explore
            </h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-lg">
              Watch the floorplan transform into a real room view as you scroll. This is how your space will feel.
            </p>
          </AnimatedSection>
        </div>

        <FloorplanMorph
          floorplanSvg={<FloorplanSVG />}
          roomImage={bedroomImg}
          roomLabel="Master Bedroom"
        />
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container text-left">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-balance max-w-2xl">
              Interested in {project.title}?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg">
              Schedule a private viewing or request the detailed brochure for this project.
            </p>
            <motion.button
              className="mt-8 w-full md:w-auto bg-primary text-primary-foreground px-12 py-5 font-mono-tech text-sm tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300 flex items-center justify-center gap-2"
              whileTap={{ scale: 0.96 }}
              onClick={() => setDrawerOpen(true)}
            >
              REQUEST PRIVATE VIEWING <ArrowRight size={16} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      <ContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </PageTransition>
  );
};

export default ProjectDetailPage;
