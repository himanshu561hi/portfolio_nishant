import { ArrowUp } from 'lucide-react';
import { Instagram, Linkedin } from 'lucide-react'; // Assuming you might want social links here too

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold text-gradient">
              001XZ_MEDIA
            </a>
            <p className="mt-2 text-muted-foreground max-w-sm mx-auto md:mx-0">
              Creating visual experiences that tell compelling stories and leave lasting impressions.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-4">
            {/* Optional: Add social links here again for easy access */}
             <a href="https://www.instagram.com/the_ed1tz/" target="_blank" rel="noopener noreferrer" className="bg-background rounded-full p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nishant-gupta-11747b247/" target="_blank" rel="noopener noreferrer" className="bg-background rounded-full p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={20} />
              </a>
            <button
              onClick={scrollToTop}
              className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Nishant Gupta. All Rights Reserved.
          </p>
          
          {/* These links are optional for a portfolio, but can be enabled if needed */}
          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;