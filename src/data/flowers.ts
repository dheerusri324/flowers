export interface Flower {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  colors: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  bloomTime: string;
  country: string; // Added country field
  care: {
    temperature: string;
    humidity: string;
    sunlight: string;
    watering: string;
    soil: string;
    fertilizer: string;
  };
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
    description: 'Classic and elegant flowers perfect for any garden. Known for their beauty and fragrance.',
    image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 6
  },
  {
    id: 'tulips',
    name: 'Tulips',
    description: 'Vibrant spring flowers that bring color and joy to your garden with their distinctive cup shape.',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 6
  },
  {
    id: 'sunflowers',
    name: 'Sunflowers',
    description: 'Bright and cheerful flowers that follow the sun and can grow to impressive heights.',
    image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 6
  },
  {
    id: 'orchids',
    name: 'Orchids',
    description: 'Exotic and sophisticated flowers with intricate patterns and long-lasting blooms.',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 6
  },
  {
    id: 'daisies',
    name: 'Daisies',
    description: 'Simple yet charming flowers that symbolize innocence and new beginnings.',
    image: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 6
  },
  {
    id: 'lilies',
    name: 'Lilies',
    description: 'Elegant flowers with trumpet-shaped blooms and intense fragrance.',
    image: 'https://images.pexels.com/photos/1068114/pexels-photo-1068114.jpeg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 6
  },
  {
    id: 'rare',
    name: 'Rare Flowers',
    description: 'Extraordinary and exotic flowers that are truly one-of-a-kind',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    flowerCount: 12
  }
];

