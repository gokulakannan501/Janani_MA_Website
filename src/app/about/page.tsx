import Image from 'next/image';
import { Award, Calendar, Heart } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">About The Artist</h1>
                    <div className="h-1 w-20 bg-rose-500 mx-auto rounded-full"></div>
                </div>

                {/* Bio Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000" // Placeholder
                            alt="Makeup Artist"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-serif mb-6 text-gray-900">Janani - Professional Makeup Artist</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            With over 5 years of experience in the beauty industry, I have dedicated my career to helping individuals discover and enhance their natural beauty. My philosophy is simple: makeup should not mask who you are, but rather celebrate your unique features.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Specializing in bridal, editorial, and event makeup, I bring a blend of artistic vision and technical precision to every appointment. I use only premium, high-quality products to ensure a flawless, long-lasting finish that looks as good in person as it does on camera.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-rose-100 p-3 rounded-full text-rose-600">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <span className="block font-bold text-xl">5+</span>
                                    <span className="text-sm text-gray-500">Years Experience</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-rose-100 p-3 rounded-full text-rose-600">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <span className="block font-bold text-xl">500+</span>
                                    <span className="text-sm text-gray-500">Happy Brides</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="bg-stone-50 rounded-2xl p-10 md:p-16">
                    <h2 className="text-3xl font-bold font-serif text-center mb-12">Certifications & Awards</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center transition-transform hover:-translate-y-1 duration-300">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Master Bridal Certification</h3>
                            <p className="text-gray-500">London School of Makeup</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center transition-transform hover:-translate-y-1 duration-300">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Best Emerging Artist 2023</h3>
                            <p className="text-gray-500">Beauty Excellence Awards</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center transition-transform hover:-translate-y-1 duration-300">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Airbrush Pro Tech</h3>
                            <p className="text-gray-500">Temptu Certified</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
