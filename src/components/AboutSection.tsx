
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';
import { skills, services } from '@/lib/data';
import SkillsDisplay from './SkillsDisplay';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">About Me</h2>
            <p className="text-lg mb-4">
              I'm a passionate creative professional with over 5 years of experience in graphic design and video editing. 
              My work focuses on creating visually compelling content that communicates effectively and engages audiences.
            </p>
            <p className="text-lg mb-6">
              With a background in both commercial and artistic projects, I bring a versatile skill set and a keen eye 
              for detail to every project. I'm committed to delivering high-quality work that exceeds client expectations 
              and achieves strategic goals.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <Briefcase size={20} className="text-primary mr-2" />
                  <h3 className="font-bold">Experience</h3>
                </div>
                <p className="text-2xl font-bold">6+ Years</p>
                <p className="text-xs text-muted-foreground">Professional Work</p>
              </div>
              <div className="bg-background p-4 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <Users size={20} className="text-primary mr-2" />
                  <h3 className="font-bold">Videos Edited</h3>
                </div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-muted-foreground">Worldwide</p>
              </div>
              {/* <div className="bg-background p-4 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <Award size={20} className="text-primary mr-2" />
                  <h3 className="font-bold">Awards</h3>
                </div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">Design Excellence</p>
              </div> */}
              <div className="bg-background p-4 rounded-xl shadow-sm">
                <div className="flex items-center mb-2">
                  <GraduationCap size={20} className="text-primary mr-2" />
                  <h3 className="font-bold">Education</h3>
                </div>
                <p className="text-2xl font-bold">B.Com,<br /> Animation Prime</p>
                {/* <p className="text-xs text-muted-foreground">Design & Media Arts</p> */}
              </div>
            </div>
          </div>
          
          {/* Skills section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <SkillsDisplay skills={skills} />
          </div>
        </motion.div>
        
        {/* Services */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Services I Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {service.icon === 'Pen' && <Briefcase className="text-primary" size={24} />}
                  {service.icon === 'Video' && <Users className="text-primary" size={24} />}
                  {service.icon === 'LayoutGrid' && <Award className="text-primary" size={24} />}
                  {service.icon === 'Monitor' && <GraduationCap className="text-primary" size={24} />}
                </div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;
