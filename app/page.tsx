import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-amatic text-customOrange text-center md:text-left">Hola, mi nombre es Maira</h1>
        <br/>
        <span className="text-5xl font-ebGaramond text-center md:text-left">Desarrolladora full stack,</span>
        <span className="text-2xl font-ebGaramond text-center md:text-left block mt-2">
          Con experiencia en <span className="text-customOrange">Javascript, React.js</span> <span>y</span> <span className="text-customOrange"> Node.js</span>.
        </span>
        <br/>
        <Contact />
      </div>

      <div className="container mx-auto p-6" id="about">
        <h2 className="text-2xl font-abel text-center md:text-left font-ebGaramond">Sobre mí</h2>
        <br/>
        <About />
      </div>

      <div className="container mx-auto p-6" id="projects">
        <h2 className="text-2xl font-abel text-center md:text-left font-ebGaramond">Proyectos</h2>
        <br/>
        <Projects />
      </div>

      <div className="container mx-auto p-6" id="technology">
        <h2 className="text-2xl font-abel text-center md:text-left font-ebGaramond">Tecnologías</h2>
        <br/>
        <Technology />
      </div>

      <Footer />
    </div>
  );
}
