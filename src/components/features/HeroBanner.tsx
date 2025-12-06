"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=2000"
          alt="Makeup Artistry"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight"
        >
          Enhancing Your <span className="text-rose-400">Natural</span> Beauty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl md:max-w-2xl mx-auto mb-10 text-gray-200"
        >
          Professional makeup artistry for weddings, events, and editorials.
          Experience luxury and perfection with every brush stroke.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/booking">
            <Button size="lg" className="px-8 py-6 text-lg">Book Appointment</Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-stone-900">
              View Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
