import Navbar from './Navbar';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

const Contact: React.FC = () => {
  return (
    <div >
      <main className="flex-grow flex flex-col items-center text-center p-6  bg-opacity-50 rounded-lg shadow-lg" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
        <h1 className="text-4xl font-bold text-white mb-6">
          Contacto
        </h1>
        <p className="text-lg text-white mb-6">
          Puedes contactarme a través de mis redes sociales o por:
        </p>
        <div className="mt-4 flex flex-col md:flex-row items-center md:space-x-4">
          <a
            href="https://wa.me/543482298231"
            className="inline-block bg-purple-950 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition-colors mb-4 md:mb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            href="mailto:mairazamer@gmail.com"
            className="inline-block bg-purple-950 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition-colors"
          >
            Gmail
          </a>
        </div>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
