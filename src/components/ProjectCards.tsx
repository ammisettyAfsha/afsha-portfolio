'use client';

import Image from 'next/image';
import Link from 'next/link';

type ProjectProps = {
  title: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
};

export default function ProjectCards({ title, description, link, image, tech }: ProjectProps) {
  return (
    <Link href={link} target="_blank" className="group block space-y-4">
      <div className="relative h-48 w-full overflow-hidden rounded-lg border bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold group-hover:underline">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{description}</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
          {tech.join(', ')}
        </p>
      </div>
    </Link>
  );
}
