import ProjectCard from '@/components/ProjectCard';
import ProjectCards from '@/components/ProjectCards';

const projects = [
  {
    title: 'AIRS Biryani Point',
    description: 'A food ordering website with online cart, admin dashboard, and delivery schedule system.',
    link: 'https://airs-biryani-point-git-main-ammisettyafshas-projects.vercel.app/',
    image: '/projects/airs-biryani.png', // Place this in public/projects/
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    title: 'Walls Metal Roofing',
    description: 'A commercial roofing website built with Webflow and integrated React components.',
    link: 'https://www.wallsmetalroofing.com/',
    image: '/projects/walls.png', // Place this in public/projects/
    tech: ['Webflow', 'React', 'JavaScript', 'Tailwind CSS'],
  },
  // Add more projects here...
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCards key={idx} {...project} />
        ))}
      </div>
    </main>
  );
}
