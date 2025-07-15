import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react'; // Using a more appropriate icon

// IMPROVEMENT: Removed the optional 'onViewDetails' prop as it's no longer needed.
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    driveLink: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative flex flex-col h-full overflow-hidden rounded-xl bg-background shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      layout
    >
      {/* --- Image Container --- */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* --- Content Container --- */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <span className="text-xs font-semibold text-primary mb-2 block">
            {project.category}
          </span>
          <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-4 mt-auto">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-muted px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* --- Hover Overlay --- */}
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="text-center">
          {/* FIX: This is now an `<a>` tag that links directly to the project. */}
          <a
            href={project.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:bg-primary/90 transition-all"
            // Stop propagation to prevent any parent click handlers from firing if they exist.
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;