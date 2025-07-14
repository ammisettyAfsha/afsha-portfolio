'use client';
import React from 'react';
import Walls from './Walls';
import Freelance from './Freelance';
import Vedacations from './Vedacations';
import Cdri from './Cdri';
import Guntur from './Guntur';

export default function JourneyAndExperience() {
  return (
    <section className="mt-10 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-left text-gray-800">
      
      {/* Left Column: The Journey */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">The Journey</h2>
        </div>

        <div>
          <h3 className="font-medium text-md mb-1">Just-in-time learning</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I learn tools and concepts as I need them — often right before I use them. This helps me stay agile and focused.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-md mb-1">Dwelling on mistakes</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Debugging and fixing issues has taught me more than any course. Mistakes have been my best mentors.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-md mb-1">From junior to now</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            I started my journey as a Front-End Developer intern at Guntur Web Designing, where I learned the fundamentals of building user interfaces. Recently, I built a freelance project called<span className="font-medium"> AIRS Biryani Point</span> using React and Next.js, and I’m excited to continue growing and contributing to impactful web experiences. 
          </p>
        </div>
      </div>

      {/* Right Column: Experience */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">Experience</h2>
        </div>
        <Freelance/>
        <Walls/>
        <Vedacations/>
        <Cdri/>
        <Guntur/>
      </div>
    </section>
  );
}
