"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { services } from '@/data';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        serviceId: '',
        guests: 1,
        notes: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate processing for UX
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Construct WhatsApp Message
            const serviceName = services.find(s => s.id === formData.serviceId)?.title || 'Custom Service';
            const message = `*New Booking Request*
----------------
👤 *Name:* ${formData.name}
📅 *Date:* ${formData.date}
💄 *Service:* ${serviceName}
👥 *Guests:* ${formData.guests}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
📝 *Notes:* ${formData.notes || 'None'}

_Sent via Website_`;

            // WhatsApp Business Number
            const phoneNumber = '919865455825';
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');

            setStatus('success');
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-10 bg-green-50 rounded-2xl border border-green-100"
            >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-4">Booking Request Sent!</h2>
                <p className="text-green-700 mb-8">
                    Thank you for exploring our services. We have received your request and will contact you shortly to confirm availability.
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
                    Book Another
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium text-gray-700">Event Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="serviceId" className="text-sm font-medium text-gray-700">Service Type</label>
                    <select
                        name="serviceId"
                        id="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                        required
                    >
                        <option value="">Select a service...</option>
                        {services.map(service => (
                            <option key={service.id} value={service.id}>{service.title} - ₹{service.price}</option>
                        ))}
                        <option value="custom">Custom Package</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="guests" className="text-sm font-medium text-gray-700">Number of People</label>
                    <input
                        type="number"
                        name="guests"
                        id="guests"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium text-gray-700">Additional Notes (Optional)</label>
                <textarea
                    name="notes"
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tell us more about the event, theme, or specific requirements..."
                ></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                    <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                    </span>
                ) : 'Submit Booking Request'}
            </Button>

            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle size={20} />
                    <p>Something went wrong. Please try again or call us directly.</p>
                </div>
            )}
        </form>
    );
}
