const testimonials = [
  {
    quote:
      "Amanda helped me finally get relief from persistent lower leg pain. Having expert dry needling and physical therapy in Flint without needing to drive across town made the process so much easier.",
    name: "Flint Patient",
  },
  {
    quote:
      "As a busy professional in Ann Arbor, I loved the convenience of mobile physical therapy. Amanda’s care was thoughtful, highly skilled, and completely individualized.",
    name: "Ann Arbor Client",
  },
  {
    quote:
      "Amanda combines deep expertise with a truly individualized approach. I felt heard, challenged, and supported every step of the way.",
    name: "Patient Testimonial",
  },
  {
    quote:
      "Her movement background and hands-on skill set make her care stand out. I returned to activity feeling stronger and more confident.",
    name: "Active Adult Client",
  },
  {
    quote:
      "Professional, knowledgeable, and incredibly convenient. Having expert PT come to me made all the difference.",
    name: "Mobile PT Client",
  },
];

const serviceCards = [
  {
    title: "Wellness Coaching",
    text: "A holistic approach to health and performance including mind-body training, breathwork, nutrition, and lifestyle optimization.",
  },
  {
    title: "Dry Needling",
    text: "Advanced dry needling treatment to reduce pain, release tight muscles, and restore normal movement.",
  },
  {
    title: "Trigger Point Therapy",
    text: "Hands-on trigger point therapy to release muscular tension and improve mobility.",
  },
  {
    title: "Manual Therapy (OMT)",
    text: "Orthopedic manual therapy techniques to restore joint motion, reduce pain, and improve function.",
  },
  {
    title: "Graston / Instrument Assisted Soft Tissue",
    text: "Soft tissue mobilization using instrument-assisted techniques (scraping) and cupping to improve tissue mobility, circulation, and healing.",
  },
  {
    title: "Kinesiotaping",
    text: "Supportive taping techniques to reduce strain, improve movement patterns, and assist recovery.",
  },
  {
    title: "Customized Exercise Plans",
    text: "Individually designed strengthening and mobility programs tailored to your goals and activity level.",
  }
];

const idealForItems = [
  "Active adults and runners",
  "Orthopedic pain and movement limitations",
  "Recovery after injury flare-ups",
  "Dance, sports, and performance-related rehab",
  "Clients seeking private, convenient expert care",
];

const highlights = [
  { label: "1:1", text: "Personalized care" },
  { label: "Mobile", text: "We come to you" },
  { label: "Expert", text: "Dry needling" },
];

