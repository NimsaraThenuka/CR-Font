// Product data structure
export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  type: 'gem' | 'jewelry';
  description: string;
  details: {
    material?: string;
    gemstone?: string;
    weight?: string;
    size?: string;
    origin?: string;
  };
  features: string[];
}

export const gemsProducts: Product[] = [
  {
    id: 'gem-1',
    name: 'Blue Sapphire',
    price: '$8,900',
    image: 'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYXBwaGlyZSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTYwNDAyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Precious Gems',
    type: 'gem',
    description: 'A magnificent blue sapphire with exceptional clarity and deep royal blue color. This gemstone showcases the finest quality with perfect cut and brilliant sparkle.',
    details: {
      gemstone: 'Natural Sapphire',
      weight: '5.2 carats',
      origin: 'Kashmir',
      size: '10.5 x 8.5 mm',
    },
    features: [
      'Certified natural gemstone',
      'No heat treatment',
      'Excellent clarity (VVS1)',
      'GIA certified',
      'Comes with authenticity certificate',
    ],
  },
  {
    id: 'gem-2',
    name: 'Colombian Emerald',
    price: '$12,500',
    image: 'https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbWVyYWxkJTIwbmVja2xhY2V8ZW58MXx8fHwxNzY5NjA0MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Precious Gems',
    type: 'gem',
    description: 'Rare Colombian emerald with vivid green color and exceptional brilliance. Known for its superior quality and rich color saturation.',
    details: {
      gemstone: 'Natural Emerald',
      weight: '4.8 carats',
      origin: 'Colombia',
      size: '11 x 9 mm',
    },
    features: [
      'Minor oil treatment only',
      'Vivid green color',
      'Eye-clean clarity',
      'Certificate of authenticity',
      'Investment grade',
    ],
  },
  {
    id: 'gem-3',
    name: 'Burmese Ruby',
    price: '$15,400',
    image: 'https://images.unsplash.com/photo-1650511266107-a4eff7631409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBydWJ5JTIwcGVuZGFudHxlbnwxfHx8fDE3Njk2MDQwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Precious Gems',
    type: 'gem',
    description: 'Premium Burmese ruby with pigeon blood red color. This rare gemstone exhibits exceptional color and clarity.',
    details: {
      gemstone: 'Natural Ruby',
      weight: '3.5 carats',
      origin: 'Myanmar (Burma)',
      size: '9 x 7.5 mm',
    },
    features: [
      'Pigeon blood red color',
      'No heat treatment',
      'VVS clarity',
      'GRS certified',
      'Museum quality',
    ],
  },
  {
    id: 'gem-4',
    name: 'Pink Diamond',
    price: '$28,900',
    image: 'https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwcmluZ3xlbnwxfHx8fDE3Njk1OTIzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Rare Gems',
    type: 'gem',
    description: 'Extremely rare natural pink diamond with vivid pink color. One of the world\'s most sought-after gemstones.',
    details: {
      gemstone: 'Natural Pink Diamond',
      weight: '1.2 carats',
      origin: 'Argyle Mine, Australia',
      size: '6.5 x 6.5 mm',
    },
    features: [
      'Natural fancy pink color',
      'Excellent cut',
      'VS1 clarity',
      'GIA certified',
      'Investment piece',
    ],
  },
  {
    id: 'gem-5',
    name: 'Paraiba Tourmaline',
    price: '$18,600',
    image: 'https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NjA0MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Rare Gems',
    type: 'gem',
    description: 'Spectacular Paraiba tourmaline with electric blue-green color. One of the rarest and most valuable gemstones in the world.',
    details: {
      gemstone: 'Paraiba Tourmaline',
      weight: '2.8 carats',
      origin: 'Brazil',
      size: '8 x 7 mm',
    },
    features: [
      'Electric neon blue color',
      'Natural copper bearing',
      'Excellent clarity',
      'GIA certified',
      'Extremely rare',
    ],
  },
  {
    id: 'gem-6',
    name: 'Imperial Topaz',
    price: '$6,200',
    image: 'https://images.unsplash.com/photo-1769078595478-5f756986b818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwZWFycmluZ3N8ZW58MXx8fHwxNzY5NjA0MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Precious Gems',
    type: 'gem',
    description: 'Rare imperial topaz with stunning peachy-orange color. Highly prized for its unique color and brilliance.',
    details: {
      gemstone: 'Imperial Topaz',
      weight: '6.5 carats',
      origin: 'Brazil',
      size: '12 x 10 mm',
    },
    features: [
      'Natural peachy-orange color',
      'No treatment',
      'Eye-clean',
      'Certificate included',
      'Collector grade',
    ],
  },
];

