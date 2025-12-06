import { Service } from '@/types';
import Image from 'next/image';
import { Clock, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-serif text-gray-900">{service.title}</h3>
                    <span className="bg-rose-100 text-rose-800 text-sm font-semibold px-3 py-1 rounded-full">
                        ₹{service.price}
                    </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Clock size={16} className="mr-1" />
                    <span>{service.duration}</span>
                </div>

                <ul className="mb-6 space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                            <Check size={16} className="text-rose-500 mr-2 mt-0.5 shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <Link href={`/booking?service=${service.id}`} className="block">
                    <Button className="w-full">Book Now</Button>
                </Link>
            </div>
        </div>
    );
}
