import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Pokemon',
      description: 'Proyecto Individual sobre Pokemons',
      repoGit: 'https://github.com/MairaZamer/PIPokemons',
      image: '/PI/HomePage2.png',
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
        <h1 className="text-3xl font-bold mb-4 ">Proyectos</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md rounded-lg p-4 m-4 border-2 border-purple-700 flex flex-col justify-between" 
              style={{ width: '500px', height: '500px' }}
            >
              <div>
                <h3 className="text-lg font-bold text-purple-700">{project.title}</h3>
                <p className="mt-2 text-black">{project.description}</p>
                <br/>
                {project.image && (
                  <img 
                    className="mt-4 w-full h-64 object-cover"
                    src={project.image} 
                    alt={`${project.title} screenshot`} 
                  />
                )}
              </div>
              <div>
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
                    <br/>
                    <br/>
                    <div className="mt-4">
                      <a href={project.frontendRepo} className="text-purple-700 block" target="_blank" rel="noopener noreferrer">Repositorio Frontend</a>
                      <a href={project.backendRepo} className="text-purple-700 block" target="_blank" rel="noopener noreferrer">Repositorio Backend</a>
                    </div>
                  </>
                ) : (
                  <a href={project.repoGit} className="text-purple-700 mt-4 block">Repositorio en Github</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
