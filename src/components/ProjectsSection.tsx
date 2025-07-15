import { useState } from 'react';
import { motion } from 'framer-motion';
// REMOVED: Unused imports like useEffect, AnimatePresence, X icon
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

// REMOVED: The entire ProjectModal component is gone.

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  // REMOVED: The `selectedProject` state is no longer needed.

  const categories = ['All', 'Graphic Design', 'Video Editing', 'UI/UX'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (The title and filter buttons section remains the same) ... */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my most recent and impactful work across different creative disciplines.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${filter === category
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-background hover:bg-muted/80'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* FIX: No longer needs the onViewDetails prop. */}
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* "View All" Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://drive.google.com/drive/folders/1q4UwiD_qPbhZeH5xzWjXA17njw3LD4xD"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30 transform hover:scale-105"
          >
            View All Projects
          </a>
        </div>

        {/* REMOVED: The entire AnimatePresence and modal rendering block is gone. */}
      </div>
    </section>
  );
};

export default ProjectsSection;