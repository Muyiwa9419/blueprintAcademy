import React from 'react';
const heroImg = 'src/assets/HeroImg.jpeg';

export default function Hero() {
  return (
    <section id='hero' className="py-12 bg-gradient-to-br from-sky-50 to-white/80">
      <div className="container mt-20 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="bg-white shadow-lg rounded-2xl p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Join The 4-week Bootcamp Basic Programming Training Program
              
            </h1>
            <p className="mt-4 text-gray-600">
             Transform your career with our comprehensive web development bootcamp
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="https://selar.com/7p60178068" className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow">
                ₦50,000 • Enroll Now
              </a>

              <a href="https://wa.link/mbar3s" className="px-5 py-3 border border-gray-200 hover:bg-gray-50 rounded-lg font-medium">
                Contact Us
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-700">
              <Feature icon="watch">12 weeks</Feature>
              <Feature icon="people">Small classes</Feature>
              <Feature icon="medal">Certificate included</Feature>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden shadow-lg">
              <img src={heroImg} alt="img" className="w-full h-64 sm:h-80 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, children }) {
  const icons = {
    watch: (<svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/></svg>),
    people: (<svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none"><path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM6 11c1.657 0 3-1.567 3-3.5S7.657 4 6 4 3 5.567 3 7.5 4.343 11 6 11z" stroke="currentColor"/></svg>),
    medal: (<svg className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none"><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor"/><path d="M8 14l-3 7 7-3 7 3-3-7" stroke="currentColor"/></svg>),
  };
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">{icons[icon]}</div>
      <span>{children}</span>
    </div>
  );
}
