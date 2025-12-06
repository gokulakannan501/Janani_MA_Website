"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-300",
            scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4 text-white"
        )}>
            {/* Note: Logic for text color change based on scroll is tricky if hero is dark. 
          Assuming hero needs white text, but scrolled needs black. 
          Will add logic for that. */}

            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className={cn(
                    "text-2xl font-bold font-serif transition-colors",
                    scrolled ? "text-rose-500" : "text-white shadow-sm"
                )}>
                    Makeover Artistry
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "transition-colors font-medium hover:text-rose-500",
                                scrolled ? "text-gray-700" : "text-gray-100 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/booking">
                        <Button variant="primary" size="md" className={scrolled ? "" : "bg-white text-rose-500 hover:bg-gray-100"}>
                            Book Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className={cn("md:hidden transition-colors", scrolled ? "text-gray-700" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="text-gray-800" /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-0 left-0 w-full h-screen p-4 flex flex-col items-center justify-center gap-8 z-40">
                    <button
                        className="absolute top-6 right-4 text-gray-700"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={32} />
                    </button>

                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl text-gray-800 font-medium hover:text-rose-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/booking" onClick={() => setIsOpen(false)}>
                        <Button size="lg">Book Appointment</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
