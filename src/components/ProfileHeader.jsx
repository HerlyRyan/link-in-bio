import { motion } from "framer-motion";

export const ProfileHeader = () => {
  const logoUrl =
    "https://bio.linkcdn.cc/upload/8041104zbsdgf/2026041105/177588424500064516.jpg";

  return (
    <header className="flex flex-col items-center mb-6 z-10 w-full">

      {/* 2. Logo dengan animasi masuk & efek hover interaktif */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative mb-3 group cursor-pointer"
      >
        <div className="absolute -inset-2 rounded-full bg-linear-to-tr from-brand-primary/30 to-brand-accent/30 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70" />
        <img
          src={logoUrl}
          alt="Logo DPM FK UNTAR"
          className="relative h-24 w-24 rounded-full shadow-md border-4 border-white object-cover"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* 3. Wrapper untuk Judul & Underline */}
      <div className="flex flex-col items-center my-3 w-full">
        {/* Badge Kecil Profesional */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-2.5 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 backdrop-blur-sm shadow-xs"
        >
          <span className="text-[11px] font-semibold text-brand-primary uppercase tracking-widest">
            Official Account
          </span>
        </motion.div>

        {/* Judul Organisasi */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl font-extrabold text-brand-text text-center tracking-tight px-2"
        >
          DPM FK UNTAR
        </motion.h1>

        {/* Underline Dinamis */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          className="w-3/4 max-w-[220px] h-1 bg-linear-to-r from-transparent via-brand-primary to-transparent rounded-full mt-3 mb-2"
        />
      </div>

      {/* 4. Deskripsi Singkat */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xs sm:text-sm text-brand-text/75 text-center px-6 max-w-sm leading-relaxed font-medium mt-1"
      >
        Dewan Perwakilan Mahasiswa Fakultas Kedokteran Universitas Tarumanagara
      </motion.p>
    </header>
  );
};