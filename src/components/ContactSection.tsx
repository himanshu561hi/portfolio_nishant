import { useState } from 'react';
import { motion } from 'framer-motion';
// IMPROVEMENT: Imported consistent icons from Lucide
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Reusable component for contact info items for cleaner code
const InfoItem = ({ icon, label, value, href }) => (
  <a 
    href={href}
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-start group"
  >
    <div className="bg-primary/10 p-3 rounded-lg mr-4 transition-colors group-hover:bg-primary/20">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-muted-foreground mb-1">{label}</h4>
      <p className="font-semibold text-foreground transition-colors group-hover:text-primary">{value}</p>
    </div>
  </a>
);


const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you shortly.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you. Send me a message, and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        {/* FIX: Corrected grid layout. Changed `lg:grid-cols-50` to `lg:grid-cols-3` for a proper 1/3 + 2/3 layout. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* --- Contact Info (Left Side) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-muted/40 rounded-xl p-6 lg:p-8 space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* IMPROVEMENT: Contact details are now clickable links */}
                <InfoItem 
                  icon={<Mail className="text-primary" size={20} />} 
                  label="Email" 
                  value="rnishant5656@gmail.com"
                  href="mailto:rnishant5656@gmail.com"
                />
                <InfoItem 
                  icon={<Phone className="text-primary" size={20} />} 
                  label="Phone" 
                  value="+91 8700952742"
                  href="tel:+918700952742"
                />
                <InfoItem 
                  icon={<MapPin className="text-primary" size={20} />} 
                  label="Location" 
                  value="Ghaziabad, India"
                  href="https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {/* IMPROVEMENT: Replaced inline SVGs with consistent Lucide icons */}
                <a href="https://www.instagram.com/the_ed1tz/" target="_blank" rel="noopener noreferrer" className="bg-background rounded-full p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/nishant-gupta-11747b247/" target="_blank" rel="noopener noreferrer" className="bg-background rounded-full p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* --- Contact Form (Right Side) --- */}
          {/* FIX: Uncommented the form section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-muted/40 rounded-xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" rows={5} required ></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center disabled:bg-primary/70">
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;