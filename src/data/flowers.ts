export interface Flower {
  id: string;
  name: string;
  category: string;
  image: string;
  colors: string[];
  description: string;
  care: {
    temperature: string;
    humidity: string;
    sunlight: string;
    watering: string;
    soil: string;
    fertilizer: string;
  };
  bloomTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  flowerCount: number;
}

export const categories: Category[] = [
  {
    id: 'roses',
    name: 'Roses',
    description: 'Classic and romantic flowers symbolizing love and beauty',
    image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 12
  },
  {
    id: 'tulips',
    name: 'Tulips',
    description: 'Elegant spring flowers with vibrant colors and graceful forms',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 10
  },
  {
    id: 'sunflowers',
    name: 'Sunflowers',
    description: 'Bright and cheerful flowers that follow the sun',
    image: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    flowerCount: 8
  },
  {
    id: 'orchids',
    name: 'Orchids',
    description: 'Exotic and sophisticated flowers with intricate patterns',
    image: 'https://images.pexels.com/photos/2750067/pexels-photo-2750067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    flowerCount: 11
  },
  {
    id: 'daisies',
    name: 'Daisies',
    description: 'Simple yet beautiful flowers representing innocence and purity',
    image: 'https://images.pexels.com/photos/8468848/pexels-photo-8468848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    flowerCount: 9
  },
  {
    id: 'lilies',
    name: 'Lilies',
    description: 'Elegant and fragrant flowers with distinctive trumpet shapes',
    image: 'https://images.pexels.com/photos/17555896/pexels-photo-17555896/free-photo-of-white-blooming-lily-surrounded-by-buds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    flowerCount: 10
  },
  {
    id: 'rare',
    name: 'Rare Flowers',
    description: 'Extraordinary and exotic flowers that are truly one-of-a-kind',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    flowerCount: 12
  }
];

