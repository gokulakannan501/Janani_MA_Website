import { TestimonialCard } from '@/components/features/TestimonialCard';
import { testimonials } from '@/data';

export default function TestimonialsPage() {
    return (
        <div className="pt-24 pb-20 bg-amber-50/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Client Love</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Read kind words from our beautiful clients who trusted us with their special days.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                    {/* Duplicating for demo since data is small */}
                    {testimonials.map(testimonial => (
                        <TestimonialCard key={`${testimonial.id}-dup`} testimonial={{ ...testimonial, id: `${testimonial.id}-dup` }} />
                    ))}
                </div>
            </div>
        </div>
    );
}
