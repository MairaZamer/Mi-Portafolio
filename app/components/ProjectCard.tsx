

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 border-purple-dark border-2">
      <h3 className="text-lg font-bold text-purple-dark">{title}</h3>
      <p className="mt-2 text-black">{description}</p>
      <a href={link} className="text-purple-light mt-4 block">Ver Proyecto</a>
    </div>
  );
}

export default ProjectCard;
