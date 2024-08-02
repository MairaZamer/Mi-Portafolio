

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Pokemon',
      description: 'Proyecto Individual sobre Pokemons',
      link: '#',
    },
    {
      title: 'Ebooks Palace',
      description: 'E-commerce de venta de libros digitales.',
      link: 'https://www.youtube.com/watch?v=ZT9vL3sGkjg&t=4s&ab_channel=MairaZamer',
      video: true,
      frontendRepo: 'https://github.com/MairaZamer/EbooksPalace-Front',
      backendRepo: 'https://github.com/MairaZamer/EbooksPalace-back',
    },
   
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4 flex-grow bg-white">
        <h1 className="text-3xl font-bold mb-4">Proyectos</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 m-4 border-purple-dark border-2">
              <h3 className="text-lg font-bold text-purple-dark">{project.title}</h3>
              <p className="mt-2 text-black">{project.description}</p>
              {project.video ? (
                <>
                  <iframe 
                    className="mt-4 w-full h-64" 
                    src="https://www.youtube.com/embed/ZT9vL3sGkjg"
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                  <div className="mt-4">
                    <a href={project.frontendRepo} className="text-purple-dark block" target="_blank" rel="noopener noreferrer">Repositorio Frontend</a>
                    <a href={project.backendRepo} className="text-purple-dark block" target="_blank" rel="noopener noreferrer">Repositorio Backend</a>
                  </div>
                </>
              ) : (
                <a href={project.link} className="text-purple-light mt-4 block">Ver Proyecto</a>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
