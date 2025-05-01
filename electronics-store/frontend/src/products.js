const products = [
  // Phones
  {
    id: 1,
    name: 'Smartphone X',
    price: 799,
    description: 'Latest smartphone with advanced camera features',
    image: 'https://via.placeholder.com/300x200?text=Smartphone+X',
    category: 'phones'
  },
  {
    id: 2,
    name: 'Smartphone Z',
    price: 699,
    description: 'Affordable smartphone with great performance',
    image: 'https://via.placeholder.com/300x200?text=Smartphone+Z',
    category: 'phones'
  },
  {
    id: 3,
    name: 'Phone 12 Pro',
    price: 999,
    description: 'iPhone 12 Pro with 5G and Pro camera system',
    image: 'https://via.placeholder.com/300x200?text=Phone+12+Pro',
    category: 'phones'
  },
  {
    id: 4,
    name: 'Galaxy S21',
    price: 899,
    description: 'Samsung Galaxy S21 with high-end features',
    image: 'https://via.placeholder.com/300x200?text=Galaxy+S21',
    category: 'phones'
  },
  {
    id: 5,
    name: 'OnePlus 9',
    price: 749,
    description: 'OnePlus 9 with 120Hz Fluid AMOLED display',
    image: 'https://via.placeholder.com/300x200?text=OnePlus+9',
    category: 'phones'
  },

  // TVs
  {
    id: 6,
    name: 'Ultra HD TV',
    price: 1299,
    description: '65-inch 4K Ultra HD Smart TV',
    image: 'https://via.placeholder.com/300x200?text=Ultra+HD+TV',
    category: 'tvs'
  },
  {
    id: 7,
    name: 'Samsung 75" QLED',
    price: 2399,
    description: '75-inch 4K QLED Smart TV with Quantum Dot technology',
    image: 'https://via.placeholder.com/300x200?text=Samsung+QLED',
    category: 'tvs'
  },
  {
    id: 8,
    name: 'LG OLED TV',
    price: 1999,
    description: 'LG OLED TV with perfect black levels and vivid colors',
    image: 'https://via.placeholder.com/300x200?text=LG+OLED+TV',
    category: 'tvs'
  },
  {
    id: 9,
    name: 'Sony Bravia XR',
    price: 1799,
    description: 'Sony Bravia XR 55-inch 4K Smart TV with Google Assistant',
    image: 'https://via.placeholder.com/300x200?text=Sony+Bravia',
    category: 'tvs'
  },
  {
    id: 10,
    name: 'Vizio 55" Smart TV',
    price: 499,
    description: 'Affordable 55-inch 4K Smart TV',
    image: 'https://via.placeholder.com/300x200?text=Vizio+Smart+TV',
    category: 'tvs'
  },

  // Audio
  {
    id: 11,
    name: 'Wireless Headphones',
    price: 199,
    description: 'Noise cancelling wireless headphones',
    image: 'https://via.placeholder.com/300x200?text=Wireless+Headphones',
    category: 'audio'
  },
  {
    id: 12,
    name: 'Bose SoundLink',
    price: 299,
    description: 'Bose SoundLink Bluetooth speaker with premium sound',
    image: 'https://via.placeholder.com/300x200?text=Bose+SoundLink',
    category: 'audio'
  },
  {
    id: 13,
    name: 'Sony Noise Cancelling',
    price: 349,
    description: 'Sony WH-1000XM4 Noise Cancelling Headphones',
    image: 'https://via.placeholder.com/300x200?text=Sony+Headphones',
    category: 'audio'
  },
  {
    id: 14,
    name: 'JBL Flip 5',
    price: 129,
    description: 'JBL Flip 5 Waterproof Bluetooth speaker',
    image: 'https://via.placeholder.com/300x200?text=JBL+Flip+5',
    category: 'audio'
  },
  {
    id: 15,
    name: 'Beats Studio3',
    price: 379,
    description: 'Beats Studio3 Wireless Over-Ear Headphones',
    image: 'https://via.placeholder.com/300x200?text=Beats+Studio3',
    category: 'audio'
  },

  // Computers
  {
    id: 16,
    name: 'Laptop Pro',
    price: 1499,
    description: 'High-performance laptop for professionals',
    image: 'https://via.placeholder.com/300x200?text=Laptop+Pro',
    category: 'computers'
  },
  {
    id: 17,
    name: 'MacBook Air',
    price: 999,
    description: 'Apple MacBook Air with M1 chip',
    image: 'https://via.placeholder.com/300x200?text=MacBook+Air',
    category: 'computers'
  },
  {
    id: 18,
    name: 'Dell XPS 13',
    price: 1299,
    description: 'Dell XPS 13 with 11th Gen Intel processor',
    image: 'https://via.placeholder.com/300x200?text=Dell+XPS+13',
    category: 'computers'
  },
  {
    id: 19,
    name: 'Lenovo ThinkPad',
    price: 1099,
    description: 'Lenovo ThinkPad for business professionals',
    image: 'https://via.placeholder.com/300x200?text=Lenovo+ThinkPad',
    category: 'computers'
  },
  {
    id: 20,
    name: 'Asus ROG Strix',
    price: 1699,
    description: 'Asus ROG Strix gaming laptop with powerful GPU',
    image: 'https://via.placeholder.com/300x200?text=Asus+ROG+Strix',
    category: 'computers'
  },

  // Wearables
  {
    id: 21,
    name: 'Smart Watch',
    price: 249,
    description: 'Fitness tracking and notifications',
    image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
    category: 'wearables'
  },
  {
    id: 22,
    name: 'Apple Watch Series 7',
    price: 399,
    description: 'Apple Watch Series 7 with new design and larger screen',
    image: 'https://via.placeholder.com/300x200?text=Apple+Watch+Series+7',
    category: 'wearables'
  },
  {
    id: 23,
    name: 'Samsung Galaxy Watch 4',
    price: 299,
    description: 'Samsung Galaxy Watch 4 with health features',
    image: 'https://via.placeholder.com/300x200?text=Galaxy+Watch+4',
    category: 'wearables'
  },
  {
    id: 24,
    name: 'Fitbit Charge 5',
    price: 179,
    description: 'Fitbit Charge 5 with built-in GPS',
    image: 'https://via.placeholder.com/300x200?text=Fitbit+Charge+5',
    category: 'wearables'
  },
  {
    id: 25,
    name: 'Garmin Venu 2',
    price: 399,
    description: 'Garmin Venu 2 with AMOLED display and fitness tracking',
    image: 'https://via.placeholder.com/300x200?text=Garmin+Venu+2',
    category: 'wearables'
  },

  // Gaming
  {
    id: 26,
    name: 'Gaming Console',
    price: 499,
    description: 'Next-gen gaming experience',
    image: 'https://via.placeholder.com/300x200?text=Gaming+Console',
    category: 'gaming'
  },
  {
    id: 27,
    name: 'PlayStation 5',
    price: 499,
    description: 'PlayStation 5 with lightning-fast loading',
    image: 'https://via.placeholder.com/300x200?text=PlayStation+5',
    category: 'gaming'
  },
  {
    id: 28,
    name: 'Xbox Series X',
    price: 499,
    description: 'Xbox Series X with 4K gaming',
    image: 'https://via.placeholder.com/300x200?text=Xbox+Series+X',
    category: 'gaming'
  },
  {
    id: 29,
    name: 'Nintendo Switch OLED',
    price: 349,
    description: 'Nintendo Switch OLED with vibrant display',
    image: 'https://via.placeholder.com/300x200?text=Nintendo+Switch+OLED',
    category: 'gaming'
  },
  {
    id: 30,
    name: 'Oculus Quest 2',
    price: 299,
    description: 'Oculus Quest 2 VR headset with immersive experience',
    image: 'https://via.placeholder.com/300x200?text=Oculus+Quest+2',
    category: 'gaming'
  }
];

export default products;
