
const Technology: React.FC = () => {
    const tools = [
        { name: "JavaScript", logo: "/logos/javascript.png" },
        { name: "TypeScript", logo: "/logos/typescript.png" },
        { name: "React", logo: "/logos/react.png" },
        { name: "Next.js", logo: "/logos/next.png" },
        { name: "Node.js", logo: "/logos/nodejs.png" },
        {
            name: "HTML & CSS",
            logos: ["/logos/html.png", "/logos/css.png"], 
        },
        { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
        { name: "Sequelize", logo: "/logos/sequelize.png" },
        { name: "PostgreSQL", logo: "/logos/postgres.png" },
  
    ];

    return (
        <div>
            <main>
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="font-ebGaramond flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
                            >
                                {Array.isArray(tool.logos) ? (
                                    <div className="flex space-x-2">
                                        {tool.logos.map((logo, index) => (
                                            <img
                                                key={index}
                                                src={logo}
                                                alt={`${tool.name} logo`}
                                                className="w-12 h-12 mb-3 rounded-lg shadow-md"
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <img
                                        src={tool.logo}
                                        alt={`${tool.name} logo`}
                                        className="w-12 h-12 mb-3 rounded-lg shadow-md"
                                    />
                                )}

                                <span className="text-lg text-white">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Technology;
