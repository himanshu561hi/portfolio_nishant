import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
  };
  onViewDetails?: () => void; // Add this prop
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl bg-background shadow-md hover:shadow-xl transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <span className="text-xs font-medium text-primary mb-2 block">
          {project.category}
        </span>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        {/* <p className="text-muted-foreground mb-4">
          {project.description}
        </p> */}
        
        {/* <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-secondary px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>
      
      <motion.div 
        className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="text-center p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          {/* <p className="text-white/80 mb-6">{project.description}</p> */}
          <a href={project.driveLink}><button
            className="inline-block bg-white text-primary font-medium py-2 px-6 rounded-full hover:bg-white/90 transition-colors"
            onClick={onViewDetails}
          >
            View Details
          </button></a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
