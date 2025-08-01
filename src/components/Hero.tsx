import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* <div className="absolute top-0 left-0 w-full h-full z-0">
        <Spline
          scene="https://prod.spline.design/BtmQCqJpWk5TObDr/scene.splinecode"
        />
      </div> */}

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* FIX: Reduced gap on mobile to save vertical space */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <motion.h2 variants={itemVariants} className="text-lg md:text-xl font-medium text-primary mb-2">
              Hello, I'm Nishant
            </motion.h2>

            {/* FIX: Reduced font size on mobile to save space */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4"
            >
              Creative <span className="text-gradient">Video Editor</span>
            </motion.h1>

            {/* FIX: Made text italic, smaller, and reduced bottom margin */}
            <motion.p variants={itemVariants} className="italic text-sm md:text-base text-foreground/90 mb-6 max-w-xl mx-auto lg:mx-0">
              Transforming ideas into visual experiences. Specializing in professional video editing for clients worldwide.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg">
                View Projects
              </a>
              <a href="#contact" className="border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-full transition-colors">
                Get In Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="/nishant.jpeg"
                alt="A portrait of Nishant, the video editor"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors animate-bounce">
          <span className="mb-1">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;