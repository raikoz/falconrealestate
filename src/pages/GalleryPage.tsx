import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import interiorImg from "@/assets/interior-living.jpg";
import heroImg from "@/assets/hero-building.jpg";
import bedroomImg from "@/assets/room-bedroom.jpg";
import tatvaImg from "@/assets/project-tatva.jpg";
import harmonyImg from "@/assets/project-harmony.jpg";
import hubImg from "@/assets/project-hub.jpg";

const images = [
  { src: interiorImg, label: "Reception Hall" },
  { src: heroImg, label: "Exterior View" },
  { src: bedroomImg, label: "Master Bedroom" },
  { src: tatvaImg, label: "Falcon Tatva" },
  { src: harmonyImg, label: "JSP Harmony" },
  { src: hubImg, label: "The Hub" },
];

type TabType = "images" | "video" | "media";

const GalleryPage = () => {
  const [tab, setTab] = useState<TabType>("images");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <PageTransition>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <AnimatedSection>
            <span className="font-mono-tech text-xs tracking-[0.2em] text-muted-foreground">GALLERY</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-balance">
              A Visual Journey
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-8 sticky top-16 md:top-20 z-30 bg-background/80 backdrop-blur-md">
        <div className="container">
          <div className="flex gap-2">
            {(["images", "video", "media"] as TabType[]).map((t) => (
              <motion.button
                key={t}
                onClick={() => setTab(t)}
                className={`font-mono-tech text-xs tracking-wider px-6 py-2.5 rounded-full transition-colors duration-300 ${
                  tab === t
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-foreground/10"
                }`}
                whileTap={{ scale: 0.96 }}
              >
                {t.toUpperCase()}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <AnimatePresence mode="wait">
            {tab === "images" && (
              <motion.div
                key="images"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(i)}
                    whileHover={{ y: -4 }}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 ease-arch group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-arch">
                      <span className="font-mono-tech text-xs text-background tracking-wider">{img.label.toUpperCase()}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {tab === "video" && (
              <motion.div
                key="video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-center py-20"
              >
                <p className="font-mono-tech text-sm text-muted-foreground">VIDEO CONTENT COMING SOON</p>
              </motion.div>
            )}
            {tab === "media" && (
              <motion.div
                key="media"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex items-center justify-center py-20"
              >
                <p className="font-mono-tech text-sm text-muted-foreground">MEDIA CORNER COMING SOON</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].label}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <span className="font-mono-tech text-xs text-background/70 tracking-wider">
                {images[selectedImage].label.toUpperCase()} — {selectedImage + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default GalleryPage;
