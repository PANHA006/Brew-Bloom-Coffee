export const categories = [
  { id: 1, name: 'Coffee & Drinks', description: 'Freshly brewed artisan coffees and specialty teas' },
  { id: 2, name: 'Fresh Bakery', description: 'Oven-fresh pastries and artisanal baked sweets' }
]

export const coffeeProducts = [
  // 4 Primary Coffee Drinks (matching the 4 products requirement from Exercise 1)
  {
    id: 1,
    categoryId: 1,
    name: 'Espresso',
    desc: 'Double shot, rich, intense aroma and velvety crema',
    price: 2.50,
    icon: '☕',
    isSignature: true,
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Cappuccino',
    desc: 'Rich espresso balanced with steamed milk and dense foam',
    price: 3.75,
    icon: '🥛',
    isSignature: true,
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Iced Latte',
    desc: 'Smooth espresso poured over chilled fresh milk and light ice',
    price: 4.25,
    icon: '🧋',
    isSignature: true,
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Matcha Latte',
    desc: 'Premium ceremonial Japanese matcha whisked with creamy oat milk',
    price: 4.50,
    icon: '🍵',
    isSignature: true,
  },

  // Bakery Items
  {
    id: 5,
    categoryId: 2,
    name: 'Butter Croissant',
    desc: 'Golden flaky layers baked fresh every single morning',
    price: 2.75,
    icon: '🥐',
    isSignature: false,
  },
  {
    id: 6,
    categoryId: 2,
    name: 'Basque Cheesecake',
    desc: 'Creamy custard centre with a beautifully caramelised top',
    price: 5.00,
    icon: '🍰',
    isSignature: false,
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Chocolate Cookie',
    desc: 'Gooey 70% dark Belgian chocolate with flakes of sea salt',
    price: 2.25,
    icon: '🍪',
    isSignature: false,
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Banana Bread',
    desc: 'Moist walnut banana loaf drizzled with wild organic honey',
    price: 3.50,
    icon: '🍞',
    isSignature: false,
  },
]
