'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Links() {
  const pathname = usePathname();

  return (
    <nav className="bg-purple-dark p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        <div className="text-lg font-bold">Maira Zamer</div>
        </Link>
        <div className="flex space-x-4">
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Inicio
          </Link>
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
            Sobre Mí
          </Link>
          <Link className={`link ${pathname === '/projects' ? 'active' : ''}`} href="/projects">
            Proyectos
          </Link>
          
        </div>
      </div>
    </nav>
  );
}
