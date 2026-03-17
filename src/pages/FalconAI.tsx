import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Undo, Redo, ZoomIn, ZoomOut, Upload, Paintbrush,
    Bed, Lamp, MessageSquare, Share2, User, MoreHorizontal, Plus, ChevronLeft, Image as ImageIcon, Box, Trash2
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import falconLogo from "@/assets/falcon-logo.png";

type Floorplan = "3.5bhkA" | "3.5bhkB" | "3.5bhkC" | "4bhkA";

const floorplanImages: Record<Floorplan, string> = {
    "3.5bhkA": "/3halfbhkA.png",
    "3.5bhkB": "/3halfbhkB.png",
    "3.5bhkC": "/3halfbhkC.png",
    "4bhkA": "/4bhkA.png",
};

const CustomPoint = ({ top, left, label, onClick }: { top: string, left: string, label: string, onClick: () => void }) => (
    <motion.button
        className="absolute w-8 h-8 -ml-4 -mt-4 bg-white/90 backdrop-blur border border-emerald-900/20 text-emerald-900 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 hover:text-white transition-colors duration-300 z-10"
        style={{ top, left }}
        whileHover={{ scale: 1.2 }}
        onClick={onClick}
        title={`Customize ${label}`}
    >
        <Plus size={16} />
    </motion.button>
);

