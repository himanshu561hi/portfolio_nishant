
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
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 * index }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsDisplay;
