import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FootMotion = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const totalFrames = 151;

    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(totalFrames).fill(null));
    const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

    useEffect(() => {
        // Preload all frames
        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const paddedNum = i.toString().padStart(3, "0");
            img.src = `/FootMotion/ezgif-frame-${paddedNum}.png`;
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

        let img = imagesRef.current[index - 1];
        if (!img) {
            for (let i = index - 1; i >= 0; i--) {
                if (imagesRef.current[i]) {
                    img = imagesRef.current[i];
                    break;
                }
            }
        }
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

            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scaledW = img.width * ratio;
            const scaledH = img.height * ratio;

            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                (canvas.width - scaledW) / 2,
                (canvas.height - scaledH) / 2,
                scaledW,
                scaledH
            );
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

    return (
        <section ref={containerRef} className="relative h-[250vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black z-0 flex items-center justify-center">
                {!firstFrameLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-slate-300 border-t-white rounded-full animate-spin"></div>
                    </div>
                )}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default FootMotion;
