import ProjectCards from '@/components/ProjectCards';

const projects = [
  {
    title: 'AIRS Biryani Point',
    description: 'A food ordering website with online cart, admin dashboard, and delivery schedule system.',
    link: 'https://airs-biryani-point-git-main-ammisettyafshas-projects.vercel.app/',
    image: '/projects/airs-biryani.png',
    tech: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vercel', 'HTML', 'CSS'],
    documents: [],
  },
  {
    title: 'Walls Metal Roofing',
    description: 'A commercial roofing website built with Webflow and integrated React components and Nextjs.',
    link: 'https://www.wallsmetalroofing.com/',
    image: '/projects/walls.png',
    tech: ['Webflow', 'React', 'Nextjs','Nodejs', 'Expressjs','JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    documents: [
      {
        label: 'Employment Letter',
        url: '/documents/walls.pdf',
      }
    ],
  },
  {
  title: 'Vedacations Teaching Pvt Ltd',
  description: 'Worked as a React Developer on an educational platform for delivering online learning content and classroom resources.',
  link: 'https://theguruji.in/',
  image: '/projects/vedacations.png',
  tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  documents: [
    {
      label: 'Offer Letter',
      url: '/documents/Vedacations-offer.pdf',
    },
    {
      label: 'Relieving Letter',
      url: '/documents/Vedacations - relieveing.pdf',
    },
  ],
},
{
  title: 'Central Drug Research Institute (CDRI)',
  description: 'Worked as a Front-End Developer building internal portals and research documentation systems. Focused on accessibility, UI consistency, and performance.',
  link: 'https://www.cdri.res.in/',
  image: '/projects/cdri.png',
  tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress', 'Bootstrap'],
  documents: [
    {
      label: 'Offer Letter',
      url: '/documents/CDRI - offer.pdf',
    },
    {
      label: 'Relieving Letter',
      url: '/documents/CDRI - Reliveing.pdf',
    },
  ],
},

{
  title: 'Guntur Web Designing Inc',
  description: 'Started as a Front-End Developer building static websites for local businesses.',
  link: 'https://www.gunturwebdesigning.com/',
  image: '/projects/guntur.png',
  tech: ['HTML', 'CSS', 'JavaScript'],
  documents: [
    {
      label: 'Offer Letter',
      url: '/documents/Guntur Appointment.pdf',
    },
    {
      label: 'Relieving Letter',
      url: '/documents/Guntur Relieving.pdf',
    },
  ],
},

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
