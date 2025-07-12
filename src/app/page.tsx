import Image from 'next/image';



export default function HomePage() {
  return (
    <section className="mt-32 max-w-2xl pl-10 pr-4 text-left">
       <Image
        src="/profile.jfif" 
        alt="Afsha profile picture"
        width={100}
        height={100}
        className="rounded-full mb-6"
      />
      <h1 className="text-5xl font-bold mb-6 leading-tight">
         Hi there, I’m Afsha
      </h1>
      <p className="text-xl text-gray-700 leading-relaxed">
        I'm a front-end developer living in Charlottetown, PE, Canada. I enjoy building and maintaining modern websites and interfaces using front-end technologies. I also enjoy learning, exploring, and sharing what I discover along the way.
      </p>
    </section>
  );
}
