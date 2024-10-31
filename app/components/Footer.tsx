import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <hr className="border-purple-800 mx-auto" />
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-ebGaramond text-sm text-white text-center sm:text-left">
                        © 2024 <a href="#" className="hover:underline">Maira Zamer</a>. Todos los derechos reservados.
                    </span>
                    <div className="flex justify-center sm:justify-start mt-4 sm:mt-0">
                        <a 
                          href="https://github.com/mairazamer" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-teal-500 mx-2"
                        >
                            <img src="/logos/github.png" alt="GitHub" className="w-8 h-8" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/maira-zamer/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-teal-500 mx-2"
                        >
                            <img src="/logos/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
