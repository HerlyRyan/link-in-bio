import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import {
  FiCheckCircle,
  FiInfo,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const FunctionItem = ({ number, title, description }) => (
  <div className="p-3 bg-brand-bg/60 rounded-2xl border border-brand-primary/5">
    <div className="flex items-center gap-2 mb-1">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold">
        {number}
      </span>
      <span className="font-semibold text-brand-primary text-xs sm:text-sm">
        {title}
      </span>
    </div>
    <p className="text-[11px] sm:text-xs text-brand-text/70 pl-7 leading-relaxed">
      {description}
    </p>
  </div>
);

const VisionSection = () => (
  <div className="space-y-2">
    <h3 className="font-bold text-brand-primary text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
      Visi
    </h3>
    <p className="p-4 bg-brand-bg/50 rounded-xl text-xs sm:text-sm leading-relaxed border border-brand-primary/5">
      Menjadikan DPM FK UNTAR sebagai lembaga legislatif yang aspiratif,
      transparan, progresif, dan berlandaskan kekeluargaan.
    </p>
  </div>
);

const MissionSection = () => (
  <div className="space-y-2">
    <h3 className="font-bold text-brand-primary text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
      Misi
    </h3>
    <ul className="space-y-2.5 p-4 bg-brand-bg/50 rounded-xl text-xs sm:text-sm border border-brand-primary/5">
      <li className="flex items-start gap-2.5">
        <FiCheckCircle
          className="text-brand-primary shrink-0 mt-0.5"
          size={14}
        />
        <span>
          Menampung dan menyalurkan aspirasi mahasiswa FK UNTAR secara aktif dan
          solutif.
        </span>
      </li>
      <li className="flex items-start gap-2.5">
        <FiCheckCircle
          className="text-brand-primary shrink-0 mt-0.5"
          size={14}
        />
        <span>
          Melakukan fungsi pengawasan terhadap kinerja lembaga kemahasiswaan
          secara objektif.
        </span>
      </li>
      <li className="flex items-start gap-2.5">
        <FiCheckCircle
          className="text-brand-primary shrink-0 mt-0.5"
          size={14}
        />
        <span>
          Mempererat sinergi dan keharmonisan antar seluruh civitas akademika FK
          UNTAR.
        </span>
      </li>
    </ul>
  </div>
);

const FunctionsSection = () => {
  const functionsData = [
    {
      title: "Aspirasi",
      desc: "Mencari, mengumpulkan, dan menjaring aspirasi mahasiswa.",
    },
    {
      title: "Advokasi",
      desc: "Menindaklanjuti aspirasi atau masalah yang telah terkumpul.",
    },
    {
      title: "Legislasi",
      desc: "Berwenang mengeluarkan atau mengamandemen produk hukum.",
    },
    {
      title: "Budgeting",
      desc: "Memeriksa proposal dan LPJ Program Kerja BEM/DPM.",
    },
    {
      title: "Controlling",
      desc: "Mengawasi pelaksanaan program kerja melalui proposal dan LPJ.",
    },
  ];

  return (
    <div className="space-y-2">
      <h3 className="font-bold text-brand-primary text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
        Fungsi DPM
      </h3>
      <div className="grid grid-cols-1 gap-2">
        {functionsData.map((item, index) => (
          <FunctionItem
            key={index}
            number={index + 1}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export const VisionMissionModal = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const sections = [
    { title: "Visi", component: <VisionSection /> },
    { title: "Misi", component: <MissionSection /> },
    { title: "Fungsi", component: <FunctionsSection /> },
  ];

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[2.2rem] shadow-2xl border border-white/90 overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-bg text-brand-text hover:bg-brand-accent hover:text-white transition-colors cursor-pointer shadow-sm"
            aria-label="Tutup Modal"
          >
            <FiX size={18} />
          </button>

          {/* Header Modal */}
          <div className="px-5 sm:px-7 pt-5 sm:pt-7 pb-3 flex items-center justify-between border-b border-brand-primary/5">
            <h2 className="text-base sm:text-lg font-bold text-brand-primary flex items-center gap-2 pr-8">
              <div className="p-1.5 rounded-xl bg-brand-primary/10 text-brand-primary">
                <FiInfo size={18} />
              </div>
              Visi, Misi, & Fungsi DPM
            </h2>
          </div>

          {/* Konten Scrollable dengan Transisi Antar Section */}
          <div className="p-5 sm:p-7 overflow-y-auto custom-scrollbar flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {sections[currentIndex].component}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Navigasi (Previous & Next) */}
          <div className="px-5 sm:px-7 py-4 bg-brand-bg/40 border-t border-brand-primary/5 flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed bg-brand-bg text-brand-text/40"
                  : "bg-white text-brand-primary hover:bg-brand-primary hover:text-white shadow-sm cursor-pointer"
              }`}
            >
              <FiChevronLeft size={16} />
              Sebelumnya
            </button>

            {/* Indikator halaman */}
            <div className="flex gap-1.5">
              {sections.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-6 bg-brand-primary"
                      : "w-1.5 bg-brand-primary/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === sections.length - 1}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                currentIndex === sections.length - 1
                  ? "opacity-40 cursor-not-allowed bg-brand-bg text-brand-text/40"
                  : "bg-white text-brand-primary hover:bg-brand-primary hover:text-white shadow-sm cursor-pointer"
              }`}
            >
              Selanjutnya
              <FiChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body,
  );
};
