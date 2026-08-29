import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export const LinkItem = ({ title, icon, index, onClick, isSpecial}) => (
  <motion.button
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, delay: 0.5 + (index * 0.1) }}
    whileHover={{ scale: 1.02, translateY: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-between p-4 w-full rounded-2xl backdrop-blur-md shadow-lg shadow-black/5 transition-all duration-300 group z-10 text-brand-text ${
      isSpecial 
        ? 'bg-brand-primary/10 border border-brand-primary/30 hover:bg-brand-primary/20 hover:border-brand-primary' 
        : 'bg-white/80 border border-white/60 hover:bg-white hover:border-brand-primary/30'
    }`}
  >
    <div className="flex items-center gap-3.5">
      <div className={`p-2 rounded-xl transition-transform duration-300 group-hover:scale-110 ${isSpecial ? 'bg-brand-primary text-white' : 'bg-brand-primary/10 text-brand-primary'}`}>
        {icon}
      </div>
      <span className="font-medium text-sm sm:text-base text-left">
        {title}
      </span>
    </div>
    <FiExternalLink className="text-brand-text/40 group-hover:text-brand-primary transition-colors shrink-0 ml-2" size={18} />
  </motion.button>
);