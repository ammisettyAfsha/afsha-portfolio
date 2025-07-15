'use client';

import Image from 'next/image';
import Link from 'next/link';

type ProjectProps = {
  title: string;
  description: string;
  link: string;
  image: string;
  tech: string[];
  documents?: { label: string; url: string }[];
};

export default function ProjectCards({
  title,
  description,
  link,
  image,
  tech,
  documents,
}: ProjectProps) {
  return (
    <div className="group block space-y-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative h-48 w-full overflow-hidden rounded-lg border bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold group-hover:underline mt-2">{title}</h3>
      </a>

      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
        {tech.join(', ')}
      </p>

      {documents && documents.length > 0 && (
        <div className="mt-3 space-y-1">
          {documents.map((doc, idx) => (
            <a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline block"
            >
              📄 {doc.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
