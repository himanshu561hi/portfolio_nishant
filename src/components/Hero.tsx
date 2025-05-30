
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden ml-20">
      <ThreeScene />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.h2 
            className="text-lg md:text-xl font-medium text-primary mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hello, I'm Nishant
          </motion.h2>
          
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-6xl font-bold font-display mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Creative 
            {/* <span className="text-gradient">Graphic Designer</span> & */}
             <span className="text-gradient"> Video Editor</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-2xl pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Transforming ideas into visual experiences. Specializing in brand identity design, 
            and professional video editing for clients worldwide.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#projects" className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition-colors">
          <span className="mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
