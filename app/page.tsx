import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-black">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:mr-8 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
              Hola, soy
              <br />
            
              <span className="text-4xl text-center block mt-2" style={{ color: '#FFC107' }}>
                Maira Zamer
              </span>
            </h1>
            <br />
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
              Desarrolladora Full Stack, orientada al Front-End, con conocimientos en diseño UX/UI.
            </p>
            <div className="mt-4">
              <a
                href="/cv_maira_zamer.pdf"
                download
                className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
              >
                Descargar CV
              </a>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>
          <img
            src="/programacion.gif"
            className="w-50 h-50 rounded-full shadow-lg md:ml-8"
            alt="Maira Zamer"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
