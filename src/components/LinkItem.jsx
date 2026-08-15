import { motion } from 'framer-motion';

export const LinkItem = ({ title, url, icon, index, FiExternalLink }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 300, delay: 0.5 + (index * 0.1) }}
    whileHover={{ scale: 1.02, translateY: -2 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center justify-between p-4 w-full rounded-2xl backdrop-blur-md bg-white/70 border border-white/50 shadow-lg shadow-black/5 hover:bg-white/90 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 text-brand-text group z-10"
  >
    <div className="flex items-center gap-3.5">
      <div className="p-2 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="font-medium text-sm sm:text-base text-left">
        {title}
      </span>
    </div>
    <FiExternalLink className="text-brand-text/40 group-hover:text-brand-primary transition-colors shrink-0 ml-2" size={18} />
  </motion.a>
);