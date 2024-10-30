const About: React.FC = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-6">
            <img
                src="/fotos/maira.jpeg"
                alt="Maira Zamer"
                className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 mr-0 md:mr-6 shadow-lg"
            />
            <div className="text-2xl leading-relaxed font-ebGaramond flex-1">
                <p>
                    Hola, soy Maira Zamer, una desarrolladora full stack. Me apasiona crear
                    aplicaciones web intuitivas y eficientes. Mi stack tecnológico incluye JavaScript, React, Tailwind CSS,
                    y Git. Actualmente, estoy aprendiendo Next.js y MongoDB para expandir
                    mis habilidades en el desarrollo web.
                </p>
                <br />
                <p>
                    Además de mi carrera en desarrollo web, soy emprendedora. Mi mayor logro fue ganar un concurso de
                    mujeres emprendedoras, lo que impulsó mi proyecto. También soy Técnica Superior en Gestión Industrial,
                    lo que me ha permitido optimizar procesos y gestionar proyectos de manera eficiente. Trabajo con la 
                    metodología ágil Scrum, lo que me ayuda a mantener una organización clara y eficiente en los 
                    proyectos en equipo.
                </p>
                <br />
                <p>
                    Disfruto mucho de mis hobbies, como leer, jugar videojuegos, practicar pilates y pasar tiempo al aire
                    libre en el campo. Siempre estoy buscando equilibrar mis intereses personales con mi carrera en tecnología,
                    y me mantengo en constante aprendizaje para mejorar mis conocimientos y habilidades.
                </p>
            </div>
        </div>
    );
};

export default About;
