import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { FiExternalLink, FiAlertCircle, FiX } from "react-icons/fi";

export const ExternalLinkModal = ({
  isOpen,
  onClose,
  onConfirm,
  linkTitle,
  linkUrl,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-[2.2rem] p-6 shadow-2xl border border-white/90 overflow-hidden flex flex-col text-center"
        >
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-brand-bg text-brand-text hover:bg-brand-accent hover:text-white transition-colors cursor-pointer shadow-sm"
            aria-label="Tutup"
          >
            <FiX size={18} />
          </button>

          {/* Icon Peringatan / Informasi */}
          <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary mb-4">
            <FiAlertCircle size={24} />
          </div>

          <h3 className="text-base font-bold text-brand-primary mb-1">
            Buka Tautan Eksternal?
          </h3>

          <p className="text-xs text-brand-text/70 mb-4 px-2">
            Anda akan diarahkan keluar dari halaman utama menuju{" "}
            <span className="font-semibold text-brand-text">{linkTitle}</span>:
          </p>

          <div className="p-3 bg-brand-bg/60 rounded-xl text-[11px] text-brand-primary font-mono break-all mb-6 border border-brand-primary/10">
            {linkUrl}
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-brand-bg text-brand-text font-semibold rounded-xl hover:bg-brand-bg/80 transition-all cursor-pointer text-xs sm:text-sm"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="flex-1 py-3 bg-brand-primary text-white font-semibold rounded-xl shadow-md hover:bg-brand-primary/90 transition-all cursor-pointer text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <span>Lanjutkan</span>
              <FiExternalLink size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body,
  );
};
