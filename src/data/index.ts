import { Service, Testimonial, PortfolioItem } from '@/types';

export const services: Service[] = [
    {
        id: '1',
        title: 'Bridal Makeup',
        description: 'Complete bridal makeover including hair styling, draping, and premium makeup application.',
        price: 15000,
        duration: '3-4 Hours',
        image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80',
        features: ['Premium Products (MAC, Huda Beauty)', 'Hair Styling & Accessory Setting', 'Saree/Dupatta Draping', 'Lashes & Lenses included']
    },
    {
        id: '2',
        title: 'Party Makeup',
        description: 'Glamorous look for receptions, parties, or special occasions.',
        price: 5000,
        duration: '1-2 Hours',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80',
        features: ['Long-lasting base', 'Eye makeup focus', 'Hair styling included']
    },
    {
        id: '3',
        title: 'Editorial & Fashion',
        description: 'High-definition makeup for photoshoots, fashion shows, and portfolios.',
        price: 8000,
        duration: '2-3 Hours',
        image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80',
        features: ['HD/Airbrush techniques', 'Concept-based styling', 'On-site touchups']
    },
    {
        id: '4',
        title: 'Engagement Look',
        description: 'Subtle yet stunning makeup for your engagement ceremony.',
        price: 10000,
        duration: '2-3 Hours',
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
        features: ['Soft Glam look', 'Hairstyling', 'Draping']
    }
];

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Priya Sharma',
        role: 'Bride',
        content: 'The makeup lasted all night and looked perfect in photos! I felt like a princess. Highly recommended!',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        id: '2',
        name: 'Anjali Gupta',
        content: 'Very professional and hygiene was top notch. She understood exactly what I wanted for my reception look.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: '3',
        name: 'Sneha Reddy',
        role: 'Model',
        content: 'Amazing work for my portfolio shoot. The creativity is outstanding.',
        rating: 4,
        image: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
];

export const portfolioItems: PortfolioItem[] = [
    {
        id: '1',
        title: 'Royal Bridal Look',
        category: 'Bridal',
        imageAfter: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80',
        imageBefore: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=10&blur=5' // Simulated before
    },
    {
        id: '2',
        title: 'Reception Glam',
        category: 'Party',
        imageAfter: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80'
    },
    {
        id: '3',
        title: 'Editorial Shoot',
        category: 'Fashion',
        imageAfter: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&q=80'
    }
];
