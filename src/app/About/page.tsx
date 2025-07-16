'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import SkillsSection from '@/components/SkillsSection';

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-10">About Me</h1>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <Image
            src="/profile.jfif"
            alt="Afsha Ammisetty"
            width={180}
            height={180}
            className="rounded-full shadow-md object-cover"
          />
          <div>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">
              {"I'm Afsha Ammisetty — a Front-End Developer based in Charlottetown, PEI, Canada, with over 5 years of experience building fast, accessible, and user-friendly websites and web applications."}
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-2">
              {"I specialize in Front End Technologies like HTML, CSS, JavaScript, React, and Next.js. My recent work includes building full-stack solutions with RESTful APIs, custom admin dashboards, and interactive UIs. I've delivered responsive designs and clean code for companies like "}
              <strong>Walls Metal Roofing</strong>, <strong>Vedacations Teaching</strong>{" and more."}
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              {"Outside of work, I enjoy cooking, exploring UX trends, and learning emerging tools in frontend ecosystems."}
            </p>

            {/* Resume Link */}
            <a
              href="/AfshaAmmisetty_Resume.docx"
              download
              className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              📄 Download Resume (.docx)
            </a>
          </div>
        </div>

        <hr className="my-12 border-t dark:border-gray-700" />

        {/* Skills Grid */}
        <SkillsSection />
      </main>
    </div>
  );
}
