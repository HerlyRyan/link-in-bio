import { motion } from 'framer-motion';

export const LoadingScreen = () => (
  <motion.div 
    key="loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="flex h-screen w-full items-center justify-center bg-brand-bg"
  >
    <motion.svg
      className="h-16 w-16"
      viewBox="0 0 100 100"
      initial={{ rotate: -90 }}
      animate={{ rotate: 270 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="40" className="text-brand-secondary" stroke="currentColor" strokeWidth="8" fill="none" />
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        className="text-brand-primary"
        stroke="currentColor"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 0.75, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  </motion.div>
);