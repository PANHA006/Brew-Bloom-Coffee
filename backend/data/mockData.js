// Mock Database matching the 5 ERD Tables: Categories, Products, Customers, Orders, Order_Items

export const categories = [
  {
    category_id: 1,
    category_name: 'Coffee & Drinks',
    description: 'Freshly brewed artisan coffees and specialty teas',
  },
  {
    category_id: 2,
    category_name: 'Fresh Bakery',
    description: 'Oven-fresh pastries and artisanal baked sweets',
  },
]

export const products = [
  // 4 Signature Coffee Drinks (Practical Exercise 1)
  {
    product_id: 1,
    category_id: 1,
    product_name: 'Espresso',
    description: 'Double shot, rich, intense aroma and velvety crema',
    price: 2.50,
    icon: '☕',
    is_available: true,
  },
  {
    product_id: 2,
    category_id: 1,
    product_name: 'Cappuccino',
    description: 'Rich espresso balanced with steamed milk and dense foam',
    price: 3.75,
    icon: '🥛',
    is_available: true,
  },
  {
    product_id: 3,
    category_id: 1,
    product_name: 'Iced Latte',
    description: 'Smooth espresso poured over chilled fresh milk and light ice',
    price: 4.25,
    icon: '🧋',
    is_available: true,
  },
  {
    product_id: 4,
    category_id: 1,
    product_name: 'Matcha Latte',
    description: 'Premium ceremonial Japanese matcha whisked with creamy oat milk',
    price: 4.50,
    icon: '🍵',
    is_available: true,
  },

  // Bakery Items
  {
    product_id: 5,
    category_id: 2,
    product_name: 'Butter Croissant',
    description: 'Golden flaky layers baked fresh every single morning',
    price: 2.75,
    icon: '🥐',
    is_available: true,
  },
  {
    product_id: 6,
    category_id: 2,
    product_name: 'Basque Cheesecake',
    description: 'Creamy custard centre with a beautifully caramelised top',
    price: 5.00,
    icon: '🍰',
    is_available: true,
  },
  {
    product_id: 7,
    category_id: 2,
    product_name: 'Chocolate Cookie',
    description: 'Gooey 70% dark Belgian chocolate with flakes of sea salt',
    price: 2.25,
    icon: '🍪',
    is_available: true,
  },
  {
    product_id: 8,
    category_id: 2,
    product_name: 'Banana Bread',
    description: 'Moist walnut banana loaf drizzled with wild organic honey',
    price: 3.50,
    icon: '🍞',
    is_available: true,
  },
]

export const customers = [
  {
    customer_id: 1,
    first_name: 'Sokha',
    last_name: 'Chan',
    email: 'sokha.chan@example.com',
    phone_number: '012 345 678',
    address: '12 Street 240, Daun Penh, Phnom Penh',
    created_at: '2026-11-20T08:30:00Z',
  },
  {
    customer_id: 2,
    first_name: 'Dara',
    last_name: 'Vann',
    email: 'dara.vann@example.com',
    phone_number: '098 765 432',
    address: '45 Street 310, BKK1, Phnom Penh',
    created_at: '2026-11-21T09:15:00Z',
  },
]

export const orders = [
  {
    order_id: 1,
    customer_id: 1,
    order_number: 'ORD-0001',
    customer_name: 'Sokha Chan',
    email: 'sokha.chan@example.com',
    phone_number: '012 345 678',
    address: '12 Street 240, Daun Penh, Phnom Penh',
    shipping_method: 'Standard Coffee Delivery',
    shipping_fee: 1.50,
    subtotal: 6.25,
    total_amount: 7.75,
    order_status: 'Pending',
    order_date: '2026-11-22T13:45:00Z',
    items: [
      {
        order_item_id: 1,
        product_id: 1,
        product_name: 'Espresso',
        icon: '☕',
        quantity: 1,
        unit_price: 2.50,
        subtotal: 2.50,
      },
      {
        order_item_id: 2,
        product_id: 2,
        product_name: 'Cappuccino',
        icon: '🥛',
        quantity: 1,
        unit_price: 3.75,
        subtotal: 3.75,
      },
    ],
  },
]
