
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-display font-bold text-gradient">
              001XZ_MEDIA
            </a>
            <p className="mt-2 text-muted-foreground max-w-xs">
              Creating visual experiences that tell compelling stories and leave lasting impressions.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 001XZ_MEDIA. All rights reserved.
          </p>
          
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
