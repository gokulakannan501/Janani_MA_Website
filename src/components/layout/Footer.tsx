import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-serif font-bold text-rose-500 mb-4">Makeover Artistry</h2>
                        <p className="text-gray-400 mb-6">
                            Empowering beauty and confidence through professional artistry. Specialized in bridal, party, and editorial makeup.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-rose-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-rose-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-rose-500 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-rose-500 transition-colors">About Me</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-rose-500 transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-rose-500 transition-colors">Portfolio</Link></li>
                            <li><Link href="/testimonials" className="text-gray-400 hover:text-rose-500 transition-colors">Testimonials</Link></li>
                            <li><Link href="/booking" className="text-gray-400 hover:text-rose-500 transition-colors">Book Now</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Styles</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400">Bridal Makeup</li>
                            <li className="text-gray-400">Party Glam</li>
                            <li className="text-gray-400">Editorial Shoots</li>
                            <li className="text-gray-400">Hairstyling</li>
                            <li className="text-gray-400">Saree Draping</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-rose-500 shrink-0" size={20} />
                                <span>123 Beauty Lane, Fashion District,<br />New Delhi, India 110001</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-rose-500 shrink-0" size={20} />
                                <span>+91 98654 55825</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-rose-500 shrink-0" size={20} />
                                <span>hello@makeoverartistry.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Makeover Artistry. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
