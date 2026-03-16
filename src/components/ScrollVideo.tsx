import { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface ScrollVideoProps {
  src: string;
  className?: string;
}

const ScrollVideo = ({ src, className = "" }: ScrollVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Wait for metadata to load
    const handleLoaded = () => {
      const duration = video.duration;
      if (!duration || !isFinite(duration)) return;

      const unsubscribe = scrollYProgress.on("change", (progress) => {
        // Map scroll progress to video time
        const time = progress * Math.min(duration, 30); // Cap at 30s
        if (isFinite(time)) {
          video.currentTime = time;
        }
      });

      return unsubscribe;
    };

    if (video.readyState >= 1) {
      const unsub = handleLoaded();
      return () => unsub?.();
    }

    let unsub: (() => void) | undefined;
    const onLoadedMetadata = () => {
      unsub = handleLoaded();
    };
    video.addEventListener("loadedmetadata", onLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      unsub?.();
    };
  }, [scrollYProgress]);

  return (
    <motion.div ref={containerRef} className={className} style={{ scale }}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-foreground/40"
        style={{ opacity }}
      />
    </motion.div>
  );
};

export default ScrollVideo;
