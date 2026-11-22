function About() {
  const features = [
    {
      icon: '🌱',
      title: 'Fresh Beans',
      text: 'Single-origin beans sourced from small farms and roasted weekly in-house.',
    },
    {
      icon: '🛋️',
      title: 'Cozy Space',
      text: 'Warm lighting, soft sofas and quiet corners — made for slow mornings.',
    },
    {
      icon: '📶',
      title: 'Free WiFi',
      text: 'Fast, reliable internet and plenty of power outlets for remote work.',
    },
  ]

  return (
    <section id="about" className="scroll-mt-20 bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
            Our Story
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Brew &amp; Bloom Coffee started in 2018 with one small roaster and a big
            idea: great coffee should feel like home. Today we serve hundreds of
            neighbours every week — same beans, same care, same warm welcome.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-stone-200 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-stone-600">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl bg-amber-800 px-8 py-10 text-center text-amber-50 md:grid-cols-4">
          {[
            { value: '2018', label: 'Founded' },
            { value: '12', label: 'Coffee Blends' },
            { value: '500+', label: 'Cups a Day' },
            { value: '4.9★', label: 'Customer Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-amber-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
