import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Technology: React.FC = () => {
    const tools = [
        { name: "JavaScript", logo: "/logos/javascript.png" },
        { name: "TypeScript", logo: "/logos/typescript.png" },
        { name: "React", logo: "/logos/react.png" },
        { name: "JSX", logo: "/logos/jsx.png" },
        { name: "TSX", logo: "/logos/tsx.png" },        
        { name: "Redux", logo: "/logos/redux.png" },
        { name: "Next.js", logo: "/logos/next.png" },
        { name: "Node.js", logo: "/logos/node.png" },
        { name: "HTML", logo: "/logos/html.png" },
        { name: "CSS", logo: "/logos/css.png" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
        { name: "Sequelize", logo: "/logos/sequelize.png" },
        { name: "PostgreSQL", logo: "/logos/postgres.png" },
        { name: "JSON", logo: "/logos/json.png" },
        { name: "Figma", logo: "/logos/figma1.png" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black">
            <Navbar />
            <main className="flex flex-col items-center justify-center p-6">
                <div className="container mx-auto p-6 bg-black bg-opacity-60 rounded-lg shadow-lg">
                    <h2 className="text-4xl font-bold text-white text-center mb-8">
                        Tecnologías
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {tools.map((tool) => (
                            <div 
                                key={tool.name} 
                                className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
                            >
                                <img 
                                    src={tool.logo} 
                                    alt={`${tool.name} logo`} 
                                    className="w-20 h-20 mb-3 rounded-lg shadow-md" 
                                />
                                <span className="text-lg text-white">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Technology;
