// src/sections/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer id='contact' className="bg-slate-900 contact text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Ready to Start Your Journey</h2>
        <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Have questions? Want to learn more about the program? Get in touch with us today!</p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a href="mailto:david.muyiwa.31@gmail.com" className="underline">david.muyiwa.31@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:+2348100885093" className="underline">Call us: +234 8100885093 or +234 8023144805</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://wa.link/mbar3s" className="underline" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