export const flowers: Flower[] = [
  // Roses
  {
    id: 'red-rose',
    name: 'Red Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The classic symbol of love and passion. Red roses are perfect for romantic occasions and formal gardens.',
    colors: ['Deep Red', 'Crimson', 'Burgundy'],
    difficulty: 'Medium',
    bloomTime: 'Late Spring to Fall',
    country: 'Turkey',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 2-3 times per week',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-6.5)',
      fertilizer: 'Balanced fertilizer every 4-6 weeks during growing season'
    }
  },
  {
    id: 'white-rose',
    name: 'White Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pure and elegant white roses symbolize new beginnings and are perfect for weddings and special occasions.',
    colors: ['Pure White', 'Cream', 'Ivory'],
    difficulty: 'Medium',
    bloomTime: 'Late Spring to Fall',
    country: 'Turkey',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 2-3 times per week',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-6.5)',
      fertilizer: 'Balanced fertilizer every 4-6 weeks during growing season'
    }
  },
  {
    id: 'pink-rose',
    name: 'Pink Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gentle and graceful pink roses represent gratitude and appreciation, perfect for expressing thanks.',
    colors: ['Light Pink', 'Hot Pink', 'Rose Pink'],
    difficulty: 'Medium',
    bloomTime: 'Late Spring to Fall',
    country: 'Turkey',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 2-3 times per week',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-6.5)',
      fertilizer: 'Balanced fertilizer every 4-6 weeks during growing season'
    }
  },
  {
    id: 'yellow-rose',
    name: 'Yellow Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Bright and cheerful yellow roses symbolize friendship and joy, bringing sunshine to any garden.',
    colors: ['Bright Yellow', 'Golden Yellow', 'Lemon Yellow'],
    difficulty: 'Medium',
    bloomTime: 'Late Spring to Fall',
    country: 'Turkey',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 2-3 times per week',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-6.5)',
      fertilizer: 'Balanced fertilizer every 4-6 weeks during growing season'
    }
  },
  {
    id: 'orange-rose',
    name: 'Orange Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vibrant orange roses represent enthusiasm and desire, adding warmth and energy to your garden.',
    colors: ['Bright Orange', 'Coral', 'Peach'],
    difficulty: 'Medium',
    bloomTime: 'Late Spring to Fall',
    country: 'Turkey',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 2-3 times per week',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-6.5)',
      fertilizer: 'Balanced fertilizer every 4-6 weeks during growing season'
    }
  },
  {
    id: 'purple-rose',
    name: 'Purple Rose',
    category: 'roses',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Mysterious and enchanting purple roses represent love at first sight and enchantment.',
    colors: ['Deep Purple', 'Lavender', 'Mauve'],
    difficulty: 'Hard',
    bloomTime: 'Late Spring to Fall',
    country: 'Turkey',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 2-3 times per week',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-6.5)',
      fertilizer: 'Balanced fertilizer every 4-6 weeks during growing season'
    }
  },

  // Tulips
  {
    id: 'red-tulip',
    name: 'Red Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Bold and striking red tulips are perfect for creating dramatic spring displays in your garden.',
    colors: ['Bright Red', 'Scarlet', 'Cherry Red'],
    difficulty: 'Easy',
    bloomTime: 'Early to Mid Spring',
    country: 'Netherlands',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Moderate watering, avoid waterlogging',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Bulb fertilizer in fall, balanced fertilizer in spring'
    }
  },
  {
    id: 'yellow-tulip',
    name: 'Yellow Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cheerful yellow tulips bring sunshine to spring gardens and symbolize hopeful love.',
    colors: ['Bright Yellow', 'Golden Yellow', 'Butter Yellow'],
    difficulty: 'Easy',
    bloomTime: 'Early to Mid Spring',
    country: 'Netherlands',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Moderate watering, avoid waterlogging',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Bulb fertilizer in fall, balanced fertilizer in spring'
    }
  },
  {
    id: 'pink-tulip',
    name: 'Pink Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Delicate pink tulips represent affection and caring, perfect for romantic spring gardens.',
    colors: ['Light Pink', 'Rose Pink', 'Salmon Pink'],
    difficulty: 'Easy',
    bloomTime: 'Early to Mid Spring',
    country: 'Netherlands',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Moderate watering, avoid waterlogging',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Bulb fertilizer in fall, balanced fertilizer in spring'
    }
  },
  {
    id: 'purple-tulip',
    name: 'Purple Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Regal purple tulips add elegance and sophistication to spring flower beds.',
    colors: ['Deep Purple', 'Violet', 'Lavender'],
    difficulty: 'Easy',
    bloomTime: 'Early to Mid Spring',
    country: 'Netherlands',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Moderate watering, avoid waterlogging',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Bulb fertilizer in fall, balanced fertilizer in spring'
    }
  },
  {
    id: 'white-tulip',
    name: 'White Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pure white tulips symbolize forgiveness and represent new beginnings in spring.',
    colors: ['Pure White', 'Cream White', 'Snow White'],
    difficulty: 'Easy',
    bloomTime: 'Early to Mid Spring',
    country: 'Netherlands',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Moderate watering, avoid waterlogging',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Bulb fertilizer in fall, balanced fertilizer in spring'
    }
  },
  {
    id: 'orange-tulip',
    name: 'Orange Tulip',
    category: 'tulips',
    image: 'https://images.pexels.com/photos/36729/tulip-flower-bloom-pink.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vibrant orange tulips represent energy and enthusiasm, perfect for bold spring displays.',
    colors: ['Bright Orange', 'Tangerine', 'Coral'],
    difficulty: 'Easy',
    bloomTime: 'Early to Mid Spring',
    country: 'Netherlands',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Moderate watering, avoid waterlogging',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Bulb fertilizer in fall, balanced fertilizer in spring'
    }
  },

  // Sunflowers
  {
    id: 'giant-sunflower',
    name: 'Giant Sunflower',
    category: 'sunflowers',
    image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Impressive giant sunflowers can grow up to 12 feet tall and produce massive flower heads.',
    colors: ['Bright Yellow', 'Golden Yellow'],
    difficulty: 'Easy',
    bloomTime: 'Mid to Late Summer',
    country: 'United States',
    care: {
      temperature: '70-78°F (21-26°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 1-2 times per week',
      soil: 'Well-draining, nutrient-rich soil (pH 6.0-7.5)',
      fertilizer: 'High-nitrogen fertilizer early, phosphorus during flowering'
    }
  },
  {
    id: 'dwarf-sunflower',
    name: 'Dwarf Sunflower',
    category: 'sunflowers',
    image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Compact dwarf sunflowers are perfect for containers and small gardens, growing 1-3 feet tall.',
    colors: ['Yellow', 'Orange', 'Red'],
    difficulty: 'Easy',
    bloomTime: 'Mid to Late Summer',
    country: 'United States',
    care: {
      temperature: '70-78°F (21-26°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Regular watering, keep soil moist',
      soil: 'Well-draining, nutrient-rich soil (pH 6.0-7.5)',
      fertilizer: 'Balanced fertilizer every 2-3 weeks'
    }
  },
  {
    id: 'red-sunflower',
    name: 'Red Sunflower',
    category: 'sunflowers',
    image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Unique red sunflowers add dramatic color to gardens with their deep burgundy and red petals.',
    colors: ['Deep Red', 'Burgundy', 'Mahogany'],
    difficulty: 'Medium',
    bloomTime: 'Mid to Late Summer',
    country: 'United States',
    care: {
      temperature: '70-78°F (21-26°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 1-2 times per week',
      soil: 'Well-draining, nutrient-rich soil (pH 6.0-7.5)',
      fertilizer: 'High-nitrogen fertilizer early, phosphorus during flowering'
    }
  },
  {
    id: 'multi-head-sunflower',
    name: 'Multi-Head Sunflower',
    category: 'sunflowers',
    image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Branching sunflowers produce multiple smaller flower heads, perfect for cut flower gardens.',
    colors: ['Yellow', 'Orange', 'Bi-color'],
    difficulty: 'Medium',
    bloomTime: 'Mid to Late Summer',
    country: 'United States',
    care: {
      temperature: '70-78°F (21-26°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 1-2 times per week',
      soil: 'Well-draining, nutrient-rich soil (pH 6.0-7.5)',
      fertilizer: 'Balanced fertilizer every 3-4 weeks'
    }
  },
  {
    id: 'teddy-bear-sunflower',
    name: 'Teddy Bear Sunflower',
    category: 'sunflowers',
    image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fluffy, double-petaled sunflowers that look like golden teddy bears, perfect for children\'s gardens.',
    colors: ['Golden Yellow', 'Bright Yellow'],
    difficulty: 'Easy',
    bloomTime: 'Mid to Late Summer',
    country: 'United States',
    care: {
      temperature: '70-78°F (21-26°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Regular watering, keep soil moist',
      soil: 'Well-draining, nutrient-rich soil (pH 6.0-7.5)',
      fertilizer: 'Balanced fertilizer every 2-3 weeks'
    }
  },
  {
    id: 'italian-white-sunflower',
    name: 'Italian White Sunflower',
    category: 'sunflowers',
    image: 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant white sunflowers with dark centers, offering a unique twist on the classic sunflower.',
    colors: ['Cream White', 'Pale Yellow'],
    difficulty: 'Medium',
    bloomTime: 'Mid to Late Summer',
    country: 'Italy',
    care: {
      temperature: '70-78°F (21-26°C)',
      humidity: '40-60%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Deep watering 1-2 times per week',
      soil: 'Well-draining, nutrient-rich soil (pH 6.0-7.5)',
      fertilizer: 'High-nitrogen fertilizer early, phosphorus during flowering'
    }
  },

  // Orchids
  {
    id: 'phalaenopsis-orchid',
    name: 'Phalaenopsis Orchid',
    category: 'orchids',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Popular moth orchids with long-lasting blooms, perfect for beginners and indoor growing.',
    colors: ['White', 'Pink', 'Purple', 'Yellow'],
    difficulty: 'Easy',
    bloomTime: 'Year-round',
    country: 'Philippines',
    care: {
      temperature: '65-80°F (18-27°C)',
      humidity: '50-70%',
      sunlight: 'Bright, indirect light',
      watering: 'Weekly watering, allow to dry between waterings',
      soil: 'Orchid bark mix, well-draining',
      fertilizer: 'Orchid fertilizer monthly, diluted strength'
    }
  },
  {
    id: 'cattleya-orchid',
    name: 'Cattleya Orchid',
    category: 'orchids',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large, fragrant orchids known as the "Queen of Orchids" with spectacular blooms.',
    colors: ['Purple', 'Pink', 'White', 'Yellow'],
    difficulty: 'Medium',
    bloomTime: 'Fall to Winter',
    country: 'Brazil',
    care: {
      temperature: '60-85°F (15-29°C)',
      humidity: '50-80%',
      sunlight: 'Bright light with some direct morning sun',
      watering: 'Water when dry, good drainage essential',
      soil: 'Coarse orchid bark mix',
      fertilizer: 'High-nitrogen fertilizer in growing season'
    }
  },
  {
    id: 'dendrobium-orchid',
    name: 'Dendrobium Orchid',
    category: 'orchids',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Diverse group of orchids with cane-like stems and clusters of colorful flowers.',
    colors: ['White', 'Purple', 'Pink', 'Yellow', 'Orange'],
    difficulty: 'Medium',
    bloomTime: 'Spring to Summer',
    country: 'Thailand',
    care: {
      temperature: '65-85°F (18-29°C)',
      humidity: '50-70%',
      sunlight: 'Bright, indirect light',
      watering: 'Regular watering in growing season, reduce in winter',
      soil: 'Fine to medium orchid bark mix',
      fertilizer: 'Balanced orchid fertilizer bi-weekly'
    }
  },
  {
    id: 'oncidium-orchid',
    name: 'Oncidium Orchid',
    category: 'orchids',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dancing lady orchids with sprays of small, cheerful yellow flowers.',
    colors: ['Yellow', 'Brown', 'White', 'Pink'],
    difficulty: 'Medium',
    bloomTime: 'Fall to Winter',
    country: 'Ecuador',
    care: {
      temperature: '60-80°F (15-27°C)',
      humidity: '40-70%',
      sunlight: 'Bright, indirect light',
      watering: 'Keep slightly moist, never soggy',
      soil: 'Fine orchid bark mix with perlite',
      fertilizer: 'Weak orchid fertilizer weekly'
    }
  },
  {
    id: 'cymbidium-orchid',
    name: 'Cymbidium Orchid',
    category: 'orchids',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large orchids with long-lasting flowers, excellent for cut flowers and cool climates.',
    colors: ['Green', 'Yellow', 'Pink', 'White', 'Red'],
    difficulty: 'Hard',
    bloomTime: 'Winter to Spring',
    country: 'China',
    care: {
      temperature: '50-75°F (10-24°C)',
      humidity: '40-60%',
      sunlight: 'Bright light with some direct sun',
      watering: 'Keep evenly moist, reduce in winter',
      soil: 'Coarse orchid bark with perlite',
      fertilizer: 'High-nitrogen fertilizer in summer, low-nitrogen in fall'
    }
  },
  {
    id: 'vanda-orchid',
    name: 'Vanda Orchid',
    category: 'orchids',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spectacular orchids with large, flat flowers and aerial roots, often grown in baskets.',
    colors: ['Blue', 'Purple', 'Pink', 'White', 'Orange'],
    difficulty: 'Hard',
    bloomTime: 'Spring to Fall',
    country: 'India',
    care: {
      temperature: '65-95°F (18-35°C)',
      humidity: '60-80%',
      sunlight: 'Very bright light with some direct sun',
      watering: 'Daily watering of roots, excellent drainage',
      soil: 'Grown in baskets with minimal medium',
      fertilizer: 'Weak fertilizer with every watering'
    }
  },

  // Daisies
  {
    id: 'shasta-daisy',
    name: 'Shasta Daisy',
    category: 'daisies',
    image: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Classic white daisies with yellow centers, perfect for cottage gardens and wildflower meadows.',
    colors: ['White', 'Cream'],
    difficulty: 'Easy',
    bloomTime: 'Late Spring to Fall',
    country: 'United States',
    care: {
      temperature: '60-70°F (15-21°C)',
      humidity: '40-60%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, drought tolerant once established',
      soil: 'Well-draining, average soil (pH 6.0-8.0)',
      fertilizer: 'Light feeding in spring, avoid over-fertilizing'
    }
  },
  {
    id: 'gerbera-daisy',
    name: 'Gerbera Daisy',
    category: 'daisies',
    image: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vibrant, large-flowered daisies available in many colors, excellent for cut flowers.',
    colors: ['Red', 'Pink', 'Orange', 'Yellow', 'White', 'Purple'],
    difficulty: 'Medium',
    bloomTime: 'Spring to Fall',
    country: 'South Africa',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-50%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, avoid getting water on leaves',
      soil: 'Well-draining, fertile soil (pH 5.5-6.5)',
      fertilizer: 'Balanced fertilizer every 2-3 weeks'
    }
  },
  {
    id: 'african-daisy',
    name: 'African Daisy',
    category: 'daisies',
    image: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Colorful daisies that close at night and in cloudy weather, perfect for sunny borders.',
    colors: ['Orange', 'Yellow', 'White', 'Purple', 'Pink'],
    difficulty: 'Easy',
    bloomTime: 'Spring to Fall',
    country: 'South Africa',
    care: {
      temperature: '60-75°F (15-24°C)',
      humidity: '30-50%',
      sunlight: '6-8 hours direct sunlight',
      watering: 'Moderate watering, drought tolerant',
      soil: 'Well-draining, sandy soil (pH 6.0-7.0)',
      fertilizer: 'Light feeding monthly during growing season'
    }
  },
  {
    id: 'english-daisy',
    name: 'English Daisy',
    category: 'daisies',
    image: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Small, charming daisies that bloom in cool weather, perfect for spring and fall gardens.',
    colors: ['White', 'Pink', 'Red'],
    difficulty: 'Easy',
    bloomTime: 'Spring and Fall',
    country: 'United Kingdom',
    care: {
      temperature: '50-65°F (10-18°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours sunlight',
      watering: 'Regular watering, keep soil moist',
      soil: 'Moist, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Light feeding in spring'
    }
  },
  {
    id: 'painted-daisy',
    name: 'Painted Daisy',
    category: 'daisies',
    image: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Colorful daisies with finely cut foliage, also known as pyrethrum, with natural insect-repelling properties.',
    colors: ['Pink', 'Red', 'White', 'Purple'],
    difficulty: 'Medium',
    bloomTime: 'Late Spring to Early Summer',
    country: 'Iran',
    care: {
      temperature: '60-70°F (15-21°C)',
      humidity: '40-60%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, good drainage essential',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Balanced fertilizer in spring'
    }
  },
  {
    id: 'ox-eye-daisy',
    name: 'Ox-Eye Daisy',
    category: 'daisies',
    image: 'https://images.pexels.com/photos/56875/tree-dawn-nature-bucovina-56875.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Wild daisies perfect for naturalized areas and wildflower meadows, very hardy and self-seeding.',
    colors: ['White'],
    difficulty: 'Easy',
    bloomTime: 'Late Spring to Summer',
    country: 'Europe',
    care: {
      temperature: '55-75°F (13-24°C)',
      humidity: '40-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Minimal watering, very drought tolerant',
      soil: 'Any well-draining soil (pH 5.5-8.0)',
      fertilizer: 'No fertilizer needed, thrives in poor soil'
    }
  },

  // Lilies
  {
    id: 'easter-lily',
    name: 'Easter Lily',
    category: 'lilies',
    image: 'https://images.pexels.com/photos/1068114/pexels-photo-1068114.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pure white trumpet lilies symbolizing rebirth and new beginnings, popular for Easter celebrations.',
    colors: ['Pure White'],
    difficulty: 'Medium',
    bloomTime: 'Spring',
    country: 'Japan',
    care: {
      temperature: '60-65°F (15-18°C)',
      humidity: '40-60%',
      sunlight: '6 hours morning sun, afternoon shade',
      watering: 'Keep soil consistently moist but not waterlogged',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-7.0)',
      fertilizer: 'Balanced fertilizer monthly during growing season'
    }
  },
  {
    id: 'tiger-lily',
    name: 'Tiger Lily',
    category: 'lilies',
    image: 'https://images.pexels.com/photos/1068114/pexels-photo-1068114.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Orange lilies with dark spots and recurved petals, very hardy and naturalizes well.',
    colors: ['Orange', 'Red-Orange'],
    difficulty: 'Easy',
    bloomTime: 'Mid to Late Summer',
    country: 'China',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, mulch to keep roots cool',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-7.0)',
      fertilizer: 'Balanced fertilizer in spring and mid-summer'
    }
  },
  {
    id: 'asiatic-lily',
    name: 'Asiatic Lily',
    category: 'lilies',
    image: 'https://images.pexels.com/photos/1068114/pexels-photo-1068114.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Early-blooming lilies in many colors, unscented but very showy and easy to grow.',
    colors: ['Yellow', 'Orange', 'Red', 'Pink', 'White', 'Purple'],
    difficulty: 'Easy',
    bloomTime: 'Early Summer',
    country: 'Asia',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, good drainage essential',
      soil: 'Well-draining, slightly acidic soil (pH 6.0-7.0)',
      fertilizer: 'Balanced fertilizer in spring'
    }
  },
  {
    id: 'oriental-lily',
    name: 'Oriental Lily',
    category: 'lilies',
    image: 'https://images.pexels.com/photos/1068114/pexels-photo-1068114.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large, fragrant lilies that bloom in late summer, known for their intense perfume.',
    colors: ['White', 'Pink', 'Red', 'Yellow'],
    difficulty: 'Medium',
    bloomTime: 'Late Summer',
    country: 'Japan',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-70%',
      sunlight: '6 hours morning sun, afternoon shade',
      watering: 'Consistent moisture, mulch heavily',
      soil: 'Well-draining, acidic soil (pH 5.5-6.5)',
      fertilizer: 'Acid-loving plant fertilizer in spring'
    }
  },
  {
    id: 'daylily',
    name: 'Daylily',
    category: 'lilies',
    image: 'https://images.pexels.com/photos/1068114/pexels-photo-1068114.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Hardy perennials with trumpet-shaped flowers, each bloom lasts one day but plants produce many buds.',
    colors: ['Yellow', 'Orange', 'Red', 'Pink', 'Purple', 'White'],
    difficulty: 'Easy',
    bloomTime: 'Summer',
    country: 'China',
    care: {
      temperature: '60-80°F (15-27°C)',
      humidity: '40-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, drought tolerant once established',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Balanced fertilizer in spring and mid-summer'
    }
  },
  {
    id: 'calla-lily',
    name: 'Calla Lily',
    category: 'lilies',
    image: 'https://images.pexels.com/photos/1068114/pexels-photo-1068114.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant lilies with distinctive trumpet-shaped blooms, popular for weddings and formal arrangements.',
    colors: ['White', 'Yellow', 'Pink', 'Purple', 'Black'],
    difficulty: 'Medium',
    bloomTime: 'Spring to Summer',
    country: 'South Africa',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '50-60%',
      sunlight: '6 hours morning sun, afternoon shade',
      watering: 'Keep soil consistently moist during growing season',
      soil: 'Rich, well-draining soil (pH 6.0-6.5)',
      fertilizer: 'Balanced liquid fertilizer every 2 weeks'
    }
  },

  // Rare Flowers
  {
    id: 'ghost-orchid',
    name: 'Ghost Orchid',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Extremely rare epiphytic orchid that appears to float in mid-air with its translucent white petals.',
    colors: ['Translucent White', 'Pale Green'],
    difficulty: 'Hard',
    bloomTime: 'Summer',
    country: 'United States',
    care: {
      temperature: '75-85°F (24-29°C)',
      humidity: '80-90%',
      sunlight: 'Filtered light, no direct sun',
      watering: 'High humidity, misting, no soil watering',
      soil: 'Grows on tree bark, no soil needed',
      fertilizer: 'Very dilute orchid fertilizer monthly'
    }
  },
  {
    id: 'jade-vine',
    name: 'Jade Vine',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spectacular turquoise climbing vine with claw-shaped flowers, one of the rarest flower colors in nature.',
    colors: ['Turquoise', 'Blue-Green', 'Jade'],
    difficulty: 'Hard',
    bloomTime: 'Spring',
    country: 'Philippines',
    care: {
      temperature: '70-85°F (21-29°C)',
      humidity: '70-90%',
      sunlight: 'Bright, filtered light',
      watering: 'Keep soil consistently moist',
      soil: 'Rich, well-draining, slightly acidic soil',
      fertilizer: 'High-phosphorus fertilizer during flowering'
    }
  },
  {
    id: 'chocolate-cosmos',
    name: 'Chocolate Cosmos',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Extinct in the wild, this flower smells exactly like chocolate and blooms in deep burgundy.',
    colors: ['Deep Burgundy', 'Dark Red', 'Chocolate Brown'],
    difficulty: 'Hard',
    bloomTime: 'Summer to Fall',
    country: 'Mexico',
    care: {
      temperature: '65-75°F (18-24°C)',
      humidity: '40-60%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, allow to dry between waterings',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Balanced fertilizer every 2 weeks during growing season'
    }
  },
  {
    id: 'black-bat-flower',
    name: 'Black Bat Flower',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Bizarre flower that resembles a bat in flight with long whiskers, truly one of nature\'s oddities.',
    colors: ['Deep Purple', 'Black', 'Dark Brown'],
    difficulty: 'Hard',
    bloomTime: 'Summer',
    country: 'Thailand',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '70-80%',
      sunlight: 'Bright, indirect light',
      watering: 'Keep soil consistently moist but not waterlogged',
      soil: 'Rich, well-draining, slightly acidic soil',
      fertilizer: 'Dilute liquid fertilizer monthly'
    }
  },
  {
    id: 'corpse-flower',
    name: 'Corpse Flower',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'World\'s largest flower that blooms once every 3-10 years and smells like rotting flesh to attract pollinators.',
    colors: ['Deep Red', 'Burgundy', 'Purple'],
    difficulty: 'Hard',
    bloomTime: 'Unpredictable, every 3-10 years',
    country: 'Indonesia',
    care: {
      temperature: '75-85°F (24-29°C)',
      humidity: '80-90%',
      sunlight: 'Bright, indirect light',
      watering: 'Keep soil moist during growing season, dry during dormancy',
      soil: 'Rich, well-draining soil with organic matter',
      fertilizer: 'High-nitrogen fertilizer during growing season'
    }
  },
  {
    id: 'blue-passion-flower',
    name: 'Blue Passion Flower',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Intricate blue flower with complex structure representing the passion of Christ, climbing vine.',
    colors: ['Blue', 'Purple', 'White'],
    difficulty: 'Medium',
    bloomTime: 'Summer to Fall',
    country: 'Brazil',
    care: {
      temperature: '65-80°F (18-27°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Regular watering, drought tolerant once established',
      soil: 'Well-draining, slightly alkaline soil (pH 7.0-8.0)',
      fertilizer: 'Balanced fertilizer monthly during growing season'
    }
  },
  {
    id: 'fire-lily',
    name: 'Fire Lily',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Climbing lily with flame-colored petals that seem to dance in the breeze, rare in cultivation.',
    colors: ['Bright Red', 'Orange', 'Yellow'],
    difficulty: 'Hard',
    bloomTime: 'Summer',
    country: 'South Africa',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '50-70%',
      sunlight: '6 hours morning sun, afternoon shade',
      watering: 'Regular watering during growing season, reduce in winter',
      soil: 'Well-draining, sandy soil (pH 6.0-7.0)',
      fertilizer: 'Low-nitrogen fertilizer during growing season'
    }
  },
  {
    id: 'night-blooming-cereus',
    name: 'Night-Blooming Cereus',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cactus flower that blooms for just one night per year, with large, fragrant white flowers.',
    colors: ['Pure White', 'Cream'],
    difficulty: 'Medium',
    bloomTime: 'One night in summer',
    country: 'Mexico',
    care: {
      temperature: '65-85°F (18-29°C)',
      humidity: '30-50%',
      sunlight: 'Bright, indirect light',
      watering: 'Water sparingly, allow to dry completely between waterings',
      soil: 'Cactus mix, very well-draining',
      fertilizer: 'Cactus fertilizer once in spring'
    }
  },
  {
    id: 'rainbow-eucalyptus-flower',
    name: 'Rainbow Eucalyptus Flower',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Flowers from the famous rainbow bark eucalyptus tree, small but produced on one of nature\'s most colorful trees.',
    colors: ['White', 'Cream'],
    difficulty: 'Hard',
    bloomTime: 'Year-round in tropical climates',
    country: 'Philippines',
    care: {
      temperature: '70-85°F (21-29°C)',
      humidity: '60-80%',
      sunlight: '8+ hours direct sunlight',
      watering: 'Regular watering, drought tolerant once established',
      soil: 'Well-draining, slightly acidic soil',
      fertilizer: 'Balanced fertilizer quarterly'
    }
  },
  {
    id: 'living-stone-flower',
    name: 'Living Stone Flower',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Succulent that perfectly mimics stones until it produces bright daisy-like flowers.',
    colors: ['Yellow', 'White', 'Orange', 'Pink'],
    difficulty: 'Hard',
    bloomTime: 'Fall',
    country: 'South Africa',
    care: {
      temperature: '65-80°F (18-27°C)',
      humidity: '20-40%',
      sunlight: '6+ hours direct sunlight',
      watering: 'Water very sparingly, only when soil is completely dry',
      soil: 'Very well-draining, sandy soil',
      fertilizer: 'No fertilizer needed'
    }
  },
  {
    id: 'dragon-arum',
    name: 'Dragon Arum',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dramatic Mediterranean flower with dark purple spathe and foul odor to attract fly pollinators.',
    colors: ['Dark Purple', 'Black', 'Deep Red'],
    difficulty: 'Medium',
    bloomTime: 'Spring',
    country: 'Greece',
    care: {
      temperature: '60-75°F (15-24°C)',
      humidity: '50-70%',
      sunlight: '4-6 hours filtered sunlight',
      watering: 'Regular watering during growing season, dry during dormancy',
      soil: 'Well-draining, rocky soil (pH 7.0-8.0)',
      fertilizer: 'Balanced fertilizer monthly during growing season'
    }
  },
  {
    id: 'sensitive-plant-flower',
    name: 'Sensitive Plant Flower',
    category: 'rare',
    image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Plant with leaves that fold when touched, producing small pink puffball flowers.',
    colors: ['Pink', 'Purple', 'White'],
    difficulty: 'Easy',
    bloomTime: 'Summer',
    country: 'Brazil',
    care: {
      temperature: '70-80°F (21-27°C)',
      humidity: '50-70%',
      sunlight: '6 hours direct sunlight',
      watering: 'Keep soil consistently moist',
      soil: 'Well-draining, fertile soil (pH 6.0-7.0)',
      fertilizer: 'Balanced fertilizer monthly during growing season'
    }
  }
];