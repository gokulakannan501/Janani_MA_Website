import { BookingForm } from '@/components/features/BookingForm';

export default function BookingPage() {
    return (
        <div className="pt-24 pb-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">Book Your Appointment</h1>
                        <p className="text-gray-600">
                            Fill out the form below to request a booking. We will get back to you within 24 hours to confirm availability and discuss details.
                        </p>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </div>
    );
}
