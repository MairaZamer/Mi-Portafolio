"use client";
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Contador de dias',
      description: 'Calculador de dias y horas, realizado con next y tailwind CSS',
      repoGit: 'https://github.com/MairaZamer/ContadorDeDias',
      image: '/fotos/Contadordedias.jpeg',
      pageName: 'Contador de dias y horas',
    },
    {
      title: 'Ebooks Palace',
      description: 'E-commerce de venta de libros digitales, con carrito de compras, administración de usuarios y pasarela de pago integrada.',
      ytLink: 'https://www.youtube.com/watch?v=ZT9vL3sGkjg&t=4s&ab_channel=MairaZamer',
      image: '/fotos/ebooklila.jpeg',
      frontendRepo: 'https://github.com/MairaZamer/EbooksPalace-Front',
      backendRepo: 'https://github.com/MairaZamer/EbooksPalace-back',
      pageName: 'E-commerce libros digitales',
    },
    {
      title: 'Pokemon',
      description: 'Aplicación que permite buscar, filtrar y ver detalles de Pokémons. Incluye la integración de API y gestión de estado con Redux.',
      repoGit: 'https://github.com/MairaZamer/PIPokemons',
      image: '/fotos/pokemon.jpg',
      pageName: 'Proyecto Individual Pokemon',
    },
    {
      title: 'Rick and Morty',
      description: 'Proyecto sobre Rick and Morty, que muestra personajes utilizando la API de Rick and Morty. Desarrollado con React, Redux, Nodejs.',
      repoGit: 'https://github.com/MairaZamer/integradorRickAndMorty',
      image: '/fotos/rickandmorty.jpg',
      pageName: 'Proyecto sobre Rick and Morty',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <main>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="font-ebGaramond relative bg-purple-light text-white rounded-lg shadow-lg m-4 overflow-hidden"
              style={{ width: '100%', maxWidth: '350px', height: '450px' }}
            >
              {project.image && (
                <img
                  className="w-full h-full object-cover transition-transform duration-500"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl text-customOrange font-bold mb-2">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <div>
                  {project.ytLink ? (
                    <a href={project.ytLink} className="font-ebGaramond text-white block mt-4" target="_blank" rel="noopener noreferrer">
                      Link de YouTube
                    </a>
                  ) : (
                    <a href={project.repoGit} className="font-ebGaramond text-white  block mt-4" target="_blank" rel="noopener noreferrer">
                      Repositorio en Github
                    </a>
                  )}
                  {project.frontendRepo && (
                    <a href={project.frontendRepo} className="font-ebGaramond text-white  block mt-4" target="_blank" rel="noopener noreferrer">
                      Repositorio Frontend
                    </a>
                  )}
                  {project.backendRepo && (
                    <a href={project.backendRepo} className="font-ebGaramond text-white  block mt-4" target="_blank" rel="noopener noreferrer">
                      Repositorio Backend
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
