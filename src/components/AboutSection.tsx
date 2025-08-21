import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Video, PenTool, LayoutGrid, Monitor } from 'lucide-react';
import { skills, services } from '@/lib/data';
import SkillsDisplay from './SkillsDisplay';


// A reusable component for the stat cards to keep the code clean.
const StatCard = ({ icon, title, value, subtext }) => (
  // Using flexbox to ensure cards have a consistent height and content is aligned.
  <div className="bg-background p-4 rounded-xl shadow-sm flex flex-col h-full">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="font-bold">{title}</h3>
    </div>
    {/* The flex-grow pushes the subtext to the bottom */}
    <div className="flex-grow">
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <p className="text-xs text-muted-foreground mt-auto">{subtext}</p>
  </div>
);


const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* --- Profile Section (Left) --- */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">About Me</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <p>
                I'm a passionate creative professional with over 6+ years of experience in graphic design and video editing.
                My work focuses on creating visually compelling content that communicates effectively and engages audiences.
              </p>
              <p>
                With a background in both commercial and artistic projects, I bring a versatile skill set and a keen eye
                for detail to every project. I'm committed to delivering high-quality work that exceeds client expectations
                and achieves strategic goals.
              </p>
            </div>

            {/* --- Stats --- */}
            {/* IMPROVEMENT: The grid is now more responsive for very small screens. */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <StatCard
                icon={<Briefcase size={20} className="text-primary mr-2" />}
                title="Experience"
                value="5+ Years"
                subtext="Professional Work"
              />
              <StatCard
                icon={<Users size={20} className="text-primary mr-2" />}
                title="Videos Edited"
                value="500+"
                subtext="Worldwide"
              />
              <StatCard
                icon={<GraduationCap size={20} className="text-primary mr-2" />}
                // FIX: Removed <br /> tag for better responsive text flow.
                title="Education"
                value="B.Com, Animation"
                subtext="Design & Media Arts"
              />
            </div>
          </div>

          {/* --- Skills Section (Right) --- */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-6">Skills & Expertise</h3>
            {/* This component will need its own code to be reviewed */}
            <SkillsDisplay skills={skills} />
          </div>
        </motion.div>

        {/* --- Services Section (Optional) --- */}
        {/* I've kept this commented out pending your confirmation. */}

      </div>
    </section>
  );
};

export default AboutSection;