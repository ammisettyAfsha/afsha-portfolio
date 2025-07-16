'use client';

import Image from 'next/image';

const skills = [
  { name: 'HTML5', logo: '/logos/html.svg' },
  { name: 'CSS3', logo: '/logos/css3.svg' },
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'JSON', logo: '/logos/JSON.png' },
  { name: 'Tailwind CSS', logo: '/logos/tailwind.png' },
  { name: 'Bootstrap', logo: '/logos/bootstrap.svg' },
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'Next.js', logo: '/logos/next.png' },
  { name: 'Express.js', logo: '/logos/express-js.png' },
  { name: 'Node.js', logo: '/logos/nodejs.svg' },
  { name: 'RESTful APIs', logo: '/logos/rest.png' },
  { name: 'Webflow', logo: '/logos/webflow.svg' },
  { name: 'WordPress', logo: '/logos/wordpress.svg' },
  { name: 'Postman', logo: '/logos/postman.svg' },
  { name: 'ESLint', logo: '/logos/eslint.svg' },
  { name: 'Code Splitting', logo: '/logos/code.png' },
  { name: 'XSS', logo: '/logos/xss.jpg' },
  { name: 'CORS', logo: '/logos/cors.png' },
];

export default function SkillsSection() {
  return (
    <section className="mt-12" aria-label="Technical Skills">
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div
        role="list"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            role="listitem"
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded shadow p-4 hover:shadow-lg transition"
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              title={skill.name}
              width={48}
              height={48}
              loading="lazy"
              className="mb-2"
            />
            <p className="text-sm text-gray-700 dark:text-gray-200 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
