import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

import page1 from "@/assets/brochure/page_1.jpg";
import page2 from "@/assets/brochure/page_2.jpg";
import page3 from "@/assets/brochure/page_3.jpg";
import page4 from "@/assets/brochure/page_4.jpg";
import page5 from "@/assets/brochure/page_5.jpg";
import page6 from "@/assets/brochure/page_6.jpg";
import page7 from "@/assets/brochure/page_7.jpg";
import page8 from "@/assets/brochure/page_8.jpg";
import page9 from "@/assets/brochure/page_9.jpg";
import page10 from "@/assets/brochure/page_10.jpg";
import page11 from "@/assets/brochure/page_11.jpg";
import page12 from "@/assets/brochure/page_12.jpg";

const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12];

const BrochureSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="brochure" className="py-24 bg-emerald-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Explore
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold gold-gradient-text mb-4">
            Brochure Preview
          </h2>
          <div className="section-divider mb-6" />
          <a
            href="/Tatva_Brochure.pdf"
            download="Falcon_Tatva_Brochure.pdf"
            className="inline-flex items-center gap-2 gold-gradient-bg text-primary-foreground font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm tracking-wide"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD BROCHURE
          </a>
        </motion.div>
      </div>

      {/* Full-width horizontal scroll */}
      <div className="relative group">
        {/* Navigation arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass-card-strong p-3 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass-card-strong p-3 rounded-full text-primary opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {pages.map((page, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex-shrink-0 snap-center"
            >
              <div className="glass-card overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={page}
                  alt={`Brochure page ${i + 1}`}
                  className="h-[60vh] md:h-[75vh] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
