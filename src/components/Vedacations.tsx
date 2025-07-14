'use client';

import React from 'react';

export default function Vedacations() {
  return (
    <div className="border-l pl-6 relative">
      <div className="absolute left-[-10px] top-2 w-3 h-3 bg-yellow-500 rounded-full" />
      <h3 className="text-lg font-semibold">
        <a
          href="https://www.theguruji.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          Front End Developer – Vedactions Teaching Pvt Ltd
        </a>
      </h3>
      <p className="text-sm text-gray-500">July 2021 – Aug 2022</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Contributed to building and optimizing educational web platforms and internal tools using React. Focused on reusable components, performance tuning, and maintaining cross-browser compatibility.
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 italic">
        Tech Stack: React, JavaScript, HTML, CSS, REST APIs, Git
      </p>
    </div>
  );
}
