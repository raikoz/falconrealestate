import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import tatvaImg from "@/assets/project-tatva.jpg";
import harmonyImg from "@/assets/project-harmony.jpg";
import hubImg from "@/assets/project-hub.jpg";
import crestImg from "@/assets/project-crest.jpg";
import residencyImg from "@/assets/project-residency.jpg";

const allProjects = [
  {
    title: "Falcon Tatva",
    location: "Dumduma Khandgiri, Bhubaneswar",
    image: tatvaImg,
    rera: "RP/19/2023/00922",
    status: "ongoing" as const,
    slug: "falcon-tatva",
    href: "https://falcontatva.vercel.app/"
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
  {
    title: "Falcon Crest",
    location: "Shampur, Bhubaneswar",
    image: crestImg,
    status: "completed" as const,
    slug: "falcon-crest",
  },
  {
    title: "Falcon Residency",
    location: "Patia, Bhubaneswar",
    image: residencyImg,
    status: "completed" as const,
    slug: "falcon-residency",
  },
  {
    title: "Residential Township",
    location: "Puri",
    image: tatvaImg,
    status: "upcoming" as const,
    slug: "residential-puri",
  },
  {
    title: "Commercial Complex",
    location: "Janpath, Bhubaneswar",
    image: harmonyImg,
    status: "upcoming" as const,
    slug: "commercial-janpath",
  },
];

type FilterType = "all" | "ongoing" | "completed" | "upcoming";

const filters: { label: string; value: FilterType }[] = [
  { label: "ALL", value: "all" },
  { label: "ONGOING", value: "ongoing" },
  { label: "COMPLETED", value: "completed" },
  { label: "UPCOMING", value: "upcoming" },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = filter === "all" ? allProjects : allProjects.filter((p) => p.status === filter);

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">OUR PROJECTS</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-balance">
              Building Tomorrow's<br />
              <span className="text-primary-dark">Landmarks Today</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8 sticky top-16 md:top-20 z-30 bg-background/80 backdrop-blur-md">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {filters.map((f) => (
              <motion.button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`font-mono-tech text-xs tracking-wider px-6 py-2.5 rounded-full whitespace-nowrap transition-colors duration-300 ${filter === f.value
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-foreground/10"
                  }`}
                whileTap={{ scale: 0.96 }}
              >
                {f.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} {...project} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-mono-tech text-sm text-muted-foreground">NO PROJECTS FOUND</p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectsPage;