const FalconAI = () => {
    const query = new URLSearchParams(useLocation().search);
    const initialPlan = (query.get("plan") as Floorplan) || "3.5bhkA";

    const [scale, setScale] = useState(100);
    const [selectedPlan, setSelectedPlan] = useState<Floorplan>(initialPlan);
    const [activeTab, setActiveTab] = useState("Properties");
    const [activeItem, setActiveItem] = useState("Living Room");
    const [selectedTools, setSelectedTools] = useState("bed");

    const [customizationOpts, setCustomizationOpts] = useState([
        { id: 1, type: "Flooring", name: "Italian Marble", color: "#f8f9fa", cost: "Included" },
        { id: 2, type: "Flooring", name: "Wooden Texture", color: "#8b5a2b", cost: "+₹1,15,000" },
        { id: 3, type: "Curtains", name: "Emerald Velvet", color: "#064e3b", cost: "+₹45,000" },
    ]);

    const markers = [
        { top: "35%", left: "40%", label: "Living Area" },
        { top: "60%", left: "70%", label: "Master Bedroom" },
        { top: "25%", left: "20%", label: "Kitchen" },
        { top: "75%", left: "30%", label: "Balcony" },
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-hidden max-h-screen">

                {/* TOP BAR */}
                <header className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between shadow-sm z-20">
                    <div className="flex items-center gap-6">
                        <Link to="/projects/falcon-tatva" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <ChevronLeft size={20} className="text-emerald-900" />
                            <img src={falconLogo} alt="Falcon Tatva" className="h-8 brightness-0" />
                            <span className="text-sm font-semibold text-emerald-900 uppercase tracking-widest hidden md:block">Studio</span>
                        </Link>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-slate-800">Interior Customizer</span>
                            <span className="text-xs text-slate-400">/ {selectedPlan} layout</span>
                            <button className="text-slate-400 hover:text-emerald-900"><MoreHorizontal size={16} /></button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-100 rounded-full p-1 text-xs font-semibold mr-4">
                            <button className="px-3 py-1 bg-white text-emerald-900 rounded-full shadow-sm">2D</button>
                            <button className="px-3 py-1 text-slate-500 hover:text-emerald-900">3D</button>
                        </div>
                        <button className="hidden sm:flex items-center gap-2 text-sm font-medium bg-emerald-900 text-gold-500 hover:bg-emerald-800 px-4 py-2 rounded-full transition-colors text-yellow-500">
                            <Share2 size={16} /> SHARE
                        </button>
                        <div className="w-8 h-8 bg-gold-100 text-yellow-700 bg-yellow-100 rounded-full flex items-center justify-center">
                            <User size={16} />
                        </div>
                    </div>
                </header>

                {/* MAIN WORKSPACE */}
                <div className="flex flex-1 overflow-hidden relative">

                    {/* LEFT SIDEBAR (TOOLS) */}
                    <aside className="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-6 z-10 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
                        {[
                            { id: 'image', icon: ImageIcon, label: "Floorplan" },
                            { id: 'paint', icon: Paintbrush, label: "Colors" },
                            { id: 'box', icon: Box, label: "Structure" },
                            { id: 'bed', icon: Bed, label: "Furniture" },
                            { id: 'lamp', icon: Lamp, label: "Lighting" },
                            { id: 'upload', icon: Upload, label: "Upload" }
                        ].map(tool => (
                            <button
                                key={tool.id}
                                onClick={() => setSelectedTools(tool.id)}
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${selectedTools === tool.id
                                        ? "bg-emerald-900 text-yellow-500 shadow-md transform scale-110"
                                        : "text-slate-400 hover:bg-slate-100 hover:text-emerald-900"
                                    }`}
                                title={tool.label}
                            >
                                <tool.icon size={22} />
                            </button>
                        ))}
                    </aside>

                    {/* CANVAS AREA */}
                    <main className="flex-1 relative overflow-hidden bg-[url('/cloth-texture.png')] bg-cover bg-center flex items-center justify-center">

                        {/* View Controls */}
                        <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur p-2 rounded-xl shadow-sm border border-slate-200 z-10">
                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"><Undo size={18} /></button>
                            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"><Redo size={18} /></button>
                            <div className="w-px h-6 bg-slate-300 mx-2" />
                            <button onClick={() => setScale(s => Math.max(50, s - 10))} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"><ZoomOut size={18} /></button>
                            <span className="text-sm font-medium w-12 text-center text-slate-700">{scale}%</span>
                            <button onClick={() => setScale(s => Math.min(200, s + 10))} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"><ZoomIn size={18} /></button>
                        </div>

                        {/* Render Canvas */}
                        <motion.div
                            className="relative w-full max-w-4xl aspect-[4/3]"
                            animate={{ scale: scale / 100 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Fake 3D projection wrapper */}
                            <div className="absolute inset-0 preserve-3d transform rotate-x-[50deg] rotate-z-[-20deg] hover:rotate-x-[45deg] hover:rotate-z-[-15deg] transition-transform duration-1000 ease-out origin-center">
                                <img
                                    src={floorplanImages[selectedPlan]}
                                    alt="Floorplan"
                                    className="w-full h-full object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)] filter contrast-125"
                                />

                                {/* Interactive Markers projected onto plan */}
                                {markers.map((m, i) => (
                                    <CustomPoint key={i} top={m.top} left={m.left} label={m.label} onClick={() => setActiveItem(m.label)} />
                                ))}

                            </div>

                            {/* Rotation Handle */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
                                <div className="w-64 h-16 rounded-full border-b-2 border-emerald-900 border-dashed" />
                                <div className="bg-white px-4 py-1 rounded-full shadow-md text-xs font-bold text-emerald-900 flex items-center gap-2 cursor-ew-resize">
                                    ⟷ 360° Drag
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom floating bar */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-slate-900/90 backdrop-blur-md rounded-2xl p-2 shadow-2xl z-20">
                            <button className="flex items-center gap-2 text-white/80 hover:text-white px-4 py-2 rounded-xl hover:bg-white/10 transition-colors text-sm">
                                <MessageSquare size={16} /> Comments
                            </button>
                            <div className="w-px h-6 bg-white/20 mx-2" />
                            <button className="flex items-center gap-2 text-yellow-500 font-medium px-4 py-2 rounded-xl hover:bg-white/10 transition-colors text-sm">
                                <Plus size={16} /> Add Custom Image
                            </button>
                        </div>

                    </main>

                    {/* RIGHT SIDEBAR (PROPERTIES) */}
                    <aside className="w-80 bg-white border-l border-slate-200 flex flex-col shadow-[-4px_0_24px_-12px_rgba(0,0,0,0.1)] z-10">
                        {/* Tabs */}
                        <div className="flex border-b border-slate-200">
                            {['Properties', 'Rooms', 'Quotation'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-4 text-xs font-bold tracking-wider uppercase transition-colors ${activeTab === tab ? "text-emerald-900 border-b-2 border-emerald-900" : "text-slate-400 hover:text-slate-600"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
                            {/* Selector */}
                            <div>
                                <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Select Plan</h3>
                                <select
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 appearance-none"
                                    value={selectedPlan}
                                    onChange={(e) => setSelectedPlan(e.target.value as Floorplan)}
                                >
                                    <option value="3.5bhkA">3.5 BHK - Type A</option>
                                    <option value="3.5bhkB">3.5 BHK - Type B</option>
                                    <option value="3.5bhkC">3.5 BHK - Type C</option>
                                    <option value="4bhkA">4 BHK - Type A</option>
                                </select>
                            </div>

                            {/* Options list */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">Customizations - {activeItem}</h3>
                                    <button className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-900 flex items-center justify-center hover:bg-emerald-100"><Plus size={14} /></button>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {customizationOpts.map((opt) => (
                                        <div key={opt.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50 hover:border-emerald-900/30 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full border border-slate-200 shadow-inner" style={{ backgroundColor: opt.color }} />
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-800">{opt.name}</p>
                                                    <p className="text-xs text-slate-400">{opt.type}</p>
                                                </div>
                                            </div>
                                            <div className="text-xs font-medium text-emerald-900">{opt.cost}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI generator prompt */}
                            <div className="mt-auto">
                                <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 rounded-2xl shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl -mr-16 -mt-16" />
                                    <h3 className="text-white font-bold mb-2 flex items-center gap-2 relative z-10"><Paintbrush size={16} className="text-yellow-500" /> AI Style Prompt</h3>
                                    <textarea
                                        className="w-full bg-white/10 text-white placeholder:text-white/40 border border-white/20 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 resize-none h-24 relative z-10"
                                        placeholder="E.g., Make the living room minimalist with Scandinavian wood furniture..."
                                    />
                                    <button className="w-full mt-3 bg-yellow-500 text-emerald-950 hover:bg-yellow-400 font-bold py-2.5 rounded-xl transition-colors shadow-md relative z-10 text-sm">
                                        Generate Variation
                                    </button>
                                </div>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </PageTransition>
    );
};

export default FalconAI;
