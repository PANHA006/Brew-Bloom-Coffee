# ☕ Brew & Bloom Coffee - Backend REST API

This is the backend REST API server built with **Node.js** and **Express.js** for the Brew & Bloom Coffee Shop project. It provides endpoints for categories, coffee & bakery products, customers, and orders matching the 5 ERD database tables.

---

## 🚀 How to Run the Server

1. Open your terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies (if running for the first time):
   ```bash
   npm install
   ```

3. Start the server in development mode (with auto-reload):
   ```bash
   npm run dev
   ```
   Or in normal production mode:
   ```bash
   npm start
   ```

4. The server will run at:
   ```
   http://localhost:5000
   ```

---

## 📋 API Endpoints Reference Table

| Method | Endpoint URL | Description | Test in Browser |
| :--- | :--- | :--- | :---: |
| **GET** | `http://localhost:5000/` | Interactive API Dashboard (visual webpage with links) | [Open](http://localhost:5000/) |
| **GET** | `http://localhost:5000/api/categories` | Get all product categories | [Open](http://localhost:5000/api/categories) |
| **GET** | `http://localhost:5000/api/products` | Get all products (4 Signature Coffees + Bakery) | [Open](http://localhost:5000/api/products) |
| **GET** | `http://localhost:5000/api/products/1` | Get single product details by ID (e.g. Espresso) | [Open](http://localhost:5000/api/products/1) |
| **GET** | `http://localhost:5000/api/customers` | Get list of registered customers | [Open](http://localhost:5000/api/customers) |
| **GET** | `http://localhost:5000/api/orders` | Get all placed orders | [Open](http://localhost:5000/api/orders) |
| **GET** | `http://localhost:5000/api/orders/ORD-0001` | Get single order by Order ID | [Open](http://localhost:5000/api/orders/ORD-0001) |
| **POST** | `http://localhost:5000/api/orders` | Place a new order (Postman / cURL) | *Use Postman* |

---

## 🔍 Detailed Endpoints & Sample Responses

### 1. Categories API

#### `GET /api/categories`
Returns all product categories.

* **URL:** `http://localhost:5000/api/categories`
* **Sample Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "category_id": 1,
      "category_name": "Coffee & Drinks",
      "description": "Freshly brewed artisan coffees and specialty teas"
    },
    {
      "category_id": 2,
      "category_name": "Fresh Bakery",
      "description": "Oven-fresh pastries and artisanal baked sweets"
    }
  ]
}
```

---

### 2. Products API

#### `GET /api/products`
Returns all products.

* **URL:** `http://localhost:5000/api/products`
* **Query Parameters (Optional):**
  * `categoryId`: Filter by category (e.g. `http://localhost:5000/api/products?categoryId=1`)
  * `search`: Filter by name keyword (e.g. `http://localhost:5000/api/products?search=latte`)
* **Sample Response:**
```json
{
  "success": true,
  "count": 8,
  "data": [
    {
      "product_id": 1,
      "category_id": 1,
      "product_name": "Espresso",
      "description": "Double shot, rich, intense aroma and velvety crema",
      "price": 2.50,
      "icon": "☕",
      "is_available": true
    },
    {
      "product_id": 2,
      "category_id": 1,
      "product_name": "Cappuccino",
      "description": "Rich espresso balanced with steamed milk and dense foam",
      "price": 3.75,
      "icon": "🥛",
      "is_available": true
    },
    {
      "product_id": 3,
      "category_id": 1,
      "product_name": "Iced Latte",
      "description": "Smooth espresso poured over chilled fresh milk and light ice",
      "price": 4.25,
      "icon": "🧋",
      "is_available": true
    },
    {
      "product_id": 4,
      "category_id": 1,
      "product_name": "Matcha Latte",
      "description": "Premium ceremonial Japanese matcha whisked with creamy oat milk",
      "price": 4.50,
      "icon": "🍵",
      "is_available": true
    }
  ]
}
```

#### `GET /api/products/:id`
Returns a specific product by its integer ID.

* **URL:** `http://localhost:5000/api/products/1`
* **Sample Response:**
```json
{
  "success": true,
  "data": {
    "product_id": 1,
    "category_id": 1,
    "product_name": "Espresso",
    "description": "Double shot, rich, intense aroma and velvety crema",
    "price": 2.50,
    "icon": "☕",
    "is_available": true
  }
}
```

---

### 3. Customers API

#### `GET /api/customers`
Returns all customers.

* **URL:** `http://localhost:5000/api/customers`
* **Sample Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "customer_id": 1,
      "first_name": "Sokha",
      "last_name": "Chan",
      "email": "sokha.chan@example.com",
      "phone_number": "012 345 678",
      "address": "12 Street 240, Daun Penh, Phnom Penh",
      "created_at": "2026-11-20T08:30:00Z"
    }
  ]
}
```

---

### 4. Orders API

#### `GET /api/orders`
Returns all orders placed in the system.

* **URL:** `http://localhost:5000/api/orders`
* **Sample Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "order_id": 1,
      "customer_id": 1,
      "order_number": "ORD-0001",
      "customer_name": "Sokha Chan",
      "email": "sokha.chan@example.com",
      "phone_number": "012 345 678",
      "address": "12 Street 240, Daun Penh, Phnom Penh",
      "shipping_method": "Standard Coffee Delivery",
      "shipping_fee": 1.50,
      "subtotal": 6.25,
      "total_amount": 7.75,
      "order_status": "Pending",
      "order_date": "2026-11-22T13:45:00Z",
      "items": [
        {
          "order_item_id": 1,
          "product_id": 1,
          "product_name": "Espresso",
          "icon": "☕",
          "quantity": 1,
          "unit_price": 2.50,
          "subtotal": 2.50
        },
        {
          "order_item_id": 2,
          "product_id": 2,
          "product_name": "Cappuccino",
          "icon": "🥛",
          "quantity": 1,
          "unit_price": 3.75,
          "subtotal": 3.75
        }
      ]
    }
  ]
}
```

#### `GET /api/orders/:orderId`
Returns a specific order by its Order ID (e.g. `ORD-0001`).

* **URL:** `http://localhost:5000/api/orders/ORD-0001`

