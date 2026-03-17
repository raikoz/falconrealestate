import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const floorplans = [
    { id: "3.5bhkA", title: "3.5 BHK - Type A", img: "/3halfbhkA.png" },
    { id: "3.5bhkB", title: "3.5 BHK - Type B", img: "/3halfbhkB.png" },
    { id: "3.5bhkC", title: "3.5 BHK - Type C", img: "/3halfbhkC.png" },
    { id: "4bhkA", title: "4 BHK - Type A", img: "/4bhkA.png" },
];

export default function FloorplansSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <span className="text-primary tracking-widest uppercase text-sm font-semibold">Customize Your Home</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                        Exquisite Floorplans
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Click on any floorplan to launch our Falcon AI suite and instantly experiment with different interiors, colors, and furnishings.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {floorplans.map((plan, i) => (
                        <Link to={`/falcon-ai?plan=${plan.id}`} key={i}>
                            <motion.div
                                className="group relative cursor-pointer"
                                style={{ perspective: 1200 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="bg-gray-50/80 backdrop-blur border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center">
                                    <div className="absolute top-6 right-6 z-10 bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-4 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 backdrop-blur-sm">
                                        Customize via AI ✨
                                    </div>
                                    <h3 className="text-xl font-bold mb-8 text-center text-gray-800 group-hover:text-primary transition-colors">
                                        {plan.title}
                                    </h3>
                                    <motion.div
                                        className="w-full aspect-video flex items-center justify-center transform-style-3d"
                                        whileHover={{ rotateX: 10, rotateY: -10, translateZ: 50 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    >
                                        <img
                                            src={plan.img}
                                            alt={plan.title}
                                            className="w-full h-full object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 drop-shadow-sm group-hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
