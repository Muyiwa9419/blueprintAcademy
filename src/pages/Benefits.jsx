
import React from 'react';

export default function Benefits() {
  const items = [
    { title: 'Expert Mentorship', text: 'Learn from experienced developers', icon: liveIcon },
    { title: 'Hands-on Projects', text: 'Build real-world applications', icon: portfolioIcon },
    { title: 'Certificate', text: 'industry-recognized completion certificate', icon: careerIcon },
    { title: 'Career Support', text: 'Job placement assistance included', icon: clockIcon },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Program Benefits</h2>
          <p className="mt-3 text-gray-600">Everything you need to succeed in your web development journey</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((b, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white shadow">
                {b.icon()}
              </div>
              <h4 className="font-semibold">{b.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function liveIcon() { return (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 5v14" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/></svg>); }
function portfolioIcon(){ return (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1.5"/></svg>); }
function careerIcon(){ return (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M4 7h16" stroke="currentColor" strokeWidth="1.5"/><path d="M4 12h10" stroke="currentColor" strokeWidth="1.5"/></svg>); }
function clockIcon(){ return (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.5"/></svg>); }
