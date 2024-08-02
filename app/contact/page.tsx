

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';

const Contact: React.FC = () => {
  return (
    <div>
      <Navbar />
      <br />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <p className="text-lg mb-4">Puedes contactarme a través de mis redes sociales o por: </p>
        <br />
        <div className="mt-4 flex flex-col md:flex-row items-center md:space-x-4">
          <a
            href="https://wa.me/543482298231" 
            className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors mb-4 md:mb-0"
            target="_blank"
            rel="noopener noreferrer"
            >
            Enviar WhatsApp
          </a>
          <a
            href="mailto:mairazamer@gmail.com"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
            Enviar Correo
          </a>
        </div>
        <br />
        <SocialLinks/>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
