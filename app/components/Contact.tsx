import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col md:flex-row items-center md:space-x-3">
        <a
          href="/CV.pdf" // Ruta al archivo PDF en la carpeta public
          download // Esto permite la descarga del archivo
          className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 mx-2 md:mx-4 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-customOrange to-blue-500 group-hover:from-customOrange group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <span className="font-ebGaramond relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Descargar CV
          </span>
        </a>
        <div className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 mx-2 md:mx-4 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-customOrange to-blue-500 group-hover:from-customOrange group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="font-ebGaramond relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Gmail: mairazamer@gmail.com
          </span>
        </div>
        <div>
          <a
            href="https://wa.me/543482298231"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 mx-2 md:mx-4 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-customOrange to-blue-500 group-hover:from-customOrange group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-ebGaramond relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

