export interface TradeFruit {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical';
  price: number;
  value: number;
  image: string;
  color: string;
}

export const fruits: TradeFruit[] = [
  // --- MYTHICAL ---
  {
    id: 'kitsune',
    name: 'Kitsune',
    rarity: 'Mythical',
    price: 8000000,
    value: 115000000,
    image: '/kitsune.png',
    color: 'text-blue-300'
  },
  {
    id: 'dragon',
    name: 'Dragon (West)',
    rarity: 'Mythical',
    price: 3500000,
    value: 115000000,
    image: '/dragon.png',
    color: 'text-red-500'
  },
  {
    id: 'leopard',
    name: 'Leopard',
    rarity: 'Mythical',
    price: 5000000,
    value: 40000000,
    image: '/leopard.png', // <--- Esperando você baixar
    color: 'text-yellow-500'
  },
  {
    id: 'dough',
    name: 'Dough',
    rarity: 'Mythical',
    price: 2800000,
    value: 20000000,
    image: '/dough.png', // <--- Esperando você baixar
    color: 'text-yellow-200'
  },
  {
    id: 'trex',
    name: 'T-Rex',
    rarity: 'Mythical',
    price: 2700000,
    value: 15000000,
    image: '/trex.png', // <--- Esperando você baixar
    color: 'text-green-700'
  },
  {
    id: 'spirit',
    name: 'Spirit',
    price: 3400000,
    value: 10000000,
    image: '/spirit.png',
    rarity: 'Mythical',
    color: 'text-blue-200',

  },
  {
    id: 'venom',
    price: 3000000,
    name: 'Venom',
    value: 9000000,
    image: '/venom.png',
    rarity: 'Mythical',
    color: 'text-purple-500',

  },
  // --- LEGENDARY ---
  {
    id: 'buddha',
    name: 'Buddha',
    rarity: 'Legendary',
    price: 1200000,
    value: 6000000,
    image: '/buddha.png', // <--- Esperando você baixar
    color: 'text-yellow-400'
  },
  {
    id: 'portal',
    name: 'Portal',
    rarity: 'Legendary',
    price: 1900000,
    value: 5000000,
    image: '/portal.png', // <--- Esperando você baixar
    color: 'text-blue-400'
  },
  {
    id: 'rumble',
    name: 'Rumble',
    rarity: 'Legendary',
    price: 2100000,
    value: 4500000,
    image: '/rumble.png', // <--- Esperando você baixar
    color: 'text-blue-500'
  },

  // --- RARE & UNCOMMON ---
  {
    id: 'magma',
    name: 'Magma',
    rarity: 'Rare',
    price: 850000,
    value: 900000,
    image: '/magma.png', // <--- Esperando você baixar
    color: 'text-red-600'
  },
  {
    id: 'ice',
    name: 'Ice',
    rarity: 'Uncommon',
    price: 350000,
    value: 500000,
    image: '/ice.png', // <--- Esperando você baixar
    color: 'text-blue-200'
  },
  {
    id: 'rocket',
    name: 'Rocket',
    rarity: 'Common',
    price: 5000,
    value: 1000,
    image: '/rocket.png',
    color: 'text-gray-400'
  }
];
