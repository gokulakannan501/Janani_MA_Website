import { ServiceCard } from '@/components/features/ServiceCard';
import { services } from '@/data';

export default function ServicesPage() {
    return (
        <div className="pt-24 pb-20 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Services</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from a wide range of professional makeup and styling services tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Additional Info / Packages */}
                <div className="mt-20 bg-rose-50 rounded-2xl p-10 text-center">
                    <h2 className="text-2xl font-bold font-serif mb-4">Need a Custom Package?</h2>
                    <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
                        We offer customized packages for destination weddings, sangeet parties, and group bookings.
                        Contact us to discuss your requirements and get a personalized quote.
                    </p>
                    <a href="/contact" className="inline-block bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition-colors">
                        Contact for Custom Quote
                    </a>
                </div>
            </div>
        </div>
    );
}
