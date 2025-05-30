
import { Check } from 'lucide-react';

interface ExperienceCardProps {
  job: {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  };
  isRight: boolean;
}

const ExperienceCard = ({ job, isRight }: ExperienceCardProps) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center ${isRight ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
      
      {/* Date badge */}
      <div className="md:w-1/2 flex md:justify-center mb-6 md:mb-0">
        <span className="bg-secondary text-foreground text-sm font-medium py-1.5 px-4 rounded-full">
          {job.period}
        </span>
      </div>
      
      {/* Content */}
      <div className={`md:w-1/2 bg-background rounded-xl shadow-md p-6 ${isRight ? 'md:pr-12' : 'md:pl-12'}`}>
        <h3 className="text-xl font-bold mb-1">{job.role}</h3>
        <h4 className="text-primary font-medium mb-4">{job.company}</h4>
        <p className="text-muted-foreground mb-4">{job.description}</p>
        
        <ul className="space-y-2">
          {job.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 text-primary">
                <Check size={16} />
              </span>
              <span className="text-sm">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
