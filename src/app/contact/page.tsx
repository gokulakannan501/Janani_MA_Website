"use client";

import { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappMessage = `*New Inquiry via Website*
----------------
👤 *Name:* ${formData.name}
✉️ *Email:* ${formData.email}
📝 *Subject:* ${formData.subject}
💬 *Message:* ${formData.message}

_Sent via Website_`;

        const phoneNumber = '919865455825';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(url, '_blank');

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl font-bold font-serif mb-6">Get in Touch</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Have a question or want to book a consultation? Reach out to us directly or fill out the form.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="bg-rose-100 p-3 rounded-full text-rose-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Our Studio</h3>
                                    <p className="text-gray-600">123 Beauty Lane, Fashion District,<br />New Delhi, India 110001</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-rose-100 p-3 rounded-full text-rose-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                    <p className="text-gray-600">+91 98654 55825</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-rose-100 p-3 rounded-full text-rose-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-gray-600">hello@makeoverartistry.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-rose-500 hover:text-white transition-colors"><Instagram size={24} /></a>
                                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-rose-500 hover:text-white transition-colors"><Facebook size={24} /></a>
                                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-rose-500 hover:text-white transition-colors"><Twitter size={24} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold font-serif mb-6">Send a Message</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                                    required
                                ></textarea>
                            </div>
                            <Button type="submit" size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

