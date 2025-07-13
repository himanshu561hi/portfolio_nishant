import { Briefcase, Check } from 'lucide-react';

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

  // Card Content Component to avoid repetition
  const CardContent = () => (
    <div className="bg-background rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full p-6">
      <p className="text-sm font-semibold text-primary mb-2">{job.period}</p>
      <h3 className="text-xl font-bold font-display mb-1">{job.role}</h3>
      <h4 className="font-medium text-muted-foreground mb-4">{job.company}</h4>
      <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
      
      <ul className="space-y-2">
        {job.achievements.map((achievement, index) => (
          <li key={index} className="flex items-start text-sm text-muted-foreground">
            <Check size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative">
      {/* --- Mobile Layout --- */}
      {/* IMPROVEMENT: On mobile, everything is in a single column to the right of the timeline. */}
      <div className="pl-10 md:hidden">
         <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
         <CardContent />
      </div>

      {/* --- Desktop Layout --- */}
      {/* IMPROVEMENT: A robust grid layout for perfect desktop alignment. */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-start gap-8">
        {/* Left Side */}
        <div className={`text-right ${isRight ? 'text-transparent' : ''}`}>
          {!isRight && <CardContent />}
        </div>

        {/* Center Dot */}
        <div className="w-5 h-5 rounded-full bg-primary border-4 border-background z-10 row-start-1 col-start-2"></div>
        
        {/* Right Side */}
        <div className={`text-left ${isRight ? '' : 'text-transparent'}`}>
          {isRight && <CardContent />}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;