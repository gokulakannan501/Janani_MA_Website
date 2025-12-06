import { Testimonial } from '@/types';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    {testimonial.image && (
                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
                </div>
            </div>
            <div className="flex text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "" : "text-gray-300"} />
                ))}
            </div>
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
        </div>
    );
}