export default function PeakPerformancePTWebsite() {
  const seoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Peak Performance PT',
    description:
      'Mobile physical therapy and dry needling services in Fenton, Flint, Ann Arbor, and surrounding areas with Dr. Amanda White.',
    telephone: '+1-810-605-5616',
    areaServed: ['Flint, MI', 'Ann Arbor, MI', 'Surrounding areas'],
    medicalSpecialty: ['Physical Therapy', 'Dry Needling'],
    provider: {
      '@type': 'Person',
      name: 'Dr. Amanda White',
      jobTitle: 'Doctor of Physical Therapy',
    },
    keywords: [
      'Dry Needling Flint MI',
      'Physical Therapy Flint MI',
      'Dry Needling Ann Arbor MI',
      'Mobile Physical Therapy Flint MI',
    ],
  };

  return (
    <>
      <title>Peak Performance PT | Dry Needling Flint MI | Mobile Physical Therapy</title>
      <meta
        name="description"
        content="Peak Performance PT provides mobile physical therapy and dry needling in Fenton, Flint, Ann Arbor, and surrounding areas with Dr. Amanda White."
      />
      <meta
        name="keywords"
        content="Dry Needling Flint MI, Physical Therapy Flint MI, Dry Needling Ann Arbor MI, Mobile Physical Therapy Flint MI"
      />
      <meta property="og:title" content="Peak Performance PT" />
      <meta
        property="og:description"
        content="Mobile physical therapy and dry needling for Fenton, Flint, Ann Arbor, and surrounding areas."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoJsonLd) }}
      />

      <div className="min-h-screen bg-[#0b2f7a] pb-24 text-white md:pb-0">
      <header className="border-b border-white/10 bg-[#0b2f7a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-wide">PEAK</div>
            <div className="text-sm uppercase tracking-[0.35em] text-blue-200">
              Performance PT
            </div>
          </div>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#locations" className="transition hover:text-blue-200">Locations</a>
            <a href="#about" className="transition hover:text-blue-200">About</a>
            <a href="#bio" className="transition hover:text-blue-200">Bio</a>
            <a href="#services" className="transition hover:text-blue-200">Services</a>
            <a href="#testimonials" className="transition hover:text-blue-200">Testimonials</a>
            <a href="https://share.google/DNBiT5iqApSpHpSyz" target="_blank" className="transition hover:text-blue-200">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-red-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-red-950/30 transition hover:scale-[1.02]"
          >
            Book a Visit
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06173a] via-[#0b2f7a] to-[#06173a]">
          {/* decorative mountain background */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
              <path fill="rgba(255,255,255,0.08)" d="M0 260L120 220L240 240L360 180L480 210L600 150L720 200L840 130L960 180L1080 140L1200 170L1320 150L1440 200L1440 320L0 320Z" />
              <path fill="rgba(255,255,255,0.12)" d="M0 300L140 240L280 260L420 200L560 240L700 170L840 220L980 160L1120 210L1260 190L1440 230L1440 320L0 320Z" />
            </svg>
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">

            {/* left side hero text */}
            <div>
              <div className="mb-4 inline-flex rounded-full border border-blue-300/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-100 shadow">
                Mobile Physical Therapy & Dry Needling
              </div>

              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                <span className="block">Get better, faster</span>
                <span className="mt-3 block text-3xl font-semibold md:text-4xl">
                  and get back to doing what you love
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                One-on-one mobile physical therapy and dry needling designed for active adults, runners, and athletes who want expert care without the hassle of a clinic visit.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Running</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Orthopedic</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Performance Rehab</span>
              </div>

              <div className="mt-8 space-y-2">
                <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-blue-100">
                  Certified Strength & Conditioning Specialist (CSCS – NSCA)
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-blue-100">
                  Certified Yoga Teacher
                </div>
                <div className="text-3xl font-bold md:text-4xl">Dr. Amanda White</div>
                <div className="text-sm md:text-base text-blue-200 mt-2">
                  Physical Therapist • CSCS • Yoga Teacher • Running Specialist
                </div>
                <div className="text-3xl font-bold text-red-400 md:text-4xl">810‑605‑5616</div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-red-500 px-6 py-3 font-semibold shadow-lg shadow-red-950/30 hover:scale-[1.02] transition">
                  Request Appointment
                </a>
                <a href="#bio" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition">
                  Meet Dr. Amanda
                </a>
              </div>
            </div>

            {/* right side hero card */}
            <div>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
                <div className="text-right text-5xl font-black italic md:text-6xl">PEAK</div>
                <div className="mt-2 text-right text-2xl font-bold text-red-500">PERFORMANCE <span className="text-blue-300">PT</span></div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div key={item.label} className="rounded-xl bg-white/10 p-4 text-center">
                      <div className="text-xl font-bold">{item.label}</div>
                      <div className="text-xs uppercase tracking-wider text-blue-100">{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1400" alt="runner outside" className="w-full rounded-[2rem] shadow-xl object-cover h-[320px]" />
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Convenient, individualized treatment with a performance focus.
              </h2>
              <p className="mt-5 leading-8 text-blue-100">
                Peak Performance PT is designed for busy adults who want high-quality care without the hassle of a clinic visit. Each session is tailored to your goals, whether that means reducing pain, improving movement, or returning to sport and exercise with confidence.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Ideal For
              </p>
              <ul className="mt-5 space-y-4 text-blue-100">
                {idealForItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="bio" className="bg-black/10 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#123d93] via-[#0b2f7a] to-[#06173a] shadow-xl">
                <div className="flex h-full min-h-[520px] flex-col justify-end p-8">
                  <div className="max-w-sm rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                    <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                      Photo Area
                    </div>
                    <div className="mt-4 text-4xl font-black text-white md:text-5xl">
                      Dr. Amanda White
                    </div>
                    <div className="mt-4 space-y-2 text-blue-100">
                      <div>Running Injury Specialist</div>
                      <div>Dry Needling Provider</div>
                      <div>Mobile Physical Therapy</div>
                    </div>
                    <div className="mt-6 text-sm leading-7 text-blue-200">
                      Your uploaded portrait is not rendering in this preview environment, so this branded placeholder is holding the layout. When the site is published with the image in the public folder, your real photo will display here.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                  Bio
                </p>
                <h2 className="mt-3 text-3xl font-bold">Meet Dr. Amanda White</h2>

                <div className="mt-6 space-y-6 leading-8 text-blue-100">
                  <p>
                    Dr. Amanda White obtained her Doctorate of Physical Therapy from Oakland University and previously owned Absolute Physical Therapy in Durango, Colorado, which was awarded Best in Durango. She has worked as a PT for Apple and at the Red Wings Training Facility, as well as the Vail International Dance Festival.
                  </p>
                  <p>
                    Amanda has treated many professional and collegiate athletes, including cyclists, climbers, dancers, and runners. More recently, she spearheaded dry needling research in collaboration with Fort Lewis College and gives presentations in the community regarding injury prevention and running. She is a running and dance-injury specialist.
                  </p>
                  <p>
                    Early in her career, Amanda performed lead roles in several musicals in Europe and New York as a professional dancer, and was also hired by Cirque du Soleil with Celine Dion. 
                  </p>
                  <p>
                    Her therapy approach draws from her background as a dancer and lifelong lover of movement. Through years of continuing education, she has become a specialist in foot and ankle, lower body, and lumbar pathology, and incorporates Pilates, yoga, sports-specific exercise, gait analysis, and hands-on techniques into her practice.
                  </p>
                  <p>
                    Amanda has been an avid runner her whole life, completing dozens of half marathons. Her favorite race of all time is the Imogene Pass Run, which she has completed three times.
                </p>
                <p>
                  Amanda holds an Advanced Dry Needling Certification, Pelvic Floor Certification, and is a Certified Yoga Teacher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="seo" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Specialized Care
              </p>
              <h2 className="mt-3 text-3xl font-bold">Running injury and dry needling specialist in Michigan</h2>
              <p className="mt-4 leading-8 text-blue-100">
                Dr. Amanda White specializes in treating runners, dancers, and active adults with advanced physical therapy techniques including dry needling, gait analysis, and performance-based rehabilitation. Patients looking for a running injury specialist in Flint, MI or dry needling in Ann Arbor, MI often choose Peak Performance PT for its one-on-one care and mobile treatment model.
              </p>
              <p className="mt-4 leading-8 text-blue-100">
                By bringing expert care directly to patients, Peak Performance PT helps athletes and active adults recover faster, move better, and prevent recurring injuries while maintaining their training and lifestyle.
              </p>
            </div>
          </div>
        </section>

        

        <section className="mx-auto max-w-7xl px-6 py-10">
          <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1400" alt="treadmill training" className="w-full rounded-[2rem] shadow-xl object-cover h-[320px]" />
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Wellness Coaching
              </p>
              <h2 className="mt-3 text-3xl font-bold">A holistic approach to your health and performance</h2>
              <p className="mt-4 leading-8 text-blue-100">
                In addition to physical therapy, Peak Performance PT offers wellness coaching to help you optimize your overall health, movement, and recovery.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Mind-body training</li>
                  <li>• Breathwork</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Nutritional counseling</li>
                  <li>• Holistic health management</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Postural awareness</li>
                  <li>• Women's health</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="conditions" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Conditions We Treat
              </p>
              <h2 className="mt-3 text-3xl font-bold">Common issues we help people overcome</h2>
              <p className="mt-4 leading-8 text-blue-100">
                Peak Performance PT focuses on helping active adults, runners, and athletes recover from injury and move better. Common conditions we treat include:
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Running injuries</li>
                  <li>• Plantar fasciitis</li>
                  <li>• Achilles tendinitis</li>
                  <li>• Shin splints</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Knee pain</li>
                  <li>• IT band syndrome</li>
                  <li>• Hip pain</li>
                  <li>• Hamstring injuries</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Low back pain</li>
                  <li>• Muscle tightness & trigger points</li>
                  <li>• Sports injuries</li>
                  <li>• Movement and performance limitations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-bold">What patients can book</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {serviceCards.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-blue-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10">
          <img src="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&w=1400" alt="person doing squats" className="w-full rounded-[2rem] shadow-xl object-cover h-[320px]" />
        </section>

        <section id="reviews" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Google Reviews
              </p>
              <h2 className="mt-3 text-3xl font-bold">What patients say about Peak Performance PT</h2>
              <p className="mt-4 leading-8 text-blue-100">
                Read verified patient reviews directly from Google.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
              <iframe
                title="Peak Performance PT Google Reviews"
                src="https://www.google.com/maps?q=Peak%20Performance%20PT%20Michigan&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-6">
              <a
                href="https://share.google/DNBiT5iqApSpHpSyz"
                target="_blank"
                className="inline-block rounded-2xl bg-red-500 px-6 py-3 font-semibold shadow-lg shadow-red-950/30 transition hover:scale-[1.02]"
              >
                View or Leave a Google Review
              </a>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-black/10 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-bold">What clients are saying</h2>
              <p className="mt-4 leading-8 text-blue-100">
                Add your real patient testimonials here to build trust and highlight outcomes.
              </p>
            </div>

            <div className="mt-6 rounded-[2rem] border border-blue-300/20 bg-blue-950/30 p-6 text-blue-100">
              <p className="font-semibold text-white">Google Business Profile</p>
              <p className="mt-2 leading-8">
                Add your Google Business Profile link here so visitors can read reviews, get directions, and verify your service area. This also helps reinforce your local presence for searches related to dry needling and physical therapy in Flint and Ann Arbor.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block rounded-2xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Add Google Business Profile Link
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                  <p className="leading-8 text-blue-50">“{item.quote}”</p>
                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="map" className="bg-black/10 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Service Area Map
              </p>
              <h2 className="mt-3 text-3xl font-bold">Serving Fenton, Flint, Ann Arbor, and surrounding areas</h2>
              <p className="mt-4 leading-8 text-blue-100">
                This embedded map gives visitors a quick sense of your service area and helps reinforce local search relevance for Flint and Ann Arbor.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl">
              <iframe
                title="Peak Performance PT service area map"
                src="https://www.google.com/maps?q=Flint%2C%20MI%20to%20Ann%20Arbor%2C%20MI&z=9&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="why" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                Why Choose Peak Performance PT
              </p>
              <h2 className="mt-3 text-3xl font-bold">A different approach to physical therapy</h2>
              <p className="mt-4 leading-8 text-blue-100">
                Peak Performance PT focuses on efficient, individualized care designed to help you recover quickly and stay active.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Fewer visits</li>
                  <li>• Faster results</li>
                  <li>• One‑on‑one problem solving for your unique injury</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Personalized exercise plans that fit your life</li>
                  <li>• Programs designed to be effective without being overwhelming</li>
                  <li>• Over 15 years of clinical experience treating all populations</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <ul className="space-y-3 text-blue-100">
                  <li>• Certified Strength and Conditioning Specialist</li>
                  <li>• Gait and running specialist</li>
                  <li>• Pelvic floor trained</li>
                  <li>• Certified yoga teacher</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-bold">Ready to get started?</h2>
                <div className="mt-5 max-w-xl space-y-3 leading-8 text-blue-100">
                  <p>Call or text: 810-605-5616
                  <br /><a href="mailto:peakperformanceptdr@gmail.com" className="underline hover:text-blue-300">peakperformanceptdr@gmail.com</a></p>
                  <p>Peak Performance PT with Dr. Amanda White</p>
                  <p>Serving Fenton, Flint, Ann Arbor, and surrounding areas.</p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
                <div className="grid gap-4">
                  <input
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-blue-200/70"
                    placeholder="Your name"
                  />
                  <input
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-blue-200/70"
                    placeholder="Email address"
                  />
                  <input
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-blue-200/70"
                    placeholder="Phone number"
                  />
                  <textarea
                    className="min-h-[120px] rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-blue-200/70"
                    placeholder="How can we help?"
                  />
                  <button className="rounded-2xl bg-red-500 px-6 py-3 font-semibold shadow-lg shadow-red-950/30 transition hover:scale-[1.02]">
                    Send Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="tel:8106055616"
        className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl bg-red-500 px-6 py-4 text-center text-base font-bold text-white shadow-2xl shadow-red-950/40 md:hidden"
      >
        Call / Text 810-605-5616
      </a>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-blue-100">
        © 2026 Peak Performance PT • Mobile Physical Therapy and Dry Needling Expert
      </footer>
    </div>
    </>
  );
}
