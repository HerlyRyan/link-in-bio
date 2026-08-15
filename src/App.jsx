import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInstagram, FiMail, FiGlobe, FiMapPin, FiTwitter, FiYoutube, FiExternalLink } from 'react-icons/fi';
import { LoadingScreen } from './components/LoadingScreen';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkItem } from './components/LinkItem';
import { FooterComponent } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { id: 1, title: 'Official Website DPM FK UNTAR', url: '#', icon: <FiGlobe size={20} /> },
    { id: 2, title: 'Pendaftaran Anggota Baru', url: '#', icon: <FiMail size={20} /> },
    { id: 3, title: 'Lokasi Sekretariat', url: '#', icon: <FiMapPin size={20} /> },
  ];

  const socialLinks = [
    { id: 1, icon: <FiInstagram size={22} />, url: '#', label: 'Instagram' },
    { id: 2, icon: <FiTwitter size={22} />, url: '#', label: 'Twitter' },
    { id: 3, icon: <FiYoutube size={22} />, url: '#', label: 'YouTube' },
  ];

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.main 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative min-h-screen bg-brand-bg px-4 py-12 flex flex-col items-center justify-between overflow-hidden"
        >
          {/* Background Decorative Glow (Menghidupkan efek Glassmorphism) */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full max-w-md flex flex-col items-center relative z-10">
            <ProfileHeader />

            <nav className="w-full space-y-3.5 mb-10">
              {links.path ? null : links.map((link, index) => (
                <LinkItem 
                  key={link.id} 
                  title={link.title} 
                  url={link.url} 
                  icon={link.icon} 
                  index={index}
                  FiExternalLink={FiExternalLink} 
                />
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <a 
                  key={social.id}
                  href={social.url} 
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/70 backdrop-blur-md border border-white/50 rounded-full text-brand-text hover:text-brand-primary hover:scale-110 hover:-translate-y-1 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <FooterComponent />
        </motion.main>
      )}
    </AnimatePresence>
  );
}