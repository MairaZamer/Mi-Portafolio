import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const About: React.FC = () => {
  

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b ">
        <div className="container mx-auto p-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Sobre Mí
          </h1>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:flex-1 text-lg text-white dark:text-gray-300 text-justify">
              <p className="text-lg text-white mb-4">
                Desarrolladora Full Stack, orientada al Front-End. Diseño UX/UI.
                <br />
                Me encanta el mundo de la tecnología y capacitarme constantemente para aprender nuevas tecnologías y técnicas de programación.
                <br />
                Además de mi experiencia en desarrollo web, soy emprendedora y tengo un título en Gestión Industrial.
                <br />
                Estoy siempre en busca de nuevas oportunidades para crecer y colaborar en proyectos desafiantes. Me entusiasma trabajar en equipo, aportar soluciones creativas y de calidad.
              </p>
            </div>
            <div className="md:flex-none md:ml-8">
              <img
                src="/maira.jpeg"
                className="w-40 h-55 rounded-full border-4 border-yellow-500"
                alt="Maira Zamer"
              />
            </div>
          </div>
          <Contact/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
