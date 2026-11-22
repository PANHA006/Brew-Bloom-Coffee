import { coffeeProducts } from '../data/coffeeProducts'

export default function Menu({ onAddToCart, cart = [] }) {
  const drinks = coffeeProducts.filter((item) => item.categoryId === 1)
  const bakes = coffeeProducts.filter((item) => item.categoryId === 2)

  const getItemQuantity = (id) => {
    const found = cart.find((item) => item.id === id)
    return found ? found.quantity : 0
  }

  const renderProductCard = (item) => {
    const qty = getItemQuantity(item.id)

    return (
      <div
        key={item.id}
        className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 transition-all hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center gap-4"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-3xl">
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-stone-900">{item.name}</h4>
            </div>
            <p className="mt-1 text-xs text-stone-500 leading-relaxed">{item.desc}</p>
          </div>
        </div>

        {/* Price & Add to Cart button */}
        <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t border-stone-100 sm:border-0">
          <span className="text-lg font-extrabold text-amber-900">
            ${item.price.toFixed(2)}
          </span>

          <button
            onClick={() => onAddToCart(item)}
            className="group relative flex items-center gap-2 rounded-full bg-amber-800 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-amber-900 hover:shadow active:scale-95"
          >
            <span>+ Add to Cart</span>
            {qty > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-amber-900 shadow">
                {qty}
              </span>
            )}
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="menu" className="scroll-mt-20 bg-stone-50/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
            Brewed &amp; Baked Daily
          </h2>
          <p className="mt-4 text-base text-stone-600">
            Every cup is pulled to order and every pastry comes fresh out of our oven.
            Select your favorite items and add them to your cart!
          </p>
        </div>

        {/* Coffee & Drinks (Practical Exercise 1: 4 Products) */}
        <div className="mt-16">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                ☕ Coffee &amp; Drinks (Signature 4 Items)
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Practical Exercise 1: Espresso, Cappuccino, Iced Latte &amp; Matcha Latte
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-800">4 Items Available</span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {drinks.map(renderProductCard)}
          </div>
        </div>

        {/* Bakery */}
        <div className="mt-16">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                🥐 Fresh Bakery &amp; Pastries
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Freshly baked artisanal treats to pair with your cup
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-800">4 Items Available</span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {bakes.map(renderProductCard)}
          </div>
        </div>
      </div>
    </section>
  )
}
