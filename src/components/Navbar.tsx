'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-6 text-sm text-gray-600">
        <Link
          href="/"
          className="font-medium tracking-tight hover:text-black transition-colors"
        >
          Afsha
        </Link>
        <div className="space-x-6">
          <Link href="/projects" className="hover:text-black transition-colors">
            Projects
          </Link>
          <Link href="/About" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
