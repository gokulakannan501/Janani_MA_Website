"use client";

import { useState } from 'react';
import { portfolioItems } from '@/data';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioPage() {
    const [filter, setFilter] = useState<'All' | 'Bridal' | 'Party' | 'Fashion' | 'Photoshoot'>('All');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Portfolio</h1>
                    <p className="text-lg text-gray-600">A collection of our finest transformations.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['All', 'Bridal', 'Party', 'Fashion'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category as any)}
                            className={cn(
                                "px-6 py-2 rounded-full border transition-all duration-300",
                                filter === category
                                    ? "bg-rose-500 text-white border-rose-500"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:text-rose-500"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredItems.map(item => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedImage(item.imageAfter)}
                            >
                                <div className="aspect-[3/4] relative rounded-xl overflow-hidden bg-gray-100">
                                    <Image
                                        src={item.imageAfter}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white border border-white px-6 py-2 rounded-full uppercase tracking-wider text-sm">View</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-6 right-6 text-white hover:text-rose-500 transition-colors">
                        <X size={40} />
                    </button>
                    <div className="relative w-full max-w-4xl h-[80vh]">
                        <Image
                            src={selectedImage}
                            alt="Portfolio Full"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
