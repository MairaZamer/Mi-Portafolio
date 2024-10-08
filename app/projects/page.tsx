"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Rick and Morty',
      description: 'Proyecto sobre Rick and Morty, que muestra personajes utilizando la API de Rick and Morty. Desarrollado con React, Redux, Nodejs.',
      repoGit: 'https://github.com/MairaZamer/integradorRickAndMorty',
      image: '/rickandmorty.jpg',
      pageName: 'Proyecto sobre Rick and Morty',
    },
    {
      title: 'Pokemon',
      description: 'Aplicación que permite buscar, filtrar y ver detalles de Pokémons. Incluye la integración de API y gestión de estado con Redux.',
      repoGit: 'https://github.com/MairaZamer/PIPokemons',
      image: '/pokemon.jpg',
      pageName: 'Proyecto Individual Pokemon',
    },
    {
      title: 'Ebooks Palace',
      description: 'E-commerce de venta de libros digitales, con carrito de compras, administración de usuarios y pasarela de pago integrada.',
      ytLink: 'https://www.youtube.com/watch?v=ZT9vL3sGkjg&t=4s&ab_channel=MairaZamer',
      image: '/ebooklila.jpeg',
      frontendRepo: 'https://github.com/MairaZamer/EbooksPalace-Front',
      backendRepo: 'https://github.com/MairaZamer/EbooksPalace-back',
      pageName: 'E-commerce libros digitales',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 to-black">
      <Navbar />
      <main className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">Proyectos</h1>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-purple-light hover:bg-purple-dark text-white rounded-lg shadow-lg m-4 overflow-hidden"
              style={{ width: '500px', height: '550px' }}
            >
              {project.image && (
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />
              )}

              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <div>
                  {project.ytLink ? (
                    <a href={project.ytLink} className="text-sky-200 block mt-4" target="_blank" rel="noopener noreferrer">Link de YouTube</a>
                  ) : (
                    <a href={project.repoGit} className="text-sky-200 block mt-4" target="_blank" rel="noopener noreferrer">Repositorio en Github</a>
                  )}
                  {project.frontendRepo && (
                    <a href={project.frontendRepo} className="text-sky-200 block mt-4" target="_blank" rel="noopener noreferrer">Repositorio Frontend</a>
                  )}
                  {project.backendRepo && (
                    <a href={project.backendRepo} className="text-sky-200 block mt-4" target="_blank" rel="noopener noreferrer">Repositorio Backend</a>
                  )}
                </div>
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
