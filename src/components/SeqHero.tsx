import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

interface SeqHeroProps {
    className?: string;
    totalFrames?: number;
    onEnquire?: () => void;
}

const SeqHero = ({ className = "", totalFrames = 153, onEnquire }: SeqHeroProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Using ref for images to avoid unnecessary re-renders
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(totalFrames).fill(null));
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    useEffect(() => {
        // Preload all frames
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const paddedNum = i.toString().padStart(3, "0");
            img.src = `/SeqHero/ezgif-frame-${paddedNum}.png`;
            img.onload = () => {
                imagesRef.current[i - 1] = img;
                if (i === 1) {
                    setFirstFrameLoaded(true);
                }
            };
        }
    }, [totalFrames]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        // Find the nearest loaded frame if current isn't loaded yet
        let img = imagesRef.current[index - 1];
        if (!img) {
            // Find closest loaded frame backwards
            for (let i = index - 1; i >= 0; i--) {
                if (imagesRef.current[i]) {
                    img = imagesRef.current[i];
                    break;
                }
            }
        }

        // If still no image (e.g. scrolling up very fast before load), try forwards
        if (!img) {
            for (let i = index; i < totalFrames; i++) {
                if (imagesRef.current[i]) {
                    img = imagesRef.current[i];
                    break;
                }
            }
        }

        if (canvas && ctx && img) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;

            const rotatedWidth = img.height;
            const rotatedHeight = img.width;

            const hRatio = canvas.width / rotatedWidth;
            const vRatio = canvas.height / rotatedHeight;
            const ratio = Math.max(hRatio, vRatio) * 1.5; // Scale up a bit for better fit

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((90 * Math.PI) / 180);

            const scaledW = img.width * ratio;
            const scaledH = img.height * ratio;

            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                -scaledW / 2,
                -scaledH / 2,
                scaledW,
                scaledH
            );
            ctx.restore();
        }
    };

    useEffect(() => {
        if (firstFrameLoaded) {
            const index = Math.min(Math.max(Math.floor(frameIndex.get()), 1), totalFrames);
            renderFrame(index);
        }

        const unsubscribe = frameIndex.on("change", (latestVal) => {
            const currentFrame = Math.min(
                Math.max(Math.floor(latestVal), 1),
                totalFrames
            );
            renderFrame(currentFrame);
        });

        return () => unsubscribe();
    }, [firstFrameLoaded, frameIndex, totalFrames]);

    useEffect(() => {
        const handleResize = () => {
            const index = Math.min(Math.max(Math.floor(frameIndex.get()), 1), totalFrames);
            renderFrame(index);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [frameIndex, totalFrames]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        try {
            await fetch("https://hook.eu2.make.com/39p6yxtz4qj2owwwy04w5e2o14x55g3v", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
                mode: "no-cors"
            });
            setTimeout(() => {
                setFormStatus("success");
            }, 1000);
        } catch {
            setFormStatus("success");
        }
    };

    return (
        <>
            <section ref={containerRef} className={`relative h-[250vh] ${className}`}>
                <div
                    className="sticky top-0 h-screen w-full overflow-hidden z-0 bg-slate-100"
                >
                    <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">

                        {/* Left side text */}
                        <motion.div
                            className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center p-8 md:p-16"
                            style={{ opacity: textOpacity, y: textY }}
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6, ease: [0.2, 0, 0, 1] }}
                                className="font-mono-tech text-xs md:text-sm tracking-[0.2em] text-black/60 mb-4"
                            >
                                01 / FALCON REAL ESTATE
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0, 0, 1] }}
                                className="text-5xl md:text-6xl lg:text-8xl font-black text-black text-balance leading-[1.05]"
                            >
                                Precision in Every
                                <br />
                                <span className="text-primary italic font-serif">Square Foot.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7, duration: 0.6, ease: [0.2, 0, 0, 1] }}
                                className="text-black/80 mt-6 max-w-lg text-sm md:text-lg leading-relaxed font-light"
                            >
                                Crafting not just luxury homes, but a legacy of love and togetherness across Eastern India.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                className="flex flex-wrap gap-4 mt-10"
                            >
                                <a href="/projects">
                                    <motion.button
                                        className="bg-black text-white px-8 py-4 font-mono-tech text-xs tracking-wider hover:bg-black/80 transition-colors duration-300 flex items-center gap-2"
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        VIEW PROJECTS
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-right"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </a>
                                <motion.button
                                    className="bg-primary/10 border border-primary text-primary px-8 py-4 font-mono-tech text-xs tracking-wider hover:bg-primary hover:text-white transition-colors duration-300 backdrop-blur-sm"
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => setIsFormOpen(true)}
                                >
                                    ENQUIRE NOW
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right side Canvas */}
                        <div className="w-full md:w-1/2 h-full absolute md:relative right-0 pointer-events-none opacity-40 md:opacity-100 mix-blend-multiply md:mix-blend-normal z-0 flex items-center justify-center overflow-hidden">
                            {!firstFrameLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 border-4 border-slate-300 border-t-emerald-900 rounded-full animate-spin"></div>
                                </div>
                            )}
                            <canvas
                                ref={canvasRef}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Fractal Glass Enquiry Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsFormOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="relative w-full max-w-md bg-white/20 border border-white/40 p-8 rounded-3xl shadow-2xl backdrop-blur-2xl overflow-hidden glass mix-blend-normal"
                        >
                            {/* Fractal light effects */}
                            <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/40 rounded-full blur-3xl mix-blend-screen opacity-50" />
                            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-emerald-300/40 rounded-full blur-3xl mix-blend-screen opacity-50" />

                            <div className="relative z-10 flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-black drop-shadow-sm">Enquiry</h3>
                                    <button onClick={() => setIsFormOpen(false)} className="text-black/60 hover:text-black transition-colors">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                    </button>
                                </div>

                                {formStatus === "success" ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                                        </div>
                                        <p className="text-black font-semibold text-lg drop-shadow-sm">Thanks for enquiring!</p>
                                        <p className="text-black/70 text-sm mt-2">We will get back to you soon.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <input type="text" placeholder="Full Name" required
                                            className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                                        <input type="email" placeholder="Email Address" required
                                            className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                                        <input type="tel" placeholder="Phone Number" required
                                            className="w-full px-4 py-3 rounded-xl bg-white/40 border border-white/50 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                                            value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

                                        <button type="submit" disabled={formStatus === "submitting"}
                                            className="mt-2 w-full bg-black/80 hover:bg-black text-white px-4 py-4 rounded-xl font-bold tracking-wide transition-all uppercase text-sm shadow-xl flex justify-center items-center">
                                            {formStatus === "submitting" ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : "Submit Details"}
                                        </button>
                                        <p className="text-center text-xs text-black/40 mt-2">
                                            Saved securely via Webhook / GSheets.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SeqHero;
