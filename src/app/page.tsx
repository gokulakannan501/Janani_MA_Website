import { HeroBanner } from '@/components/features/HeroBanner';
import { ServiceCard } from '@/components/features/ServiceCard';
import { TestimonialCard } from '@/components/features/TestimonialCard';
import { Button } from '@/components/ui/button';
import { services, testimonials, portfolioItems } from '@/data';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredPortfolio = portfolioItems.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored makeover packages for your special moments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Portfolio</h2>
              <p className="text-gray-600">See the transformations.</p>
            </div>
            <Link href="/portfolio" className="hidden md:block">
              <Button variant="ghost">View Full Gallery &rarr;</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPortfolio.map(item => (
              <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200">
                <Image
                  src={item.imageAfter}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-rose-400 text-sm font-medium mb-1">{item.category}</span>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio">
              <Button variant="outline">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center mb-16">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Ready to look your best?</h2>
          <p className="text-rose-100 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment today and let us create the perfect look for your special occasion.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-10 py-6 text-xl shadow-lg border-2 border-transparent hover:border-white">
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
