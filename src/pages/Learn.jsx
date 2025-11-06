// src/sections/WhyLearn.jsx
import React from 'react';

export default function Learn() {
  const boxes = [
    { title: 'High Demand Career', text: 'Companies across Nigeria and globally are actively seeking skilled web developers. Secure your future in tech', color: 'bg-blue-50' },
    { title: 'Work Anywhere', text: 'Build websites fron anywhere in the world. Enjoy the flexibility of remote work or freelancing opportunities', color: 'bg-green-50' },
    { title: 'Create & Innovate', text: 'Turn your ideas into reality. Build your own projects, launch startups, or help businesses  grow online', color: 'bg-yellow-50' },
  ];

  return (
    <section id='learn' className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Why Learn Web Development</h2>
          <p className="mt-3 text-gray-600">Join one of the fastest growing industries with unlimited career opportunities</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.map((b, i) => (
            <div key={i} className={`flex gap-4 p-6 rounded-xl shadow-sm ${b.color}`}>
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                <SimpleIcon />
              </div>
              <div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimpleIcon() {
  return (
    <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v4M4 7h16M6 20h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
