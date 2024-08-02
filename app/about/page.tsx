// app/about/page.tsx

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <br />
      <br />
      <main className="container mx-auto p-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Sobre Mí</h1>
          <div className="flex flex-col md:flex-row items-center mb-4">
            <div className="md:flex-1">
              <p className="text-lg mb-4">
                Desarrolladora full stack, orientada al Front-End. Diseño UX/UI.
                <br />
                Me encanta el mundo de la tecnología y capacitarme contantemente para aprender nuevas teconologías y técnicas de programación.
                <br />
                Además de mi experiencia en desarrollo web, soy emprendedora y tengo un título en Gestión Industrial.
                <br />
                Estoy siempre en busca de nuevas oportunidades para crecer y colaborar en proyectos desafiantes. Me entusiasma trabajar en equipo y aportar soluciones creativas y de alta calidad.
              </p>
            </div>
            <div className="md:flex-none md:ml-8">
              <img
                src="/maira.jpeg"
                className="w-50 h-60 rounded-full"
                alt="Maira Zamer"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center">
                <img src={tool.logo} alt={`${tool.name} logo`} className="w-12 h-12 mb-2" />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
