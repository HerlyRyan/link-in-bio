import { motion } from "framer-motion";

export const LoadingScreen = () => {
  const logoUrl =
    "https://bio.linkcdn.cc/upload/8041104zbsdgf/2026041105/177588424500064516.jpg";

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-brand-bg/95 backdrop-blur-md w-full h-screen"
    >
      <div className="relative flex items-center justify-center">
        {/* Cincin Spinner Luar */}
        <motion.svg
          className="absolute h-28 w-28 sm:h-32 sm:w-32"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            className="text-brand-secondary/30"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            className="text-brand-primary"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="276"
            strokeDashoffset="60"
          />
        </motion.svg>

        {/* Logo di Tengah dengan Efek Berdenyut (Pulse) */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md border-2 border-white/80 bg-white flex items-center justify-center"
        >
          <img
            src={logoUrl}
            alt="Logo DPM FK UNTAR"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Teks Indikator Opsional yang Bersih */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-xs sm:text-sm font-semibold tracking-wider text-brand-primary/80 uppercase"
      >
        DPM FK UNTAR
      </motion.div>
    </motion.div>
  );
};
