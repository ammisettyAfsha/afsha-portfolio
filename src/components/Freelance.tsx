'use client';

import React from 'react';

export default function Freelance() {
  return (
    <div className="border-l pl-6 relative">
      <div className="absolute left-[-10px] top-2 w-3 h-3 bg-yellow-500 rounded-full" />
      <h3 className="text-lg font-semibold">
        <a
          href="https://airs-biryani-point-git-main-ammisettyafshas-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          Freelance Developer – AIRS Biryani Point
        </a>
      </h3>
      <p className="text-sm text-gray-500"> June 2025 - present</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        I designed, developed, and deployed a modern restaurant website for AIRS Biryani Point using a complete front-end stack. The project focused on responsive design, performance, and seamless user experience.
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 italic">
        Tech Stack: React, Next.js, TypeScript, Tailwind CSS, JavaScript, HTML, CSS, Vercel
      </p>
    </div>
  );
}
