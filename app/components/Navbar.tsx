'use client';

import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-purple-dark bg-opacity-10 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/fotos/maira.jpeg"
                        alt="Maira Zamer"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="ml-2 hidden md:block"> 
                        <Link href="/">
                            <div className="text-lg font-ebGaramond text-customOrange font-bold">Maira Zamer</div>
                        </Link>
                        <div className="text-sm text-gray-500 font-ebGaramond">Full Stack Developer</div>
                    </div>
                    <div className="ml-2 md:hidden"> 
                        <Link href="/">
                            <div className="text-lg font-ebGaramond text-customOrange font-bold">MZ</div>
                        </Link>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <a href="#about" className="link font-ebGaramond">Sobre Mí</a>
                    <span>-</span>
                    <a href="#projects" className="link font-ebGaramond">Proyectos</a>
                    <span>-</span>
                    <a href="#technology" className="link font-ebGaramond">Tecnología</a>
                </div>
            </div>
            <hr className="border-purple-800 mx-auto justify-between shadow-[0_4px_10px_rgba(0,0,0,0.5)]" />
        </nav>
    );
};

export default Navbar;
