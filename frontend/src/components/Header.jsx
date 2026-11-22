export default function Header({
  cartCount = 0,
  currentView = 'home',
  onNavigate = () => {},
}) {
  const links = ['Home', 'Menu', 'About', 'Contact']

  const handleLinkClick = (e, link) => {
    e.preventDefault()
    if (link.toLowerCase() === 'home') {
      if (currentView !== 'home') {
        onNavigate('home')
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (currentView !== 'home') {
      onNavigate('home')
      setTimeout(() => {
        const element = document.getElementById(link.toLowerCase())
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    } else {
      const element = document.getElementById(link.toLowerCase())
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-amber-900/95 backdrop-blur shadow-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => {
            if (currentView !== 'home') onNavigate('home')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 text-left focus:outline-none"
        >
          <span className="text-2xl">☕</span>
          <span className="text-xl font-bold tracking-tight text-amber-50">
            Brew &amp; Bloom Coffee
          </span>
        </button>

        {/* Navigation links */}
        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-sm font-medium text-amber-100 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions: Cart Button */}
        <div className="flex items-center">
          <button
            onClick={() => onNavigate('cart')}
            className={`relative flex items-center gap-2.5 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              currentView === 'cart'
                ? 'bg-amber-950 text-white ring-2 ring-amber-400'
                : 'bg-amber-950/40 text-amber-50 hover:bg-amber-950/60 active:scale-95'
            }`}
            title="View Shopping Cart"
          >
            <span className="text-base">🛒</span>
            <span>Cart</span>
            {/* Always show badge (shows 0 when empty, or item count when items exist) */}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white shadow-sm">
              {cartCount}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}
