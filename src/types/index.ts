export interface Service {
    id: string;
    title: string;
    description: string;
    price: number;
    duration: string;
    image: string;
    features: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    role?: string;
    content: string;
    rating: number;
    image?: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    category: 'Bridal' | 'Party' | 'Fashion' | 'Photoshoot';
    imageBefore?: string;
    imageAfter: string;
}
