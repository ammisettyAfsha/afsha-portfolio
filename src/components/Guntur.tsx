'use client';

import React from 'react';

export default function Guntur() {
  return (
    <div className="border-l pl-6 relative">
      <div className="absolute left-[-10px] top-2 w-3 h-3 bg-yellow-500 rounded-full" />
      <h3 className="text-lg font-semibold">
        <a
          href="https://www.gunturwebdesigning.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          Front-End Developer – Guntur Web Designing Inc
        </a>
      </h3>
      <p className="text-sm text-gray-500">Jan 2019 – Dec 2019</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Created and maintained static and dynamic websites for small business clients. Focused on pixel-perfect design conversion, cross-browser compatibility, and responsive layouts.
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 italic">
        Tech Stack: HTML, CSS, JavaScript, jQuery, Bootstrap
      </p>
    </div>
  );
}
