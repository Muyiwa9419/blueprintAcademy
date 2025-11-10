import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Blueprint <span className="text-gray-800">Academy</span>
        </h1>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#learn" className="hover:text-blue-600">Why Learn</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://selar.com/7p60178068"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow"
          >
            Enroll Now
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-3 px-6 py-4 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#why" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Why Learn</a>
            <a href="#pricing" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
            <a
              href="#enroll"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center shadow"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
