function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-2">
        {/* Left: text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-stone-900 md:text-6xl">
            Fresh Coffee,
            <br />
            Every Morning
          </h1>

          <p className="mt-6 max-w-md text-lg text-stone-600 md:mx-0 mx-auto">
            Hand-picked beans, slow-roasted in small batches. Come for the
            coffee, stay for the cozy corner and the smell of fresh pastries.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#menu"
              className="rounded-full bg-amber-800 px-8 py-3 text-center font-semibold text-white shadow-lg transition-colors hover:bg-amber-900"
            >
              View Menu
            </a>
            <a
              href="#about"
              className="rounded-full border-2 border-amber-800 px-8 py-3 text-center font-semibold text-amber-900 transition-colors hover:bg-amber-800 hover:text-white"
            >
              Visit Us
            </a>
          </div>
        </div>

        {/* Right: coffee cup illustration (pure SVG, no external image) */}
        <div className="flex justify-center md:justify-end">
          <svg
            viewBox="0 0 320 320"
            className="h-64 w-64 drop-shadow-2xl md:h-80 md:w-80"
            role="img"
            aria-label="A cup of hot coffee"
          >
            {/* saucer */}
            <ellipse cx="160" cy="262" rx="118" ry="22" fill="#d6d3d1" />
            <ellipse cx="160" cy="256" rx="118" ry="22" fill="#e7e5e4" />

            {/* cup body */}
            <path
              d="M84 150 h152 l-16 92 a16 16 0 0 1 -16 14 h-88 a16 16 0 0 1 -16 -14 z"
              fill="#fafaf9"
            />
            {/* cup rim */}
            <ellipse cx="160" cy="150" rx="76" ry="18" fill="#f5f5f4" />
            <ellipse cx="160" cy="150" rx="66" ry="14" fill="#78350f" />

            {/* handle */}
            <path
              d="M236 172 a44 44 0 0 1 0 66"
              fill="none"
              stroke="#fafaf9"
              strokeWidth="16"
              strokeLinecap="round"
            />

            {/* steam */}
            <g stroke="#a8a29e" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.75">
              <path d="M132 122 q10 -18 0 -34 q-10 -16 0 -30">
                <animate
                  attributeName="d"
                  dur="3s"
                  repeatCount="indefinite"
                  values="
                    M132 122 q10 -18 0 -34 q-10 -16 0 -30;
                    M132 122 q-10 -18 0 -34 q10 -16 0 -30;
                    M132 122 q10 -18 0 -34 q-10 -16 0 -30"
                />
              </path>
              <path d="M160 116 q10 -20 0 -38 q-10 -18 0 -34">
                <animate
                  attributeName="d"
                  dur="3.6s"
                  repeatCount="indefinite"
                  values="
                    M160 116 q10 -20 0 -38 q-10 -18 0 -34;
                    M160 116 q-10 -20 0 -38 q10 -18 0 -34;
                    M160 116 q10 -20 0 -38 q-10 -18 0 -34"
                />
              </path>
              <path d="M188 122 q10 -18 0 -34 q-10 -16 0 -30">
                <animate
                  attributeName="d"
                  dur="3.2s"
                  repeatCount="indefinite"
                  values="
                    M188 122 q10 -18 0 -34 q-10 -16 0 -30;
                    M188 122 q-10 -18 0 -34 q10 -16 0 -30;
                    M188 122 q10 -18 0 -34 q-10 -16 0 -30"
                />
              </path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
