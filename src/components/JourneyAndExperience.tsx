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
      <div className="space-y-8 font-sans text-sm text-gray-700 leading-relaxed">
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">The Journey</h2>
        </div>

        <div>
          <h3 className="font-medium text-md mb-1">Just-in-time learning</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"I learn tools and concepts as I need them — often right before I use them. This helps me stay agile and focused."}
          </p>
          <p>
            {"So instead of saying something like 'I want to learn front-end development', try to think of something you want to build instead."}
          </p>
          <p>
            {"Maybe it's a website for your local book club? That means it's time to learn HTML. When you have the basic setup, you probably want to make it look better - so now you might dive into CSS."}
          </p>
          <p>
            {"Learning step-by-step like this as you need something is a lot easier than trying to learn NextJS, React, HTML, CSS, Tailwind and NodeJS - all at the same time. The surface area is simply too large."}
          </p>
          <p>
            {"Start simple. Then add complexity as you go when your website / app needs to do more things."}
          </p>
        </div>

        <div>
          <h3 className="font-medium text-md mb-1">Dwelling on mistakes</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"Debugging and fixing issues has taught me more than any course. Mistakes have been my best mentors."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"One of the most common pitfalls I see junior developers fall into is getting frustrated or giving up when they realize they've made a mistake."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"I get it. It never feels good to make mistakes in your work."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"The problem is that coding is a very difficult concept to work with."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"There's tons of things that can go wrong. Tons of things you need to learn the hard way. Tons of little 'gotchas' that will catch you off guard. It's unreasonable to think you'll be a coding expert early on in your career and be able to avoid all of these."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"That's why it's so crucial that you don't get stuck on your mistakes. Even if you spend several hours or days going down a wrong path, only to realize your mistake way later. And it certainly won't help if your only takeaway from such experiences are that you're 'not smart enough' or 'not cut out for coding'."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"The best thing you can do in such situations is simply learn as much as possible from the experience - and then move on."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"Nobody will win if you beat yourself up over it. But if you can reframe your mindset to see it as a learning experience instead, you'll greatly reduce the chances of making a similar mistake in the future."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"And the more you practice this way of thinking, the easier coding will get. Eventually you'll be able to spot your mistakes before making them."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"Fail. Learn. Repeat."}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"That's the formula for learning to code."}
          </p>
        </div>

        <div>
          <h3 className="font-medium text-md mb-1">From junior to now</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {"I started my journey as a Front-End Developer at Guntur Web Designing, where I learned the fundamentals of building user interfaces. Recently, I built a freelance project called "}
            <span className="font-medium">AIRS Biryani Point</span>
            {" using React and Next.js, and I'm excited to continue growing and contributing to impactful web experiences."}
          </p>
        </div>
      </div>
      </div>
      {/* Right Column: Experience */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">Experience</h2>
        </div>
        <Freelance />
        <Walls />
        <Vedacations />
        <Cdri />
        <Guntur />
      </div>
    </section>
  );
}
