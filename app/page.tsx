
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-black">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:mr-8">
            <h1 className="text-5xl font-bold text-purple-dark mb-4">Hola, 
            <br />
            <br />
              Soy Maira Zamer</h1>
              <br />
            <p className="text-2xl text-black dark:text-white mb-8">
              Desarrolladora Full Stack, orientada al Front-End, con conocimientos en diseño UX/UI.
            </p>
            <div className="mt-4">
              <a
                href="/cv_maira_zamer.pdf"
                download
                className="inline-block bg-purple-dark text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
              >
                Descargar CV
              </a>
            </div>
            <br />
            <SocialLinks />
          </div>
          <img
            src="/programacion.gif"
            className="w-50 h-50 rounded-full md:ml-8"
            alt="Maira Zamer"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
