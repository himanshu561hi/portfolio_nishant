import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillsDisplayProps {
  skills: Skill[];
}

const SkillsDisplay = ({ skills }: SkillsDisplayProps) => {
  return (
    <div className="space-y-5">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="font-semibold text-base text-foreground">{skill.name}</span>
            <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
             {/* The progress bar element */}
            <motion.div
              className="bg-primary h-2.5 rounded-full"
              role="progressbar" // IMPROVEMENT: Added for accessibility
              aria-valuenow={skill.level} // IMPROVEMENT: Helps screen readers announce the value
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} skill level`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, amount: 0.8 }}
              // IMPROVEMENT: Smoother "ease out" animation
              transition={{ duration: 1.2, delay: 0.1 * index, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDisplay;