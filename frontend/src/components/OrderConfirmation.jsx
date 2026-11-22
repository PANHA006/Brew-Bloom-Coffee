export default function OrderConfirmation({ order, onResetOrder }) {
  if (!order) {
    return null
  }

  return (
    <section className="min-h-[80vh] bg-stone-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Success Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-stone-200">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-900 px-8 py-10 text-center text-white">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-3xl shadow-lg ring-4 ring-white/20">
              ✓
            </div>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight">
              Order Placed Successfully!
            </h1>
            <p className="mt-2 text-amber-200">
              Thank you for ordering with Brew &amp; Bloom Coffee. We are preparing your order!
            </p>
          </div>

          {/* Order Details Body */}
          <div className="p-8">
            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-amber-50/70 p-5 sm:grid-cols-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  Order ID
                </span>
                <p className="mt-1 font-mono text-sm font-extrabold text-amber-900">
                  {order.orderId}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  Customer
                </span>
                <p className="mt-1 text-sm font-semibold text-stone-900">
                  {order.customerName}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  Order Date
                </span>
                <p className="mt-1 text-xs font-medium text-stone-800">
                  {order.orderDate}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  Order Status
                </span>
                <div className="mt-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-200/80 px-3 py-0.5 text-xs font-bold text-amber-950">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse"></span>
                    {order.orderStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 rounded-xl border border-stone-200 p-4 text-sm">
              <div className="font-semibold text-stone-900 mb-1">
                📍 Delivery Information:
              </div>
              <div className="text-stone-600">
                <p><span className="font-medium text-stone-700">Phone:</span> {order.phoneNumber}</p>
                <p><span className="font-medium text-stone-700">Method:</span> {order.shippingMethod}</p>
                <p><span className="font-medium text-stone-700">Address:</span> {order.address}</p>
              </div>
            </div>

            {/* Ordered Products Table */}
            <div className="mt-8">
              <h3 className="font-bold text-stone-900 text-lg border-b border-stone-200 pb-2">
                Ordered Products
              </h3>

              <div className="mt-3 divide-y divide-stone-100">
                {order.orderedProducts.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-stone-900 text-sm">
                          {item.name}
                        </div>
                        <div className="text-xs text-stone-500">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <span className="font-semibold text-stone-900 text-sm">
                      ${item.subtotal.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="mt-6 border-t border-stone-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping Fee</span>
                <span>${order.shippingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-stone-100">
                <span className="text-base font-bold text-stone-900">Total Amount</span>
                <span className="text-2xl font-extrabold text-amber-900">
                  ${order.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onResetOrder}
                className="flex-1 rounded-xl bg-amber-800 py-3.5 font-bold text-white shadow-md transition hover:bg-amber-900 text-center"
              >
                ☕ Order More Coffee
              </button>
              <button
                onClick={() => window.print()}
                className="rounded-xl border border-stone-300 bg-white px-6 py-3.5 font-semibold text-stone-700 hover:bg-stone-50 transition"
              >
                🖨️ Print Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
