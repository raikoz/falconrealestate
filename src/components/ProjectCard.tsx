import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  rera?: string;
  status: "ongoing" | "completed" | "upcoming";
  slug: string;
  index: number;
  href?: string;
}

const ProjectCard = ({ title, location, image, rera, status, slug, index, href }: ProjectCardProps) => {
  const isExternal = !!href;

  const content = (
    <motion.div
      className="relative overflow-hidden bg-background shadow-card transition-shadow duration-500"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
      style={{ perspective: 1000 }}
    >
      {/* Image with 3D tilt on hover */}
      <motion.div
        className="relative aspect-[4/3] overflow-hidden"
        whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-arch group-hover:scale-110"
          loading="lazy"
        />
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`font-mono-tech text-xs tracking-wider px-3 py-1.5 rounded-sm ${status === "ongoing"
              ? "bg-primary text-primary-foreground"
              : status === "completed"
                ? "bg-foreground text-background"
                : "bg-background text-foreground"
            }`}>
            {status.toUpperCase()}
          </span>
        </div>
      </motion.div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
            <p className="font-mono-tech text-xs text-muted-foreground mt-1">{location}</p>
          </div>
          <motion.div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary-foreground">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
        {rera && (
          <p className="font-mono-tech text-[10px] text-muted-foreground/60 mt-3 tracking-wide">
            RERA: {rera}
          </p>
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0, 0, 1] }}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
          {content}
        </a>
      ) : (
        <Link to={`/projects/${slug}`} className="group block">
          {content}
        </Link>
      )}
    </motion.div>
  );
};

export default ProjectCard;
