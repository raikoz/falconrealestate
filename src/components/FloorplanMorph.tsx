import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FloorplanMorphProps {
  floorplanSvg: React.ReactNode;
  roomImage: string;
  roomLabel: string;
}

const FloorplanMorph = ({ floorplanSvg, roomImage, roomLabel }: FloorplanMorphProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const floorplanOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const floorplanScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 1.2]);
  const photoOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const photoScale = useTransform(scrollYProgress, [0.4, 0.6], [0.95, 1]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl aspect-video">
          {/* Floorplan Layer */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: floorplanOpacity, scale: floorplanScale }}
          >
            {floorplanSvg}
          </motion.div>

          {/* Room Photo Layer */}
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden"
            style={{ opacity: photoOpacity, scale: photoScale }}
          >
            <img
              src={roomImage}
              alt={roomLabel}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6">
              <span className="font-mono-tech text-xs tracking-wider bg-primary text-primary-foreground px-4 py-2">
                {roomLabel.toUpperCase()}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FloorplanMorph;
