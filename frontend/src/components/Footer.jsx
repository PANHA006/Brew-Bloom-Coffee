function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-20 bg-stone-900 text-stone-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span className="text-lg font-bold text-amber-50">
              Brew &amp; Bloom Coffee
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            Small-batch coffee roasters and bakers. Open every day, rain or
            shine.
          </p>
        </div>

        {/* Opening hours */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-50">
            Opening Hours
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-400">
            <li className="flex justify-between">
              <span>Mon – Fri</span>
              <span>7:00 – 19:00</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>8:00 – 20:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>8:00 – 16:00</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-50">
            Find Us
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-400">
            <li>📍 12 Street 240, Phnom Penh</li>
            <li>
              📞{' '}
              <a href="tel:+85512345678" className="hover:text-amber-50">
                +855 12 345 678
              </a>
            </li>
            <li>
              ✉️{' '}
              <a href="mailto:hello@brewandbloom.com" className="hover:text-amber-50">
                hello@brewandbloom.com
              </a>
            </li>
          </ul>

          <div className="mt-5 flex gap-3">
            {['Facebook', 'Instagram', 'Telegram'].map((social) => (
              <a
                key={social}
                href="#"
                className="rounded-full bg-stone-800 px-4 py-2 text-xs font-medium text-stone-300 transition-colors hover:bg-amber-800 hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
        © {year} Brew &amp; Bloom Coffee. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
