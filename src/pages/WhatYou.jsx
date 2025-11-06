// src/sections/WhatYoullLearn.jsx
import React from 'react';

export default function WhatYou() {
  const leftList = ['HTML & CSS - Build beautiful layouts', 'JavaScript (ES6+) - Master programming fundamentals', 'Reactjs - Create modern interactive web apps ', 'Responsive Design', 'Responsive Design - Mobile-first approach' , 'Bootstrap'];
  const rightList = ['Node.js - Server-side development', 'PHP', 'Git & GitHub - Version control mastery', 'Databases (MongoDB) - Store and manage data', 'APIs - Cconnect to external services', 'Authentication', 'Deployment - Launch your projects live'];

  return (
    <section className="py-12 get bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">What you'll learn</h2>
          <p className="mt-3 text-gray-600">A comprehensive curriculum designed to take you from zero to hero</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LearnBox title="Frontend & UI" icon="code" items={leftList} />
          <LearnBox title="Backend & DevOps" icon="server" items={rightList} />
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold">Real Projects You'll Build</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <TagButton>Personal Portfolio Website</TagButton>
            <TagButton>E-commerce</TagButton>
            <TagButton>Social Media Dashboard</TagButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnBox({ title, icon, items }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-start gap-4">
        <div className="text-blue-600">{icon === 'code' ? codeIcon() : serverIcon()}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <ul className="mt-3 space-y-2">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-3">
                <FancyTick />
                <span className="text-sm text-gray-700">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TagButton({ children }) {
  return <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">{children}</button>;
}

function FancyTick() {
  return (
    <svg className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function codeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <path d="M8 17L3 12l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function serverIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