export const flowers: Flower[] = [
  // Roses (12 varieties)
  {
    id: 'red-rose',
    name: 'Red Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/1003914/pexels-photo-1003914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Deep Red', 'Crimson', 'Burgundy'],
    description: 'The classic symbol of love and passion, red roses are the most popular choice for romantic occasions.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Deep weekly watering, soil should dry between waterings',
      soil: 'Well-draining, fertile soil with pH 6.0-7.0',
      fertilizer: 'Monthly during growing season with balanced fertilizer'
    },
    bloomTime: 'Late spring to fall',
    difficulty: 'Medium'
  },
  {
    id: 'white-rose',
    name: 'White Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/160916/flower-rose-colorful-petals-160916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Pure White', 'Cream', 'Ivory'],
    description: 'White roses symbolize purity, innocence, and new beginnings, perfect for weddings and celebrations.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Deep weekly watering, avoid overhead watering',
      soil: 'Well-draining, organic-rich soil',
      fertilizer: 'Regular feeding with rose-specific fertilizer'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Medium'
  },
  {
    id: 'pink-rose',
    name: 'Pink Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/736226/pexels-photo-736226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Light Pink', 'Hot Pink', 'Coral Pink'],
    description: 'Pink roses represent gratitude, grace, and admiration, making them perfect for expressing appreciation.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Weekly deep watering at soil level',
      soil: 'Well-draining soil with good organic content',
      fertilizer: 'Monthly feeding during active growth'
    },
    bloomTime: 'Late spring to early fall',
    difficulty: 'Medium'
  },
  {
    id: 'yellow-rose',
    name: 'Yellow Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/209004/pexels-photo-209004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    colors: ['Bright Yellow', 'Golden Yellow', 'Lemon Yellow'],
    description: 'Yellow roses symbolize friendship, joy, and warmth, perfect for celebrating friendships and achievements.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Deep weekly watering, good drainage essential',
      soil: 'Well-draining, fertile soil with compost',
      fertilizer: 'Balanced fertilizer every 4-6 weeks'
    },
    bloomTime: 'Spring to fall',
    difficulty: 'Medium'
  },
  {
    id: 'orange-rose',
    name: 'Orange Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/32556252/pexels-photo-32556252/free-photo-of-vibrant-orange-rose-bloom-amidst-green-foliage.jpeg',
    colors: ['Bright Orange', 'Coral Orange', 'Peach'],
    description: 'Orange roses represent enthusiasm, passion, and energy, making them perfect for vibrant garden displays.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Regular deep watering, mulch around base',
      soil: 'Rich, well-draining soil with organic matter',
      fertilizer: 'Rose fertilizer monthly during growing season'
    },
    bloomTime: 'Late spring through fall',
    difficulty: 'Medium'
  },
  {
    id: 'purple-rose',
    name: 'Purple Rose',
    category: 'roses',
    image: 'https://cdn.shopify.com/s/files/1/0780/3119/2375/files/pexels-_-_-12200817_600x600.jpg?v=1696324147',
    colors: ['Deep Purple', 'Lavender', 'Mauve'],
    description: 'Purple roses symbolize enchantment and mystery, adding an exotic touch to any garden.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Deep weekly watering, avoid wet foliage',
      soil: 'Well-draining, slightly acidic soil',
      fertilizer: 'Organic rose fertilizer monthly'
    },
    bloomTime: 'Spring to fall',
    difficulty: 'Hard'
  },
  {
    id: 'climbing-rose',
    name: 'Climbing Rose',
    category: 'roses',
    image: 'https://lalitenterprise.com/cdn/shop/files/Untitleddesign-2024-04-26T182923.830.webp?v=1716639264&width=1445',
    colors: ['Pink', 'Red', 'White', 'Yellow'],
    description: 'Climbing roses create stunning vertical displays on walls, fences, and trellises.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Deep watering twice weekly, good air circulation',
      soil: 'Rich, well-draining soil with support structure',
      fertilizer: 'Heavy feeding during growing season'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Hard'
  },
  {
    id: 'miniature-rose',
    name: 'Miniature Rose',
    category: 'roses',
    image: 'https://mygardenlife.com/wp-content/uploads/2023/01/Pink-miniature-rose.jpg',
    colors: ['All colors available'],
    description: 'Compact roses perfect for containers, borders, and small spaces with full-sized beauty.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Regular watering, don\'t let soil dry completely',
      soil: 'Well-draining potting mix or garden soil',
      fertilizer: 'Light feeding every 2-3 weeks'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Easy'
  },
  {
    id: 'hybrid-tea-rose',
    name: 'Hybrid Tea Rose',
    category: 'roses',
    image: 'https://images.immediate.co.uk/production/volatile/sites/10/2018/02/bfc76ef2-b20d-4937-8f00-b1125eaa4f0a-626b7df.jpg?quality=90&resize=940,627',
    colors: ['All classic rose colors'],
    description: 'The classic long-stemmed roses with large, elegant blooms perfect for cutting.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Deep weekly watering at base of plant',
      soil: 'Rich, well-draining soil with good organic content',
      fertilizer: 'Regular feeding with rose-specific fertilizer'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Hard'
  },
  {
    id: 'garden-rose',
    name: 'Garden Rose',
    category: 'roses',
    image: 'https://mainaamgarden.com/cdn/shop/collections/queen_of_sweden_1200x600_crop_center.jpg?v=1623050257',
    colors: ['Mixed varieties'],
    description: 'Hardy, disease-resistant roses that bloom repeatedly throughout the growing season.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Weekly deep watering, drought tolerant once established',
      soil: 'Adaptable to various soil types, prefers well-draining',
      fertilizer: 'Moderate feeding, very low maintenance'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Easy'
  },
  {
    id: 'antique-rose',
    name: 'Antique Rose',
    category: 'roses',
    image: 'https://www.wagnersrosenursery.com.au/cdn/shop/products/BathshebaL.jpg?v=1609300454',
    colors: ['Soft pastels', 'Deep vintage colors'],
    description: 'Heritage roses with old-world charm, intense fragrance, and romantic appeal.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Deep weekly watering, very drought tolerant',
      soil: 'Well-draining soil, tolerates poor conditions',
      fertilizer: 'Light feeding, very hardy and low maintenance'
    },
    bloomTime: 'Spring to early summer',
    difficulty: 'Easy'
  },
  {
    id: 'floribunda-rose',
    name: 'Floribunda Rose',
    category: 'roses',
    image: 'https://en.famousroses.eu/cdn/shop/files/boscobel-english-floribunda-rose-bred-by-david-austin-191463.jpg?v=1720523223',
    colors: ['Wide variety of colors'],
    description: 'Clusters of smaller blooms that provide continuous color throughout the season.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Regular watering, good for mass plantings',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Regular feeding during growing season'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Medium'
  },

  // Tulips (10 varieties)
  {
    id: 'red-tulip',
    name: 'Red Tulip',
    category: 'tulips',
    image: 'https://5.imimg.com/data5/ZR/OO/EA/SELLER-34246236/tulip-flower.jpg',
    colors: ['Bright Red', 'Deep Red', 'Cherry Red'],
    description: 'Bold and vibrant red tulips are perfect for making a dramatic statement in spring gardens.',
    care: {
      temperature: '60-65°F (15-18°C) when blooming',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Moderate watering, avoid overwatering',
      soil: 'Well-draining, slightly alkaline soil',
      fertilizer: 'Bulb fertilizer at planting time'
    },
    bloomTime: 'Early to mid-spring',
    difficulty: 'Easy'
  },
  {
    id: 'yellow-tulip',
    name: 'Yellow Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Bright Yellow', 'Golden Yellow', 'Lemon Yellow'],
    description: 'Cheerful yellow tulips bring sunshine to any garden and symbolize happiness and hope.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Regular watering during growth, reduce after blooming',
      soil: 'Well-draining soil with good drainage',
      fertilizer: 'Low nitrogen fertilizer in spring'
    },
    bloomTime: 'Mid-spring',
    difficulty: 'Easy'
  },
  {
    id: 'pink-tulip',
    name: 'Pink Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Light Pink', 'Hot Pink', 'Rose Pink'],
    description: 'Delicate pink tulips add a soft, romantic touch to spring flower beds and arrangements.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Moderate watering, good drainage essential',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Bulb fertilizer at planting'
    },
    bloomTime: 'Mid-spring',
    difficulty: 'Easy'
  },
  {
    id: 'white-tulip',
    name: 'White Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Pure White', 'Cream White'],
    description: 'Elegant white tulips symbolize forgiveness and purity, perfect for formal gardens.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Regular watering during active growth',
      soil: 'Well-draining, slightly alkaline soil',
      fertilizer: 'Balanced bulb fertilizer'
    },
    bloomTime: 'Early to mid-spring',
    difficulty: 'Easy'
  },
  {
    id: 'purple-tulip',
    name: 'Purple Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/305854/pexels-photo-305854.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Deep Purple', 'Lavender', 'Royal Purple'],
    description: 'Regal purple tulips add sophistication and elegance to any spring display.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Moderate watering, avoid waterlogged soil',
      soil: 'Well-draining soil with organic matter',
      fertilizer: 'Low nitrogen fertilizer in early spring'
    },
    bloomTime: 'Mid-spring',
    difficulty: 'Easy'
  },
  {
    id: 'orange-tulip',
    name: 'Orange Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Bright Orange', 'Coral Orange'],
    description: 'Vibrant orange tulips create stunning focal points and complement other spring colors beautifully.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Regular watering during growth period',
      soil: 'Well-draining, fertile garden soil',
      fertilizer: 'Bulb fertilizer at planting time'
    },
    bloomTime: 'Mid-spring',
    difficulty: 'Easy'
  },
  {
    id: 'black-tulip',
    name: 'Black Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/305854/pexels-photo-305854.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Deep Maroon', 'Dark Purple-Black'],
    description: 'Dramatic black tulips are rare and exotic, creating striking contrasts in garden designs.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Careful watering, excellent drainage required',
      soil: 'Well-draining, rich soil',
      fertilizer: 'Quality bulb fertilizer'
    },
    bloomTime: 'Late spring',
    difficulty: 'Medium'
  },
  {
    id: 'parrot-tulip',
    name: 'Parrot Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Mixed vibrant colors with fringed edges'],
    description: 'Exotic parrot tulips have fringed, ruffled petals that resemble tropical bird feathers.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Moderate watering, protect from strong winds',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Balanced fertilizer for bulbs'
    },
    bloomTime: 'Late spring',
    difficulty: 'Medium'
  },
  {
    id: 'double-tulip',
    name: 'Double Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Various colors with double petals'],
    description: 'Double tulips have multiple layers of petals, creating full, peony-like blooms.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Regular watering, support heavy blooms',
      soil: 'Rich, well-draining soil',
      fertilizer: 'Bulb fertilizer at planting'
    },
    bloomTime: 'Mid to late spring',
    difficulty: 'Medium'
  },
  {
    id: 'darwin-tulip',
    name: 'Darwin Hybrid Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/305854/pexels-photo-305854.jpeg?auto=compress&cs=tinysrgb&w=800',
    colors: ['Red', 'Yellow', 'Orange', 'Pink'],
    description: 'Large, sturdy tulips that are excellent for naturalizing and return year after year.',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours direct sunlight',
      watering: 'Regular watering, very hardy variety',
      soil: 'Well-draining garden soil',
      fertilizer: 'Annual bulb fertilizer application'
    },
    bloomTime: 'Mid-spring',
    difficulty: 'Easy'
  },

  // Sunflowers (8 varieties)
  {
    id: 'giant-sunflower',
    name: 'Giant Sunflower',
    category: 'sunflowers',
    image: 'https://images.unsplash.com/photo-1705420300038-91bb0191d3cb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Bright Yellow', 'Golden Yellow'],
    description: 'Massive sunflowers that can grow up to 12 feet tall, perfect for creating dramatic garden displays.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '6-8 hours full sun',
      watering: 'Deep weekly watering, drought tolerant once established',
      soil: 'Well-draining, nutrient-rich soil',
      fertilizer: 'High nitrogen fertilizer early in season'
    },
    bloomTime: 'Mid to late summer',
    difficulty: 'Easy'
  },
  {
    id: 'dwarf-sunflower',
    name: 'Dwarf Sunflower',
    category: 'sunflowers',
    image: 'https://creativefarmer.in/cdn/shop/products/23554_1024x1024_a26c0d9c-9a75-4edc-b0c6-1d85c5bcf9aa.jpg?v=1616308984',
    colors: ['Yellow', 'Orange', 'Red'],
    description: 'Compact sunflowers perfect for containers and small gardens, growing 1-3 feet tall.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '6-8 hours full sun',
      watering: 'Regular watering, good for containers',
      soil: 'Well-draining potting mix or garden soil',
      fertilizer: 'Balanced fertilizer every 2-3 weeks'
    },
    bloomTime: 'Summer to early fall',
    difficulty: 'Easy'
  },
  {
    id: 'red-sunflower',
    name: 'Red Sunflower',
    category: 'sunflowers',
    image: 'https://images.unsplash.com/photo-1564225112885-ecba29c929e3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Deep Red', 'Burgundy', 'Mahogany'],
    description: 'Striking red sunflowers that add dramatic color and unique beauty to any garden.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '6-8 hours full sun',
      watering: 'Deep weekly watering, mulch around base',
      soil: 'Rich, well-draining soil',
      fertilizer: 'Balanced fertilizer monthly'
    },
    bloomTime: 'Mid to late summer',
    difficulty: 'Medium'
  },
  {
    id: 'multi-branch-sunflower',
    name: 'Multi-Branch Sunflower',
    category: 'sunflowers',
    image: 'https://i.ebayimg.com/images/g/0uAAAOSwiGViQmus/s-l1200.jpg',
    colors: ['Yellow', 'Orange', 'Mixed'],
    description: 'Branching sunflowers that produce multiple smaller blooms, perfect for cutting gardens.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '6-8 hours full sun',
      watering: 'Regular watering, excellent for cut flowers',
      soil: 'Fertile, well-draining soil',
      fertilizer: 'Regular feeding for continuous blooms'
    },
    bloomTime: 'Summer through fall',
    difficulty: 'Easy'
  },
  {
    id: 'teddy-bear-sunflower',
    name: 'Teddy Bear Sunflower',
    category: 'sunflowers',
    image: 'https://www.allthatgrows.in/cdn/shop/products/Sunflower-Teddy-Bear-First-Slide-2.jpg?v=1680689948',
    colors: ['Golden Yellow'],
    description: 'Fluffy, double-petaled sunflowers that look like golden teddy bears, perfect for children\'s gardens.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '6-8 hours full sun',
      watering: 'Regular watering, compact growth habit',
      soil: 'Well-draining garden soil',
      fertilizer: 'Light feeding, low maintenance'
    },
    bloomTime: 'Summer',
    difficulty: 'Easy'
  },
  {
    id: 'italian-white-sunflower',
    name: 'Italian White Sunflower',
    category: 'sunflowers',
    image: 'https://www.edenbrothers.com/cdn/shop/files/sunflower-italian-white-ndp-1.jpg?v=1726759631&width=675',
    colors: ['Cream White', 'Pale Yellow'],
    description: 'Elegant white sunflowers with dark centers, offering a sophisticated alternative to traditional yellow.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '6-8 hours full sun',
      watering: 'Deep weekly watering, drought tolerant',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Moderate feeding during growing season'
    },
    bloomTime: 'Mid to late summer',
    difficulty: 'Medium'
  },
  {
    id: 'autumn-beauty-sunflower',
    name: 'Autumn Beauty Sunflower',
    category: 'sunflowers',
    image: 'https://www.applewoodseed.com/wp-content/uploads/2016/11/HAAB-1203.jpg',
    colors: ['Bronze', 'Red', 'Yellow', 'Orange'],
    description: 'Multi-colored sunflowers with autumn hues, producing multiple blooms per plant.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '6-8 hours full sun',
      watering: 'Regular watering, excellent for fall displays',
      soil: 'Well-draining, nutrient-rich soil',
      fertilizer: 'Balanced fertilizer throughout season'
    },
    bloomTime: 'Late summer to fall',
    difficulty: 'Easy'
  },
  {
    id: 'mammoth-sunflower',
    name: 'Mammoth Sunflower',
    category: 'sunflowers',
    image: 'https://m.media-amazon.com/images/I/71WwSYj3r6L._AC_UF1000,1000_QL80_.jpg',
    colors: ['Bright Yellow'],
    description: 'The largest variety of sunflowers, growing up to 15 feet tall with massive flower heads.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '40-50%',
      sunlight: '8+ hours full sun',
      watering: 'Deep watering twice weekly, needs support',
      soil: 'Deep, rich, well-draining soil',
      fertilizer: 'Heavy feeding with high nitrogen fertilizer'
    },
    bloomTime: 'Late summer',
    difficulty: 'Medium'
  },

  // Orchids (11 varieties)
  {
    id: 'phalaenopsis-orchid',
    name: 'Phalaenopsis Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Pink', 'Purple', 'Yellow'],
    description: 'Also known as moth orchids, these are among the easiest orchids to grow and bloom for months.',
    care: {
      temperature: '65-80°F (18-27°C) during day, 60-70°F (15-21°C) at night',
      humidity: '50-70%',
      sunlight: 'Bright, indirect light',
      watering: 'Weekly watering with lukewarm water, allow to drain',
      soil: 'Orchid bark mix with good drainage',
      fertilizer: 'Orchid fertilizer monthly at half strength'
    },
    bloomTime: 'Can bloom year-round',
    difficulty: 'Medium'
  },
  {
    id: 'cattleya-orchid',
    name: 'Cattleya Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Purple', 'Pink', 'White', 'Yellow'],
    description: 'Large, showy orchids with intense fragrance, often called the "Queen of Orchids".',
    care: {
      temperature: '70-85°F (21-29°C) during day, 60-65°F (15-18°C) at night',
      humidity: '50-80%',
      sunlight: 'Bright light with some direct morning sun',
      watering: 'Water when potting medium is nearly dry',
      soil: 'Coarse orchid bark mix with excellent drainage',
      fertilizer: 'High nitrogen fertilizer during growing season'
    },
    bloomTime: 'Fall to winter',
    difficulty: 'Hard'
  },
  {
    id: 'dendrobium-orchid',
    name: 'Dendrobium Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Purple', 'Pink', 'Yellow'],
    description: 'Diverse group of orchids with cane-like stems and clusters of colorful flowers.',
    care: {
      temperature: '65-75°F (18-24°C) during day, 55-65°F (13-18°C) at night',
      humidity: '50-70%',
      sunlight: 'Bright, indirect light',
      watering: 'Water thoroughly, then allow to dry between waterings',
      soil: 'Well-draining orchid bark mix',
      fertilizer: 'Balanced orchid fertilizer bi-weekly'
    },
    bloomTime: 'Winter to spring',
    difficulty: 'Medium'
  },
  {
    id: 'oncidium-orchid',
    name: 'Oncidium Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Yellow', 'Brown', 'White', 'Pink'],
    description: 'Dancing lady orchids with sprays of small, delicate flowers that seem to dance in the breeze.',
    care: {
      temperature: '65-80°F (18-27°C) during day, 60-70°F (15-21°C) at night',
      humidity: '40-70%',
      sunlight: 'Bright, indirect light',
      watering: 'Water when potting medium is almost dry',
      soil: 'Fine to medium orchid bark mix',
      fertilizer: 'Weak orchid fertilizer weekly'
    },
    bloomTime: 'Fall to winter',
    difficulty: 'Medium'
  },
  {
    id: 'cymbidium-orchid',
    name: 'Cymbidium Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Green', 'Yellow', 'Pink', 'White', 'Brown'],
    description: 'Large orchids with long-lasting flowers, excellent for cut flower arrangements.',
    care: {
      temperature: '65-75°F (18-24°C) during day, 50-60°F (10-15°C) at night',
      humidity: '40-60%',
      sunlight: 'Bright light with some direct sun',
      watering: 'Keep evenly moist during growing season',
      soil: 'Coarse orchid bark mix with good drainage',
      fertilizer: 'Regular feeding during growing season'
    },
    bloomTime: 'Winter to spring',
    difficulty: 'Hard'
  },
  {
    id: 'paphiopedilum-orchid',
    name: 'Paphiopedilum Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Green', 'Brown', 'White', 'Pink'],
    description: 'Lady slipper orchids with unique pouch-shaped flowers and mottled foliage.',
    care: {
      temperature: '65-80°F (18-27°C) during day, 60-70°F (15-21°C) at night',
      humidity: '50-70%',
      sunlight: 'Low to medium indirect light',
      watering: 'Keep evenly moist, never allow to dry completely',
      soil: 'Fine orchid bark mix with perlite',
      fertilizer: 'Weak fertilizer every other watering'
    },
    bloomTime: 'Various seasons depending on variety',
    difficulty: 'Hard'
  },
  {
    id: 'vanda-orchid',
    name: 'Vanda Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Blue', 'Purple', 'Pink', 'White'],
    description: 'Spectacular orchids with large, flat flowers and thick aerial roots.',
    care: {
      temperature: '70-90°F (21-32°C) during day, 65-75°F (18-24°C) at night',
      humidity: '60-80%',
      sunlight: 'Very bright light with some direct sun',
      watering: 'Daily watering of roots, excellent drainage essential',
      soil: 'Often grown in baskets with minimal or no potting medium',
      fertilizer: 'Weekly weak fertilizer solution'
    },
    bloomTime: 'Multiple times per year',
    difficulty: 'Hard'
  },
  {
    id: 'miltonia-orchid',
    name: 'Miltonia Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Pink', 'Red', 'Yellow'],
    description: 'Pansy orchids with flat, face-like flowers that resemble pansies.',
    care: {
      temperature: '65-75°F (18-24°C) during day, 60-65°F (15-18°C) at night',
      humidity: '50-70%',
      sunlight: 'Medium indirect light',
      watering: 'Keep evenly moist, good air circulation',
      soil: 'Fine orchid bark mix',
      fertilizer: 'Balanced orchid fertilizer monthly'
    },
    bloomTime: 'Spring to summer',
    difficulty: 'Medium'
  },
  {
    id: 'brassia-orchid',
    name: 'Brassia Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Yellow-green', 'Brown spots'],
    description: 'Spider orchids with long, narrow petals that resemble spider legs.',
    care: {
      temperature: '65-80°F (18-27°C) during day, 60-70°F (15-21°C) at night',
      humidity: '50-70%',
      sunlight: 'Bright, indirect light',
      watering: 'Water when potting medium is nearly dry',
      soil: 'Medium orchid bark mix',
      fertilizer: 'Weak orchid fertilizer bi-weekly'
    },
    bloomTime: 'Spring to summer',
    difficulty: 'Medium'
  },
  {
    id: 'zygopetalum-orchid',
    name: 'Zygopetalum Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Green', 'Purple', 'White'],
    description: 'Fragrant orchids with distinctive purple and white lip markings.',
    care: {
      temperature: '60-75°F (15-24°C) during day, 55-65°F (13-18°C) at night',
      humidity: '50-70%',
      sunlight: 'Medium to bright indirect light',
      watering: 'Keep evenly moist, never allow to dry completely',
      soil: 'Fine to medium orchid bark mix',
      fertilizer: 'Regular weak fertilizer applications'
    },
    bloomTime: 'Fall to winter',
    difficulty: 'Medium'
  },
  {
    id: 'epidendrum-orchid',
    name: 'Epidendrum Orchid',
    category: 'orchids',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Orange', 'Red', 'Yellow', 'Pink'],
    description: 'Hardy orchids that can be grown outdoors in warm climates, with clusters of small flowers.',
    care: {
      temperature: '65-85°F (18-29°C) during day, 60-70°F (15-21°C) at night',
      humidity: '50-70%',
      sunlight: 'Bright light with some direct sun',
      watering: 'Water regularly, allow to dry slightly between waterings',
      soil: 'Well-draining orchid bark mix',
      fertilizer: 'Regular feeding during growing season'
    },
    bloomTime: 'Year-round in ideal conditions',
    difficulty: 'Easy'
  },

  // Daisies (9 varieties)
  {
    id: 'shasta-daisy',
    name: 'Shasta Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White with yellow center'],
    description: 'Classic white daisies with bright yellow centers, perfect for cottage gardens and wildflower meadows.',
    care: {
      temperature: '60-70°F (15-21°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Regular watering, drought tolerant once established',
      soil: 'Well-draining, average garden soil',
      fertilizer: 'Light feeding in spring'
    },
    bloomTime: 'Early summer to fall',
    difficulty: 'Easy'
  },
  {
    id: 'african-daisy',
    name: 'African Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1597848212624-e593c83edd72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Orange', 'Yellow', 'Pink', 'Purple', 'White'],
    description: 'Colorful daisies with vibrant petals and dark centers, excellent for hot, dry conditions.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '30-50%',
      sunlight: '6+ hours full sun',
      watering: 'Low water needs, drought tolerant',
      soil: 'Well-draining, sandy soil',
      fertilizer: 'Light feeding, low maintenance'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Easy'
  },
  {
    id: 'gerbera-daisy',
    name: 'Gerbera Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1597848212624-e593c83edd72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Red', 'Pink', 'Orange', 'Yellow', 'White'],
    description: 'Large, colorful daisies with perfect symmetry, popular for bouquets and arrangements.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours bright light',
      watering: 'Regular watering, avoid water on leaves',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Regular feeding during growing season'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Medium'
  },
  {
    id: 'english-daisy',
    name: 'English Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Pink', 'Red'],
    description: 'Small, charming daisies that form low carpets, perfect for edging and ground cover.',
    care: {
      temperature: '50-65°F (10-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours partial sun',
      watering: 'Regular watering, prefers cool, moist conditions',
      soil: 'Moist, well-draining soil',
      fertilizer: 'Light feeding in spring'
    },
    bloomTime: 'Spring to early summer',
    difficulty: 'Easy'
  },
  {
    id: 'painted-daisy',
    name: 'Painted Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1597848212624-e593c83edd72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Pink', 'Red', 'White', 'Purple'],
    description: 'Delicate daisies with finely cut foliage and pastel-colored petals.',
    care: {
      temperature: '60-70°F (15-21°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Moderate watering, good drainage essential',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Light feeding in spring and mid-summer'
    },
    bloomTime: 'Late spring to early summer',
    difficulty: 'Easy'
  },
  {
    id: 'ox-eye-daisy',
    name: 'Ox-Eye Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White with yellow center'],
    description: 'Wild daisies that naturalize easily, perfect for meadow gardens and natural landscapes.',
    care: {
      temperature: '60-75°F (15-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Low water needs, very drought tolerant',
      soil: 'Adaptable to poor soils, well-draining',
      fertilizer: 'No fertilizer needed, very low maintenance'
    },
    bloomTime: 'Late spring through summer',
    difficulty: 'Easy'
  },
  {
    id: 'gloriosa-daisy',
    name: 'Gloriosa Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1597848212624-e593c83edd72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Yellow', 'Orange', 'Red', 'Bicolor'],
    description: 'Large, showy daisies with golden petals and dark centers, also known as Black-eyed Susan.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Moderate watering, drought tolerant',
      soil: 'Well-draining, average to poor soil',
      fertilizer: 'Light feeding, very low maintenance'
    },
    bloomTime: 'Summer through fall',
    difficulty: 'Easy'
  },
  {
    id: 'marguerite-daisy',
    name: 'Marguerite Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Yellow', 'Pink'],
    description: 'Bushy perennial daisies with finely cut foliage and abundant blooms.',
    care: {
      temperature: '60-70°F (15-21°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Regular watering, deadhead for continuous blooms',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Monthly feeding during growing season'
    },
    bloomTime: 'Spring through fall',
    difficulty: 'Easy'
  },
  {
    id: 'cape-daisy',
    name: 'Cape Daisy',
    category: 'daisies',
    image: 'https://images.unsplash.com/photo-1597848212624-e593c83edd72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Purple', 'Pink', 'White', 'Yellow'],
    description: 'Trailing daisies perfect for hanging baskets and ground cover with continuous blooms.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Regular watering, excellent drainage required',
      soil: 'Well-draining, sandy soil',
      fertilizer: 'Light feeding every 4-6 weeks'
    },
    bloomTime: 'Year-round in mild climates',
    difficulty: 'Easy'
  },

  // Lilies (10 varieties)
  {
    id: 'easter-lily',
    name: 'Easter Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Pure White'],
    description: 'Elegant white lilies with a heavenly fragrance, traditionally associated with Easter celebrations.',
    care: {
      temperature: '60-75°F (15-24°C)',
      humidity: '40-60%',
      sunlight: '4-6 hours morning sun, afternoon shade',
      watering: 'Keep soil consistently moist but not waterlogged',
      soil: 'Well-draining, organic-rich soil',
      fertilizer: 'Balanced fertilizer every 2-3 weeks during growing season'
    },
    bloomTime: 'Late spring to early summer',
    difficulty: 'Medium'
  },
  {
    id: 'tiger-lily',
    name: 'Tiger Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Orange with black spots'],
    description: 'Bold orange lilies with distinctive black spots and recurved petals.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '6+ hours full sun to partial shade',
      watering: 'Regular watering, mulch to keep roots cool',
      soil: 'Well-draining, slightly acidic soil',
      fertilizer: 'Balanced fertilizer in spring and mid-summer'
    },
    bloomTime: 'Mid to late summer',
    difficulty: 'Easy'
  },
  {
    id: 'asiatic-lily',
    name: 'Asiatic Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Red', 'Orange', 'Yellow', 'Pink', 'White'],
    description: 'Hardy lilies with upward-facing flowers, available in many bright colors.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Regular watering, excellent drainage essential',
      soil: 'Well-draining, neutral to slightly acidic soil',
      fertilizer: 'Balanced fertilizer at planting and mid-season'
    },
    bloomTime: 'Early to mid-summer',
    difficulty: 'Easy'
  },
  {
    id: 'oriental-lily',
    name: 'Oriental Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Pink', 'Red', 'Yellow'],
    description: 'Large, fragrant lilies with exotic appearance and intense perfume.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours morning sun, afternoon shade',
      watering: 'Consistent moisture, mulch heavily',
      soil: 'Rich, well-draining, acidic soil',
      fertilizer: 'Regular feeding with acid-loving plant fertilizer'
    },
    bloomTime: 'Late summer',
    difficulty: 'Medium'
  },
  {
    id: 'daylily',
    name: 'Daylily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Yellow', 'Orange', 'Red', 'Pink', 'Purple'],
    description: 'Easy-care perennials with grass-like foliage and trumpet-shaped flowers.',
    care: {
      temperature: '60-80°F (15-27°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun for best blooming',
      watering: 'Moderate watering, drought tolerant once established',
      soil: 'Adaptable to most soil types, well-draining preferred',
      fertilizer: 'Light feeding in spring, very low maintenance'
    },
    bloomTime: 'Summer, varies by variety',
    difficulty: 'Easy'
  },
  {
    id: 'calla-lily',
    name: 'Calla Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Pink', 'Yellow', 'Purple', 'Black'],
    description: 'Elegant lilies with distinctive trumpet-shaped flowers and arrow-shaped leaves.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours bright, indirect light',
      watering: 'Keep soil consistently moist during growing season',
      soil: 'Rich, well-draining soil with organic matter',
      fertilizer: 'Monthly feeding during active growth'
    },
    bloomTime: 'Spring to summer',
    difficulty: 'Medium'
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White'],
    description: 'Popular houseplant with glossy leaves and white spoon-shaped flowers.',
    care: {
      temperature: '65-80°F (18-27°C)',
      humidity: '40-60%',
      sunlight: 'Bright, indirect light',
      watering: 'Keep soil consistently moist, not soggy',
      soil: 'Well-draining potting mix',
      fertilizer: 'Monthly feeding during growing season'
    },
    bloomTime: 'Spring and summer',
    difficulty: 'Easy'
  },
  {
    id: 'stargazer-lily',
    name: 'Stargazer Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Pink with white edges and dark spots'],
    description: 'Spectacular oriental lilies with upward-facing flowers and intense fragrance.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '6+ hours morning sun, afternoon shade',
      watering: 'Regular watering, keep roots cool with mulch',
      soil: 'Rich, well-draining, slightly acidic soil',
      fertilizer: 'Regular feeding with balanced fertilizer'
    },
    bloomTime: 'Mid to late summer',
    difficulty: 'Medium'
  },
  {
    id: 'lily-of-the-valley',
    name: 'Lily of the Valley',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Pink'],
    description: 'Delicate woodland plants with tiny bell-shaped flowers and sweet fragrance.',
    care: {
      temperature: '60-70°F (15-21°C)',
      humidity: '50-70%',
      sunlight: 'Partial to full shade',
      watering: 'Regular watering, prefers consistently moist soil',
      soil: 'Rich, well-draining, organic soil',
      fertilizer: 'Light feeding with organic fertilizer in spring'
    },
    bloomTime: 'Late spring',
    difficulty: 'Easy'
  },
  {
    id: 'trumpet-lily',
    name: 'Trumpet Lily',
    category: 'lilies',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Yellow', 'Pink'],
    description: 'Large, trumpet-shaped lilies with intense fragrance and impressive height.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '6+ hours full sun',
      watering: 'Regular deep watering, mulch around base',
      soil: 'Deep, rich, well-draining soil',
      fertilizer: 'Heavy feeding during growing season'
    },
    bloomTime: 'Mid to late summer',
    difficulty: 'Medium'
  },

  // Rare Flowers (12 varieties)
  {
    id: 'ghost-orchid',
    name: 'Ghost Orchid',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Pure White', 'Translucent'],
    description: 'Extremely rare epiphytic orchid that appears to float like a ghost, found only in specific swamp conditions.',
    care: {
      temperature: '75-85°F (24-29°C) during day, 65-75°F (18-24°C) at night',
      humidity: '80-95%',
      sunlight: 'Filtered light, no direct sun',
      watering: 'Constant high humidity, misting required',
      soil: 'Grows on tree bark, no soil needed',
      fertilizer: 'Very dilute orchid fertilizer monthly'
    },
    bloomTime: 'Summer (very unpredictable)',
    difficulty: 'Hard'
  },
  {
    id: 'jade-vine',
    name: 'Jade Vine',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Turquoise Blue', 'Blue-Green'],
    description: 'Spectacular climbing vine with unique turquoise flowers that hang in clusters like grapes.',
    care: {
      temperature: '70-85°F (21-29°C)',
      humidity: '60-80%',
      sunlight: 'Bright, filtered light',
      watering: 'Regular watering, keep soil moist but not waterlogged',
      soil: 'Rich, well-draining tropical soil mix',
      fertilizer: 'Monthly feeding with balanced fertilizer'
    },
    bloomTime: 'Spring to early summer',
    difficulty: 'Hard'
  },
  {
    id: 'chocolate-cosmos',
    name: 'Chocolate Cosmos',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1597848212624-e593c83edd72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Deep Burgundy', 'Dark Red-Brown'],
    description: 'Extinct in the wild, this flower smells exactly like chocolate and has velvety dark petals.',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6+ hours full sun',
      watering: 'Regular watering during growing season, reduce in winter',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Monthly feeding during active growth'
    },
    bloomTime: 'Late summer to fall',
    difficulty: 'Medium'
  },
  {
    id: 'black-bat-flower',
    name: 'Black Bat Flower',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Deep Black', 'Dark Purple'],
    description: 'Bizarre tropical flower that resembles a bat in flight with long whisker-like bracts.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '70-90%',
      sunlight: 'Bright, indirect light',
      watering: 'Keep soil consistently moist, high humidity essential',
      soil: 'Rich, well-draining tropical potting mix',
      fertilizer: 'Bi-weekly feeding with dilute fertilizer'
    },
    bloomTime: 'Summer to fall',
    difficulty: 'Hard'
  },
  {
    id: 'corpse-flower',
    name: 'Corpse Flower',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Deep Red', 'Burgundy', 'Green'],
    description: 'World\'s largest unbranched flower that can grow up to 10 feet tall and smells like rotting flesh.',
    care: {
      temperature: '75-85°F (24-29°C)',
      humidity: '60-80%',
      sunlight: 'Bright, indirect light',
      watering: 'Keep soil moist during growing season, dry during dormancy',
      soil: 'Rich, well-draining soil with organic matter',
      fertilizer: 'Heavy feeding during active growth period'
    },
    bloomTime: 'Unpredictable, every 3-10 years',
    difficulty: 'Hard'
  },
  {
    id: 'blue-passion-flower',
    name: 'Blue Passion Flower',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Deep Blue', 'Purple', 'White'],
    description: 'Intricate flower with complex structure featuring blue petals and elaborate corona filaments.',
    care: {
      temperature: '65-80°F (18-27°C)',
      humidity: '50-70%',
      sunlight: '6+ hours full sun to partial shade',
      watering: 'Regular watering, drought tolerant once established',
      soil: 'Well-draining soil, adaptable to various types',
      fertilizer: 'Monthly feeding during growing season'
    },
    bloomTime: 'Summer to fall',
    difficulty: 'Medium'
  },
  {
    id: 'fire-lily',
    name: 'Fire Lily',
    category: 'rare',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Gloriosa_superba_-_Glory_Lily.jpg',
    colors: ['Red', 'Orange', 'Yellow'],
    description: 'Also known as Gloriosa, this vibrant climbing lily is both beautiful and toxic, and is considered endangered in some regions.',
    care: {
      temperature: '70-85°F (21-29°C)',
      humidity: 'Moderate to High',
      sunlight: 'Bright indirect light',
      watering: 'Keep soil moist during growth',
      soil: 'Loamy, well-draining soil',
      fertilizer: 'Every 2 weeks during growing season'
    },
    bloomTime: 'Summer',
    difficulty: 'Medium'
  },
  {
    id: 'night-blooming-cereus',
    name: 'Night-Blooming Cereus',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Pure White', 'Cream'],
    description: 'Magnificent cactus flower that blooms only once a year for a single night, then closes forever.',
    care: {
      temperature: '65-80°F (18-27°C)',
      humidity: '30-50%',
      sunlight: 'Bright, indirect light',
      watering: 'Infrequent watering, allow soil to dry between waterings',
      soil: 'Well-draining cactus soil mix',
      fertilizer: 'Light feeding during growing season'
    },
    bloomTime: 'One night per year in summer',
    difficulty: 'Medium'
  },
  {
    id: 'rainbow-eucalyptus-flower',
    name: 'Rainbow Eucalyptus Flower',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Cream', 'Rainbow bark'],
    description: 'Unique flowers from the rainbow eucalyptus tree, known for its multicolored peeling bark.',
    care: {
      temperature: '70-85°F (21-29°C)',
      humidity: '60-80%',
      sunlight: '8+ hours full sun',
      watering: 'Regular watering, prefers consistently moist soil',
      soil: 'Well-draining, fertile soil',
      fertilizer: 'Monthly feeding with balanced fertilizer'
    },
    bloomTime: 'Year-round in tropical climates',
    difficulty: 'Hard'
  },
  {
    id: 'living-stone-flower',
    name: 'Living Stone Flower',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1597848212624-e593c83edd72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['White', 'Yellow', 'Pink'],
    description: 'Extraordinary succulent that perfectly mimics stones until it produces bright daisy-like flowers.',
    care: {
      temperature: '65-80°F (18-27°C)',
      humidity: '20-40%',
      sunlight: '6+ hours bright light',
      watering: 'Very infrequent watering, drought dormant periods',
      soil: 'Extremely well-draining, sandy soil',
      fertilizer: 'No fertilizer needed, very low maintenance'
    },
    bloomTime: 'Fall to winter',
    difficulty: 'Medium'
  },
  {
    id: 'dragon-arum',
    name: 'Dragon Arum',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Deep Purple', 'Black', 'Green'],
    description: 'Dramatic Mediterranean flower with a dark purple spathe and foul odor to attract flies.',
    care: {
      temperature: '60-75°F (15-24°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours partial shade',
      watering: 'Regular watering during growing season, dry dormancy',
      soil: 'Well-draining, rocky soil',
      fertilizer: 'Light feeding during active growth'
    },
    bloomTime: 'Late spring to early summer',
    difficulty: 'Medium'
  },
  {
    id: 'sensitive-plant-flower',
    name: 'Sensitive Plant Flower',
    category: 'rare',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colors: ['Pink', 'Purple', 'White'],
    description: 'Fascinating plant with leaves that fold instantly when touched, producing delicate pom-pom flowers.',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '50-70%',
      sunlight: '6+ hours bright light',
      watering: 'Keep soil consistently moist',
      soil: 'Well-draining potting mix',
      fertilizer: 'Monthly feeding with dilute fertilizer'
    },
    bloomTime: 'Summer to fall',
    difficulty: 'Easy'
  }
];