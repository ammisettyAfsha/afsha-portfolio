import JourneyAndExperience from '@/components/JourneyAndExperience';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <div className="px-6 max-w-4xl mx-auto">
        <Navbar />
      </div>
      <section className="mt-10 max-w-2xl pl-10 pr-4 text-left">
        <Image
          src="/profile.png"
          alt="Afsha profile picture"
          width={80}
          height={80}
          className="rounded-full mb-6"
        />
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          {"Hi there, I’m Afsha"}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          {"I'm a front-end developer living in Canada. I enjoy building and maintaining modern websites and interfaces using front-end technologies. I also enjoy learning, exploring, and sharing what I discover along the way."}
        </p>
      </section>
      <JourneyAndExperience />
    </div>
  );
}
