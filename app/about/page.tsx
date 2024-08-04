import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const About: React.FC = () => {
  const tools = [
    { name: "JavaScript", logo: "/logos/javascript.png" },
    { name: "TypeScript", logo: "/logos/typescript.png" },
    { name: "Next.js", logo: "/logos/next.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    { name: "Node.js", logo: "/logos/node.png" },
    { name: "React", logo: "/logos/react.png" },
    { name: "CSS", logo: "/logos/css.png" },
    { name: "HTML", logo: "/logos/html.png" },
    { name: "Sequelize", logo: "/logos/sequelize.png" },
    { name: "PostgreSQL", logo: "/logos/postgres.png" },
    { name: "Figma", logo: "/logos/figma.png" },
  ];

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-black">
        <div className="container mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            Sobre Mí
          </h1>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:flex-1 text-lg text-gray-700 dark:text-gray-300">
              <p className="mb-4">
                Desarrolladora full stack, orientada al Front-End. Diseño UX/UI.
                <br />
                Me encanta el mundo de la tecnología y capacitarme constantemente para aprender nuevas tecnologías y técnicas de programación.
                <br />
                Además de mi experiencia en desarrollo web, soy emprendedora y tengo un título en Gestión Industrial.
                <br />
                Estoy siempre en busca de nuevas oportunidades para crecer y colaborar en proyectos desafiantes. Me entusiasma trabajar en equipo y aportar soluciones creativas y de alta calidad.
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
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Tecnologías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center">
                <img src={tool.logo} alt={`${tool.name} logo`} className="w-16 h-16 mb-2" />
                <span className="text-lg text-gray-700 dark:text-gray-300">{tool.name}</span>
              </div>
            ))}
          </div>
          <Contact/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
