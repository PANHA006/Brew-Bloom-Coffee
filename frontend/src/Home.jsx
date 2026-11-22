import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import OrderConfirmation from './components/OrderConfirmation'

function Home() {
  const [cart, setCart] = useState([])
  const [currentView, setCurrentView] = useState('home') // 'home' | 'cart' | 'checkout' | 'confirmation'
  const [latestOrder, setLatestOrder] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  // Show temporary toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 2400)
  }

  // 1. Add to cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    triggerToast(`Added ${product.name} to cart! ☕`)
  }

  // 2. Update quantity (+ / -) with minimum of 1
  const handleUpdateQty = (id, newQty) => {
    if (newQty < 1) return
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  // 3. Remove item from cart
  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
    triggerToast('Item removed from cart.')
  }

  // Clear cart
  const handleClearCart = () => {
    setCart([])
    triggerToast('Cart cleared.')
  }

  // Order placed successfully
  const handleOrderSuccess = (orderData) => {
    setLatestOrder(orderData)
    setCart([]) // Clear cart after order
    setCurrentView('confirmation')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Reset to order more coffee
  const handleResetOrder = () => {
    setLatestOrder(null)
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Total cart items
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col justify-between selection:bg-amber-800 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-stone-900 px-5 py-3.5 text-sm font-semibold text-white shadow-2xl transition-all">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header with dynamic cart counter */}
      <Header
        cartCount={totalCartCount}
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      />

      <main className="flex-1">
        {/* VIEW 1: HOME & PRODUCTS CATALOG */}
        {currentView === 'home' && (
          <>
            <Hero />
            <Menu onAddToCart={handleAddToCart} cart={cart} />
            <About />
          </>
        )}

        {/* VIEW 2: SHOPPING CART (Exercise 1) */}
        {currentView === 'cart' && (
          <CartPage
            cart={cart}
            onUpdateQty={handleUpdateQty}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onNavigate={(view) => {
              setCurrentView(view)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        )}

        {/* VIEW 3: CHECKOUT (Exercise 2) */}
        {currentView === 'checkout' && (
          <CheckoutPage
            cart={cart}
            onNavigate={(view) => {
              setCurrentView(view)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            onOrderSuccess={handleOrderSuccess}
          />
        )}

        {/* VIEW 4: ORDER CONFIRMATION (Exercise 3) */}
        {currentView === 'confirmation' && (
          <OrderConfirmation
            order={latestOrder}
            onResetOrder={handleResetOrder}
          />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Home
