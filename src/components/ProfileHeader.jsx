import { motion } from 'framer-motion';

export const ProfileHeader = () => (
  <header className="flex flex-col items-center mb-8 z-10">
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      className="relative mb-4 group"
    >
      <div className="absolute -inset-1 rounded-full bg-brand-primary/30 blur-lg group-hover:bg-brand-primary/40 transition-all duration-300" />
      <img 
        src="https://ui-avatars.com/api/?name=DPM+FK&background=2563eb&color=fff&size=150" 
        alt="Logo DPM FK UNTAR" 
        className="relative h-24 w-24 rounded-full shadow-lg border-4 border-white/80 object-cover"
        loading="lazy"
      />
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-2xl font-bold text-brand-text text-center mb-1 tracking-tight"
    >
      DPM FK UNTAR
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-sm text-brand-text opacity-75 text-center px-4 max-w-sm"
    >
      Dewan Perwakilan Mahasiswa Fakultas Kedokteran Universitas Tarumanagara
    </motion.p>
  </header>
);