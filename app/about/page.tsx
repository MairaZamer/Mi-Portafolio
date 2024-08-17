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
              Hola, soy Maira Zamer, desarrolladora full stack especializada en front-end, con experiencia en crear aplicaciones web intuitivas y eficientes. 
              <br/>
              <br/>
              Mi stack tecnológico incluye React, Next.js, Tailwind CSS, JavaScript (ES6+), HTML, CSS y Git. Me apasiona el diseño de interfaces atractivas y accesibles, así como la optimización de la experiencia del usuario. 
              <br/>
              <br/>
              Estoy constantemente aprendiendo y experimentando con nuevas tecnologías para mejorar la calidad de mi trabajo. 
              <br/>
              <br/>
              Fuera del código, me interesa la gestión de proyectos y la optimización de procesos, habilidades que he desarrollado a lo largo de mi carrera como emprendedora.
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
