import { useState } from 'react'

export default function CheckoutPage({
  cart,
  onNavigate,
  onOrderSuccess,
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    shippingMethod: 'standard', // 'pickup' | 'standard' | 'express'
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const shippingOptions = [
    {
      id: 'pickup',
      title: 'Store Pickup',
      desc: '12 Street 240, Phnom Penh (Ready in 15 mins)',
      price: 0.0,
      badge: 'Free',
    },
    {
      id: 'standard',
      title: 'Standard Coffee Delivery',
      desc: 'Delivered hot in thermal bag (30-40 mins)',
      price: 1.5,
      badge: '$1.50',
    },
    {
      id: 'express',
      title: 'Express Priority Delivery',
      desc: 'Fast express rider directly to you (15-20 mins)',
      price: 3.0,
      badge: '$3.00',
    },
  ]

  const selectedShipping =
    shippingOptions.find((opt) => opt.id === formData.shippingMethod) ||
    shippingOptions[1]

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingFee = selectedShipping.price
  const grandTotal = subtotal + shippingFee

  // Validation logic (Exercise 2: Validate Required Fields)
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
        return !value.trim() ? 'First name is required.' : ''
      case 'lastName':
        return !value.trim() ? 'Last name is required.' : ''
      case 'email':
        if (!value.trim()) return 'Email is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address.'
        }
        return ''
      case 'phoneNumber':
        if (!value.trim()) return 'Phone number is required.'
        if (!/^[0-9+\s-]{8,15}$/.test(value)) {
          return 'Please enter a valid phone number (e.g. 012 345 678).'
        }
        return ''
      case 'address':
        return !value.trim() ? 'Delivery address is required.' : ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const errorMsg = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: errorMsg }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const errorMsg = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: errorMsg }))
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()

    // Validate all fields
    const newErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber),
      address: validateField('address', formData.address),
    }

    setErrors(newErrors)
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phoneNumber: true,
      address: true,
    })

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err))

    if (hasErrors) {
      // Focus on first error if needed
      return
    }

    // Generate Order ID (Exercise 3 requirement: e.g. ORD-0001)
    const randomSuffix = Math.floor(1000 + Math.random() * 9000)
    const orderId = `ORD-${randomSuffix}`

    const orderData = {
      orderId,
      customerName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.email.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      address: formData.address.trim(),
      shippingMethod: selectedShipping.title,
      shippingFee,
      orderDate: new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      orderedProducts: cart.map((item) => ({
        id: item.id,
        name: item.name,
        icon: item.icon,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      })),
      subtotal,
      totalAmount: grandTotal,
      orderStatus: 'Pending', // Exercise 3 requirement
    }

    onOrderSuccess(orderData)
  }

  return (
    <section className="min-h-[80vh] bg-stone-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-stone-500">
          <button onClick={() => onNavigate('home')} className="hover:text-stone-900">
            Home
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('cart')} className="hover:text-stone-900">
            Shopping Cart
          </button>
          <span>/</span>
          <span className="font-semibold text-amber-900">Checkout</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: Customer Data & Shipping Form (Cols 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200 md:p-8">
              <h2 className="text-2xl font-bold text-stone-900">Customer Details</h2>
              <p className="mt-1 text-sm text-stone-500">
                Please enter your information to receive your fresh coffee order.
              </p>

              <form onSubmit={handlePlaceOrder} className="mt-6 space-y-5">
                {/* Name Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="e.g. John / Sokha"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm text-stone-900 outline-none transition focus:ring-2 ${
                        errors.firstName && touched.firstName
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-stone-300 focus:border-amber-800 focus:ring-amber-200'
                      }`}
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="e.g. Doe / Chan"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm text-stone-900 outline-none transition focus:ring-2 ${
                        errors.lastName && touched.lastName
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-stone-300 focus:border-amber-800 focus:ring-amber-200'
                      }`}
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="customer@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm text-stone-900 outline-none transition focus:ring-2 ${
                        errors.email && touched.email
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-stone-300 focus:border-amber-800 focus:ring-amber-200'
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="+855 12 345 678"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm text-stone-900 outline-none transition focus:ring-2 ${
                        errors.phoneNumber && touched.phoneNumber
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-stone-300 focus:border-amber-800 focus:ring-amber-200'
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    name="address"
                    placeholder="House/Street number, Sangkat, Khan, Phnom Penh..."
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm text-stone-900 outline-none transition focus:ring-2 ${
                      errors.address && touched.address
                        ? 'border-red-500 focus:ring-red-200'
                        : 'border-stone-300 focus:border-amber-800 focus:ring-amber-200'
                    }`}
                  ></textarea>
                  {errors.address && touched.address && (
                    <p className="mt-1 text-xs text-red-600">{errors.address}</p>
                  )}
                </div>

                {/* Shipping Method (Exercise 2 requirement) */}
                <div className="pt-4 border-t border-stone-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                    Select Shipping Method
                  </label>
                  <div className="space-y-3">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                          formData.shippingMethod === option.id
                            ? 'border-amber-800 bg-amber-50/60 ring-2 ring-amber-800/20'
                            : 'border-stone-200 bg-white hover:bg-stone-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shippingMethod"
                            value={option.id}
                            checked={formData.shippingMethod === option.id}
                            onChange={handleChange}
                            className="h-4 w-4 text-amber-800 focus:ring-amber-800"
                          />
                          <div>
                            <div className="font-semibold text-stone-900 text-sm">
                              {option.title}
                            </div>
                            <div className="text-xs text-stone-500">{option.desc}</div>
                          </div>
                        </div>
                        <span className="font-bold text-amber-900 text-sm">
                          {option.badge}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit button on mobile */}
                <div className="pt-4 lg:hidden">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-amber-800 py-3.5 font-bold text-white shadow-lg transition hover:bg-amber-900"
                  >
                    Place Order (${grandTotal.toFixed(2)})
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Order Summary (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <h2 className="text-xl font-bold text-stone-900 border-b border-stone-100 pb-3">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="mt-4 max-h-60 overflow-y-auto divide-y divide-stone-100 pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-stone-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-stone-500">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <span className="font-semibold text-stone-900 text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculations */}
              <div className="mt-4 space-y-2.5 border-t border-stone-200 pt-4 text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Delivery ({selectedShipping.title})</span>
                  <span className="font-semibold text-stone-900">
                    {shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Taxes &amp; Fees</span>
                  <span className="text-emerald-600 font-medium">$0.00</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="my-5 border-t border-stone-200 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-bold text-stone-900">Grand Total</span>
                  <span className="text-2xl font-extrabold text-amber-900">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                className="hidden lg:block w-full rounded-xl bg-amber-800 py-3.5 font-bold text-white shadow-md transition hover:bg-amber-900 hover:shadow-lg active:scale-[0.99]"
              >
                Place Order
              </button>

              <button
                type="button"
                onClick={() => onNavigate('cart')}
                className="mt-3 w-full rounded-xl border border-stone-200 py-2.5 text-center text-sm font-semibold text-stone-600 hover:bg-stone-50 transition"
              >
                ← Back to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