export const jewelryProducts: Product[] = [
  {
    id: 'jewelry-1',
    name: 'Diamond Eternity Ring',
    price: '$12,500',
    image: 'https://images.unsplash.com/photo-1742240439165-60790db1ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwcmluZ3xlbnwxfHx8fDE3Njk1OTIzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Rings',
    type: 'jewelry',
    description: 'Exquisite diamond eternity ring featuring brilliant round diamonds set in platinum. A timeless symbol of eternal love.',
    details: {
      material: '950 Platinum',
      gemstone: '2.5 ct total diamonds',
      weight: '8.5g',
      size: 'Resizable 5-9',
    },
    features: [
      'Premium VS1 clarity diamonds',
      'Handcrafted platinum band',
      'Lifetime warranty',
      'Free resizing',
      'Gift packaging included',
    ],
  },
  {
    id: 'jewelry-2',
    name: 'Emerald Necklace',
    price: '$18,900',
    image: 'https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbWVyYWxkJTIwbmVja2xhY2V8ZW58MXx8fHwxNzY5NjA0MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Necklaces',
    type: 'jewelry',
    description: 'Stunning emerald and diamond necklace featuring a magnificent Colombian emerald center stone surrounded by brilliant diamonds.',
    details: {
      material: '18K White Gold',
      gemstone: '5ct emerald, 1.5ct diamonds',
      weight: '15.2g',
      size: '16-18 inch adjustable',
    },
    features: [
      'Colombian emerald center stone',
      'VS quality diamonds',
      'Adjustable chain length',
      'Secure clasp',
      'Certificate of authenticity',
    ],
  },
  {
    id: 'jewelry-3',
    name: 'Sapphire Drop Earrings',
    price: '$9,750',
    image: 'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYXBwaGlyZSUyMGVhcnJpbmdzfGVufDF8fHx8MTc2OTYwNDAyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Earrings',
    type: 'jewelry',
    description: 'Elegant sapphire and diamond drop earrings featuring Ceylon sapphires with diamond accents.',
    details: {
      material: '18K White Gold',
      gemstone: '3ct sapphires, 0.8ct diamonds',
      weight: '6.8g',
      size: '25mm drop length',
    },
    features: [
      'Ceylon sapphires',
      'Secure butterfly backs',
      'Matching pair',
      'Handcrafted setting',
      'Luxury gift box',
    ],
  },
  {
    id: 'jewelry-4',
    name: 'Gold Link Bracelet',
    price: '$7,200',
    image: 'https://images.unsplash.com/photo-1629587424599-ee8806a66127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnb2xkJTIwYnJhY2VsZXR8ZW58MXx8fHwxNzY5NTM3OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Bracelets',
    type: 'jewelry',
    description: 'Classic gold link bracelet with modern design. Perfect for everyday luxury or special occasions.',
    details: {
      material: '18K Yellow Gold',
      weight: '22.5g',
      size: '7.5 inch (adjustable)',
    },
    features: [
      'Solid 18K gold construction',
      'Italian craftsmanship',
      'Secure lobster clasp',
      'Adjustable length',
      'Lifetime guarantee',
    ],
  },
  {
    id: 'jewelry-5',
    name: 'Ruby Heart Pendant',
    price: '$15,400',
    image: 'https://images.unsplash.com/photo-1650511266107-a4eff7631409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBydWJ5JTIwcGVuZGFudHxlbnwxfHx8fDE3Njk2MDQwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pendants',
    type: 'jewelry',
    description: 'Romantic ruby heart pendant surrounded by a halo of brilliant diamonds. A perfect expression of love.',
    details: {
      material: '18K Rose Gold',
      gemstone: '2.5ct ruby, 0.6ct diamonds',
      weight: '5.2g',
      size: 'Heart: 12mm',
    },
    features: [
      'Burmese ruby center',
      'Diamond halo setting',
      'Rose gold chain included',
      'Gift ready packaging',
      'Certificate included',
    ],
  },
  {
    id: 'jewelry-6',
    name: 'Wedding Band Set',
    price: '$8,900',
    image: 'https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwcmluZ3N8ZW58MXx8fHwxNzY5NjA0MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Rings',
    type: 'jewelry',
    description: 'Matching his and hers wedding band set in platinum. Classic design with modern comfort fit.',
    details: {
      material: '950 Platinum',
      weight: '16g (pair)',
      size: 'Custom sizing available',
    },
    features: [
      'Matching pair design',
      'Comfort fit interior',
      'Scratch resistant',
      'Free engraving',
      'Lifetime warranty',
    ],
  },
  {
    id: 'jewelry-7',
    name: 'Diamond Stud Earrings',
    price: '$11,300',
    image: 'https://images.unsplash.com/photo-1769078595478-5f756986b818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaWFtb25kJTIwZWFycmluZ3N8ZW58MXx8fHwxNzY5NjA0MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Earrings',
    type: 'jewelry',
    description: 'Classic diamond stud earrings featuring perfectly matched round brilliant diamonds in platinum settings.',
    details: {
      material: '950 Platinum',
      gemstone: '2.0ct total weight',
      weight: '3.5g',
      size: '6.5mm each',
    },
    features: [
      'GIA certified diamonds',
      'F color, VVS1 clarity',
      'Four-prong settings',
      'Secure screw backs',
      'Certificate of authenticity',
    ],
  },
  {
    id: 'jewelry-8',
    name: 'Luxury Gemstone Set',
    price: '$22,800',
    image: 'https://images.unsplash.com/photo-1767921482419-d2d255b5b700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnZW1zdG9uZSUyMGpld2Vscnl8ZW58MXx8fHwxNzY5NjA0MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sets',
    type: 'jewelry',
    description: 'Complete jewelry set featuring matching necklace, earrings, and ring with multi-colored precious gemstones.',
    details: {
      material: '18K White Gold',
      gemstone: 'Sapphires, rubies, emeralds, diamonds',
      weight: '35g total',
      size: 'Ring size 7, necklace 18 inch',
    },
    features: [
      'Complete matching set',
      'Premium gemstones',
      'Handcrafted design',
      'Presentation box',
      'Full certification',
    ],
  },
];

export const allProducts = [...gemsProducts, ...jewelryProducts];
