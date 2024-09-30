import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black min-h-screen flex flex-col justify-between">
      <Navbar />
      <br />
      <main className="container mx-auto p-6 bg-black bg-opacity-60 rounded-lg shadow-lg relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center main-bg"></div>
        <div className="relative flex flex-col md:flex-row items-center text-center md:text-left p-4 rounded-lg shadow-lg justify-between z-10">
          <div className="md:mr-10 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Hola,
              <br />
              <span className="text-4xl text-amber-400 block mt-4 zoom-in-effect">
                Soy Maira Zamer
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Especializada en <span className="text-amber-400">React</span>,{' '}
              <span className="text-amber-400">Next.js</span>,{' '}
              <span className="text-amber-400">Tailwind CSS</span>,{' '}
              <span className="text-amber-400">HTML</span>,{' '}
              <span className="text-amber-400">CSS</span>. Apasionada por el diseño
              UX/UI y la creación de experiencias web impactantes.
            </p>
            <p className="text-2xl text-gray-300 mb-8 zoom-in-effect leading-relaxed">
              Desarrolladora Full Stack.
              <br />
              Orientada al Front-End.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center md:space-x-4">
              <a
                href="projects"
                className="inline-block bg-purple-950 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition-colors mb-4 md:mb-0"
              >
                Ver Proyectos
              </a>
              <a
                href="/CV.pdf"
                download
                className="inline-block bg-purple-950 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition-colors"
              >
                Descargar CV
              </a>
            </div>
            <div className="mt-8 zoom-in-effect">
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
