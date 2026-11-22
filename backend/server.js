import express from 'express'
import cors from 'cors'
import { categories, products, customers, orders } from './data/mockData.js'

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// In-memory state so new placed orders can be queried
let ordersList = [...orders]
let customersList = [...customers]
let nextOrderId = 2
let nextCustomerId = 3

// -------------------------------------------------------------
// 1. Root Route: Interactive API Dashboard for testing in Browser
// -------------------------------------------------------------
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Brew & Bloom Coffee - REST API</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #fafaf9; color: #292524; padding: 40px 20px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e7e5e4; }
        h1 { color: #78350f; display: flex; align-items: center; gap: 10px; margin-top: 0; }
        .badge { display: inline-block; background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold; }
        .endpoint-card { background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 12px; padding: 14px 18px; margin: 12px 0; display: flex; justify-content: space-between; align-items: center; }
        .method { background: #0284c7; color: white; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: bold; }
        .post-method { background: #16a34a; }
        a { color: #b45309; text-decoration: none; font-weight: 600; font-family: monospace; font-size: 14px; }
        a:hover { text-decoration: underline; color: #78350f; }
        .desc { font-size: 13px; color: #78716c; }
        .status { margin-top: 24px; padding: 12px 16px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 10px; color: #065f46; font-size: 13px; font-weight: 500; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>☕ Brew &amp; Bloom Coffee REST API</h1>
        <p>Welcome to the backend API server built with <strong>Node.js + Express.js</strong>. Click any link below to test the JSON response directly in your browser:</p>
        
        <h3>Available API Endpoints:</h3>

        <div class="endpoint-card">
          <div>
            <span class="method">GET</span>
            <a href="/api/categories" target="_blank">/api/categories</a>
            <div class="desc">Get all product categories (Coffee &amp; Drinks, Bakery)</div>
          </div>
          <span class="badge">JSON</span>
        </div>

        <div class="endpoint-card">
          <div>
            <span class="method">GET</span>
            <a href="/api/products" target="_blank">/api/products</a>
            <div class="desc">Get all 4 signature coffees + bakery products</div>
          </div>
          <span class="badge">JSON</span>
        </div>

        <div class="endpoint-card">
          <div>
            <span class="method">GET</span>
            <a href="/api/products/1" target="_blank">/api/products/1</a>
            <div class="desc">Get details for product #1 (Espresso)</div>
          </div>
          <span class="badge">JSON</span>
        </div>

        <div class="endpoint-card">
          <div>
            <span class="method">GET</span>
            <a href="/api/customers" target="_blank">/api/customers</a>
            <div class="desc">Get registered customers list</div>
          </div>
          <span class="badge">JSON</span>
        </div>

        <div class="endpoint-card">
          <div>
            <span class="method">GET</span>
            <a href="/api/orders" target="_blank">/api/orders</a>
            <div class="desc">Get all placed orders (Exercise 3: ORD-0001, status Pending)</div>
          </div>
          <span class="badge">JSON</span>
        </div>

        <div class="endpoint-card">
          <div>
            <span class="method">GET</span>
            <a href="/api/orders/ORD-0001" target="_blank">/api/orders/ORD-0001</a>
            <div class="desc">Get single order by Order ID</div>
          </div>
          <span class="badge">JSON</span>
        </div>

        <div class="status">
          ✓ Server Status: <strong>Running on http://localhost:${PORT}</strong>
        </div>
      </div>
    </body>
    </html>
  `)
})

// -------------------------------------------------------------
// 2. Categories API
// -------------------------------------------------------------
app.get('/api/categories', (req, res) => {
  res.json({
    success: true,
    count: categories.length,
    data: categories,
  })
})

// -------------------------------------------------------------
// 3. Products API
// -------------------------------------------------------------
// GET /api/products (supports ?categoryId=1 or ?search=latte)
app.get('/api/products', (req, res) => {
  const { categoryId, search } = req.query
  let result = [...products]

  if (categoryId) {
    result = result.filter((p) => p.category_id === parseInt(categoryId, 10))
  }

  if (search) {
    const q = search.toLowerCase()
    result = result.filter((p) => p.product_name.toLowerCase().includes(q))
  }

  res.json({
    success: true,
    count: result.length,
    data: result,
  })
})

// GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const product = products.find((p) => p.product_id === id)

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with ID ${id} not found.`,
    })
  }

  res.json({
    success: true,
    data: product,
  })
})

// -------------------------------------------------------------
// 4. Customers API
// -------------------------------------------------------------
app.get('/api/customers', (req, res) => {
  res.json({
    success: true,
    count: customersList.length,
    data: customersList,
  })
})

// -------------------------------------------------------------
// 5. Orders API (Exercise 2 & 3 in PDF)
// -------------------------------------------------------------
// GET /api/orders
app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    count: ordersList.length,
    data: ordersList,
  })
})

// GET /api/orders/:orderId (e.g. /api/orders/ORD-0001)
app.get('/api/orders/:orderId', (req, res) => {
  const { orderId } = req.params
  const order = ordersList.find(
    (o) => o.order_number.toLowerCase() === orderId.toLowerCase()
  )

  if (!order) {
    return res.status(404).json({
      success: false,
      message: `Order ${orderId} not found.`,
    })
  }

  res.json({
    success: true,
    data: order,
  })
})

// POST /api/orders (Create new order)
app.post('/api/orders', (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    shippingMethod = 'Standard Coffee Delivery',
    shippingFee = 1.5,
    items = [],
  } = req.body

  // Validation
  if (!firstName || !lastName || !email || !phoneNumber || !address) {
    return res.status(400).json({
      success: false,
      message: 'Validation error: firstName, lastName, email, phoneNumber, and address are required.',
    })
  }

  if (!items || items.length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation error: Order must contain at least 1 item.',
    })
  }

  // Calculate Subtotal & Grand Total
  const subtotal = items.reduce(
    (sum, item) => sum + (item.price || item.unit_price) * item.quantity,
    0
  )
  const totalAmount = subtotal + Number(shippingFee)

  // Generate unique Order Number
  const randomSuffix = Math.floor(1000 + Math.random() * 9000)
  const orderNumber = `ORD-${randomSuffix}`

  const newOrder = {
    order_id: nextOrderId++,
    customer_id: nextCustomerId++,
    order_number: orderNumber,
    customer_name: `${firstName} ${lastName}`,
    email,
    phone_number: phoneNumber,
    address,
    shipping_method: shippingMethod,
    shipping_fee: Number(shippingFee),
    subtotal: Number(subtotal.toFixed(2)),
    total_amount: Number(totalAmount.toFixed(2)),
    order_status: 'Pending',
    order_date: new Date().toISOString(),
    items: items.map((item, index) => ({
      order_item_id: index + 1,
      product_id: item.id || item.product_id,
      product_name: item.name || item.product_name,
      icon: item.icon || '☕',
      quantity: item.quantity,
      unit_price: item.price || item.unit_price,
      subtotal: Number(((item.price || item.unit_price) * item.quantity).toFixed(2)),
    })),
  }

  ordersList.unshift(newOrder)

  res.status(201).json({
    success: true,
    message: 'Order Placed Successfully!',
    data: newOrder,
  })
})

// Start Express Server
app.listen(PORT, () => {
  console.log(`☕ Brew & Bloom Coffee Backend API running on http://localhost:${PORT}`)
})
