import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

// --- Reusable Components to Avoid Repetition ---

// IMPROVEMENT: Abstracted the theme toggle button to avoid duplicating code.
const ThemeToggleButton = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-colors"
    aria-label="Toggle dark mode"
  >
    {darkMode ? <Sun size={22} /> : <Moon size={22} />}
  </button>
);

// IMPROVEMENT: Abstracted the navigation links. 
// FIX: onLinkClick is now optional to support desktop view.
const NavigationLinks = ({ links, onLinkClick = () => { }, isMobile = false }) => (
  <>
    {links.map((link) => (
      <a
        key={link.name}
        href={link.href}
        onClick={onLinkClick} // This will call closeMobileMenu on mobile, and an empty function on desktop.
        className={`font-medium hover:text-primary transition-colors ${isMobile ? 'text-2xl py-2' : 'text-sm'
          }`}
      >
        {link.name}
      </a>
    ))}
  </>
);


// --- Main Navbar Component ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // --- Effects ---

  // Effect for handling scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for toggling dark mode class on <html>
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [darkMode]);

  // IMPROVEMENT: Effect to prevent body scroll when mobile menu is open.
  useEffect(() => {
    const body = document.body;
    if (mobileMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // IMPROVEMENT: Effect to handle 'Escape' key press to close the mobile menu.
  const handleEscape = useCallback((event) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen, handleEscape]);


  // --- Data & State Toggles ---

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  }

  // --- Render ---

  return (
    <>
      {/* --- Main Navigation Bar --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        // IMPROVEMENT: Corrected z-index to ensure it's on top of other content.
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="text-2xl font-display font-bold text-gradient flex-shrink-0">
              001XZ_MEDIA
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavigationLinks links={navLinks} />
              <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                // IMPROVEMENT: Added ARIA attributes for accessibility.
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            // IMPROVEMENT: Higher z-index and click-outside-to-close functionality.
            // By setting the outer div to handle the click, we can close the menu.
            onClick={closeMobileMenu}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden"
          >
            {/* This inner div prevents the menu from closing when clicking inside it */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full flex flex-col items-center justify-center gap-8"
            >
              <NavigationLinks links={navLinks} onLinkClick={closeMobileMenu} isMobile />
              <div className="mt-4">
                <ThemeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;