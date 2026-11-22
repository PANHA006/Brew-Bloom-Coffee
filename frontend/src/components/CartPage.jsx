import { useState } from 'react'

export default function CartPage({
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onNavigate,
}) {
  const [showClearModal, setShowClearModal] = useState(false)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] bg-stone-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
            ☕
          </div>
          <h2 className="text-3xl font-bold text-stone-900">Your Cart is Empty</h2>
          <p className="mt-3 text-stone-600">
            Looks like you haven&apos;t added any delicious coffee or bakery items to your cart yet.
          </p>
          <button
            onClick={() => onNavigate('home')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-800 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-amber-900 hover:shadow-xl"
          >
            ← Explore Coffee Menu
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-[75vh] bg-stone-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb / Title */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <div className="flex items-center gap-2 text-sm text-amber-800 font-medium">
              <button
                onClick={() => onNavigate('home')}
                className="hover:underline"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-stone-500">Shopping Cart</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold text-stone-900">
              Shopping Cart ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              + Add More Items
            </button>
            <button
              onClick={() => setShowClearModal(true)}
              className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100 active:scale-95"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items List - Unified in 1 Card Container */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 divide-y divide-stone-100">
              {cart.map((item) => {
                const itemTotal = item.price * item.quantity
                return (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 p-5 transition-colors hover:bg-stone-50/50 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-2xl shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-stone-900 text-base">{item.name}</h3>
                        <p className="text-xs text-stone-500 max-w-sm line-clamp-1">{item.desc}</p>
                        <p className="mt-0.5 font-semibold text-amber-800 text-sm">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 pt-2 sm:pt-0 border-t border-stone-100 sm:border-0">
                      {/* QTY Control */}
                      <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50 p-1">
                        <button
                          type="button"
                          disabled={item.quantity <= 1}
                          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                          className={`flex h-7 w-7 items-center justify-center rounded-lg shadow-sm transition ${
                            item.quantity <= 1
                              ? 'cursor-not-allowed bg-stone-100 text-stone-300 opacity-50'
                              : 'bg-white text-stone-700 hover:bg-amber-100 hover:text-amber-900 active:scale-95'
                          }`}
                          title={item.quantity <= 1 ? 'Minimum quantity is 1' : 'Reduce quantity'}
                        >
                          -
                        </button>
                        <span className="w-9 text-center text-sm font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-stone-700 shadow-sm transition hover:bg-amber-100 hover:text-amber-900 active:scale-95"
                          title="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Total & Remove */}
                      <div className="text-right min-w-[70px]">
                        <div className="text-base font-bold text-stone-900">
                          ${itemTotal.toFixed(2)}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-xs font-medium text-red-500 hover:text-red-700 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Cart Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Cart Summary
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal ({totalItemsCount} items)</span>
                  <span className="font-semibold text-stone-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Estimated Tax</span>
                  <span className="text-emerald-600 font-medium">Included</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping / Delivery</span>
                  <span className="text-stone-500 italic">Calculated at checkout</span>
                </div>
              </div>

              <div className="my-5 border-t border-stone-200 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-base font-bold text-stone-900">Estimated Total</span>
                  <span className="text-2xl font-extrabold text-amber-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-400">
                  Local delivery in Phnom Penh available.
                </p>
              </div>

              {/* Proceed to Checkout Button */}
              <button
                onClick={() => onNavigate('checkout')}
                className="w-full rounded-xl bg-amber-800 py-3.5 font-bold text-white shadow-md transition hover:bg-amber-900 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2"
              >
                Proceed to Checkout →
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="mt-3 w-full rounded-xl border border-stone-200 py-2.5 text-center text-sm font-semibold text-stone-600 hover:bg-stone-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Clear Cart */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl ring-1 ring-stone-200">
            {/* Trash Icon */}
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl shadow-inner">
              🗑️
            </div>

            <h3 className="text-xl font-bold text-stone-900">
              Clear Shopping Cart?
            </h3>
            <p className="mt-2 text-sm text-stone-500 leading-relaxed">
              Are you sure you want to remove all items from your cart? This action cannot be undone.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowClearModal(false)}
                className="flex-1 rounded-xl border border-stone-200 bg-stone-100 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-200 active:scale-95"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onClearCart()
                  setShowClearModal(false)
                }}
                className="flex-1 rounded-xl bg-red-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 active:scale-95"
              >
                Yes, Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
