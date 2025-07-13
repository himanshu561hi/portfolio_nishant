import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Graphic Design', 'Video Editing', 'UI/UX'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my most recent and impactful work across different creative disciplines.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                ? 'bg-primary text-white'
                : 'bg-background hover:bg-secondary'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </div>

        {/* Anchor to view all projects on Drive */}
        <div className="flex justify-center mt-10">
          <a
            href="https://drive.google.com/drive/folders/1q4UwiD_qPbhZeH5xzWjXA17njw3LD4xD"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/80 transition"
          >
            View All
          </a>
        </div>

        {/* Modal for project details */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-background p-8 rounded-lg max-w-lg w-full relative">
              <button
                className="absolute top-2 right-2 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="mb-4">{selectedProject.description || "No description available."}</p>
              {selectedProject.driveLink && (
                <a
                  href={selectedProject.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                >
                  View on Drive
                </a>
              )}
              <div className="flex gap-2 flex-wrap mt-4">
                {selectedProject.tags?.map((tag: string) => (
                  <span key={tag} className="bg-secondary px-2 py-1 rounded text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
