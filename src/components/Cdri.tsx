'use client';

import React from 'react';

export default function Cdri() {
  return (
    <div className="border-l pl-6 relative">
      <div className="absolute left-[-10px] top-2 w-3 h-3 bg-yellow-500 rounded-full" />
      <h3 className="text-lg font-semibold">
        <a
          href="https://www.cdri.res.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          Front-End Developer – Central Drug Research Institute (CDRI)
        </a>
      </h3>
      <p className="text-sm text-gray-500">Jan 2020 – Jun 2021</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Designed and developed responsive web interfaces for research data systems and internal portals. Collaborated with researchers and backend developers to improve UI/UX and ensure accessibility standards.
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 italic">
        Tech Stack: HTML, CSS, JavaScript, jQuery, Bootstrap
      </p>
    </div>
  );
}
