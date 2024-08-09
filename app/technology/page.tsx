import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Technology: React.FC = () => {
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
            <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
                <div className="container mx-auto p-6 bg-black bg-opacity-50 rounded-lg shadow-lg">
                    <br />
                    <h2 className="text-3xl font-bold text-white dark:text-white mb-4">
                        Tecnologías
                    </h2>
                    <br />
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {tools.map((tool) => (
                            <div key={tool.name} className="flex flex-col items-center">
                                <img 
                                    src={tool.logo} 
                                    alt={`${tool.name} logo`} 
                                    className="w-16 h-16 mb-2 rounded-lg" 
                                />
                                <span className="text-lg text-white dark:text-gray-300">{tool.name}</span>
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
