import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b ">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left container mx-auto p-4 flex-grow bg-opacity-50 rounded-lg shadow-lg justify-between bg-black bg-opacity-50">
          <div className="md:mr-10 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold text-white dark:text-white mb-4" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
              Hola,
              <br />
              <br />
              <span className="text-5xl text-center text-amber-500 block mt-2 zoom-in-effect" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
                Soy Maira Zamer
              </span>
            </h1>
            <br />
            <p className="text-4xl text-white dark:text-gray-300 mb-8 zoom-in-effect" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
              Desarrolladora Full Stack.
              <br />
              Orientada al Front-End.
              <br />
              Con conocimientos en diseño UX/UI.
              <br />
            </p>
            <div className="mt-4 zoom-in-effect">
              <a
                href="/cv_maira_zamer.pdf"
                download
                className="inline-block bg-purple-950 text-white py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
                style={{ fontFamily: "'La Belle Aurore', cursive", fontSize: '1.5rem' }}
              >
                Descargar CV
              </a>
            </div>
            <div className="mt-8 zoom-in-effect">
              <SocialLinks />
            </div>
          </div>
          <img
            src="/programacion.gif"
            className="w-80 h-90 rounded-full shadow-lg md:ml-8 zoom-in-effect"  
            alt="Maira Zamer"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
