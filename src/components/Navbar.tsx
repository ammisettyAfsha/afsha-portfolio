// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 text-sm">
      <Link href="/" className="font-bold text-lg">Afsha</Link>
      <div className="space-x-4">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