---

#### `POST /api/orders`
Creates and places a new order.

* **URL:** `http://localhost:5000/api/orders`
* **Method:** `POST`
* **Headers:** `Content-Type: application/json`
* **Request Body Example:**
```json
{
  "firstName": "Dara",
  "lastName": "Vann",
  "email": "dara.vann@example.com",
  "phoneNumber": "098 765 432",
  "address": "45 Street 310, BKK1, Phnom Penh",
  "shippingMethod": "Express Priority Delivery",
  "shippingFee": 3.00,
  "items": [
    {
      "id": 1,
      "name": "Espresso",
      "price": 2.50,
      "quantity": 2
    },
    {
      "id": 5,
      "name": "Butter Croissant",
      "price": 2.75,
      "quantity": 1
    }
  ]
}
```

* **Success Response (`201 Created`):**
```json
{
  "success": true,
  "message": "Order Placed Successfully!",
  "data": {
    "order_id": 2,
    "customer_id": 3,
    "order_number": "ORD-5821",
    "customer_name": "Dara Vann",
    "email": "dara.vann@example.com",
    "phone_number": "098 765 432",
    "address": "45 Street 310, BKK1, Phnom Penh",
    "shipping_method": "Express Priority Delivery",
    "shipping_fee": 3,
    "subtotal": 7.75,
    "total_amount": 10.75,
    "order_status": "Pending",
    "order_date": "2026-11-22T14:20:00.000Z",
    "items": [
      {
        "order_item_id": 1,
        "product_id": 1,
        "product_name": "Espresso",
        "icon": "☕",
        "quantity": 2,
        "unit_price": 2.50,
        "subtotal": 5.00
      },
      {
        "order_item_id": 2,
        "product_id": 5,
        "product_name": "Butter Croissant",
        "icon": "☕",
        "quantity": 1,
        "unit_price": 2.75,
        "subtotal": 2.75
      }
    ]
  }
}
```

---

## 🗄️ Database Mapping (5 ERD Tables)

The API data models directly represent the 5 tables required in Exercise 4:
1. `Categories` ➔ `/api/categories`
2. `Products` ➔ `/api/products` & `/api/products/:id`
3. `Customers` ➔ `/api/customers`
4. `Orders` ➔ `/api/orders` & `/api/orders/:orderId`
5. `Order_Items` ➔ Nested in `items` array inside each Order object
