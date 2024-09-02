import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b">
        <div className="absolute inset-0 bg-cover bg-center main-bg"></div>
        <div className="relative flex flex-col md:flex-row items-center text-center md:text-left container mx-auto p-4 flex-grow bg-opacity-50 rounded-lg shadow-lg justify-between">
          <div className="md:mr-10 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold text-white mb-4">
              Hola,
              <br />
              <br />
              <span className="text-5xl text-center text-amber-500 block mt-2 zoom-in-effect">
                Soy Maira Zamer
              </span>
            </h1>
            <p className="text-xl text-white mb-4">
              Especializada en <span className="text-amber-500">React</span>, <span className="text-amber-500">Next.js</span>, <span className="text-amber-500">Tailwind CSS</span>, <span className="text-amber-500">HTML</span>, <span className="text-amber-500">CSS</span>. Apasionada por el diseño UX/UI y la creación de experiencias web impactantes.
            </p>
            <p className="text-4xl text-white mb-8 zoom-in-effect">
              Desarrolladora Full Stack.
              <br />
              Orientada al Front-End.
              <br />
              Con conocimientos en diseño UX/UI.
              <br />
            </p>
            <div className="mt-4 zoom-in-effect">
              <a
                href="projects"
                className="inline-block bg-amber-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-amber-400 transition-colors"
              >
                Ver Proyectos
              </a>
            </div>
            <div className="mt-8 zoom-in-effect">
              <a
                href="/CV.pdf"
                download
                className="inline-block bg-purple-950 text-white py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
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
}
