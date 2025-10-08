export const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
  { id: 'clothing', name: 'เสื้อผ้า' },
  { id: 'books', name: 'หนังสือ' }
];

export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'electronics',
    price: 45900,
    originalPrice: 49900,
    discount: 8,   // เปอร์เซนต์
    image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
    description: 'สมาร์ทโฟนล่าสุดจาก Apple',
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: 'เสื้อยืดผ้าฝ้าย',
    category: 'clothing',
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
    description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
    inStock: true,
    rating: 4.2
  },
  {
    id: 3,
    name: 'หนังสือ React.js Guide',
    category: 'books',
    price: 650,
    originalPrice: 650,
    discount: 0,
    image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
    description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
    inStock: false,
    rating: 4.7
  },
  // สินค้าเพิ่มเติม
  {
    id: 4,
    name: 'หูฟังไร้สาย Bluetooth',
    category: 'electronics',
    price: 1290,
    originalPrice: 1590,
    discount: 19,
    image: 'https://placehold.co/300x300/28a745/ffffff?text=Headphones',
    description: 'หูฟังไร้สายคุณภาพเสียงดี กันเสียงรบกวนได้บางส่วน',
    inStock: true,
    rating: 4.4
  },
  {
    id: 5,
    name: 'กางเกงยีนส์',
    category: 'clothing',
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: 'https://placehold.co/300x300/6f42c1/ffffff?text=Jeans',
    description: 'กางเกงยีนส์ทรงตรง ใส่สบายทุกวัน',
    inStock: true,
    rating: 4.6
  },
  {
    id: 6,
    name: 'หนังสือนิยาย “ความฝัน”',
    category: 'books',
    price: 320,
    originalPrice: 350,
    discount: 9,
    image: 'https://placehold.co/300x300/f06595/ffffff?text=Novel',
    description: 'นิยายสะท้อนชีวิตและความฝันของคนในเมืองใหญ่',
    inStock: true,
    rating: 4.1
  }
];
