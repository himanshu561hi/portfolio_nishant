import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Loader2, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";


// Reusable component for contact info items
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

// WhatsApp Icon SVG Component
const WhatsAppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20">
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);


const ContactSection = () => {
  const { toast } = useToast();
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCoolingDown, setIsCoolingDown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.current) {
      console.error("Form ref is not attached to the element.");
      toast({
        title: "Application Error",
        description: "Could not submit the form. Please refresh the page.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(
      'service_h6roymp',      // <-- Replace with your Service ID
      'template_4ep654r',     // <-- Replace with your Template ID
      form.current,
      'zVGw6BfSCK-1SLOV9'       // <-- Replace with your Public Key
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        toast({
          title: "Message sent!",
          description: "Thank you for contacting me. I'll get back to you shortly.",
        });
        form.current.reset();
        // FIX: Start the cooldown period after a successful submission
        setIsCoolingDown(true);
        setTimeout(() => {
          setIsCoolingDown(false);
        }, 60000); // 60-second cooldown
      }, (error) => {
        console.log('FAILED...', error.text);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const whatsappNumber = "918700952742";
  const whatsappMessage = "Hii Nishant, I like your work. Can we talk at a specific time?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background text-foreground">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
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
                <InfoItem icon={<Mail className="text-primary" size={20} />} label="Email" value="rnishant5656@gmail.com" href="mailto:rnishant5656@gmail.com" />
                <InfoItem icon={<Phone className="text-primary" size={20} />} label="Phone" value="+91 8700952742" href="tel:+918700952742" />
                <InfoItem icon={<MapPin className="text-primary" size={20} />} label="Location" value="Ghaziabad, India" href="https://www.google.com/maps/place/Ghaziabad,+Uttar+Pradesh" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/the_ed1tz/" target="_blank" rel="noopener noreferrer" className="bg-background rounded-full p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"><Instagram size={20} /></a>
                <a href="https://www.linkedin.com/in/nishant-gupta-11747b247/" target="_blank" rel="noopener noreferrer" className="bg-background rounded-full p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"><Linkedin size={20} /></a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-background rounded-full p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"><WhatsAppIcon /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form ref={form} onSubmit={handleSubmit} className="bg-muted/40 rounded-xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required ></textarea>
              </div>
              {/* FIX: Updated button state to handle cooldown */}
              <button type="submit" disabled={isSubmitting || isCoolingDown} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center disabled:bg-primary/70 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <span className="flex items-center"><Loader2 className="animate-spin mr-2" size={18} />Sending...</span>
                ) : isCoolingDown ? (
                  <span className="flex items-center"><Clock className="mr-2" size={18} />Wait to send again</span>
                ) : (
                  <span className="flex items-center"><Send className="mr-2" size={18} />Send Message</span>
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
