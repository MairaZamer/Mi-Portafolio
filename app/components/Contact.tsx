import Navbar from './Navbar';
import Footer from './Footer';
import SocialLinks from './SocialLinks';

const Contact: React.FC = () => {
  return (
    <div>
      <main >
        <br/>
        <br/>
        <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
            Contacto
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Puedes contactarme a través de mis redes sociales o por:
          </p>
          <div className="mt-4 flex flex-col md:flex-row items-center md:space-x-4">
            <a
              href="https://wa.me/543482298231"
              className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors mb-4 md:mb-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="mailto:mairazamer@gmail.com"
              className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition-colors"
            >
              Gmail
            </a>
          </div>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
