/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { createPortal } from "react-dom";

import { FiChevronLeft, FiChevronRight, FiInfo, FiX } from "react-icons/fi";

import { VisionSection } from "./vision/VisionSection";
import { MissionSection } from "./vision/MissionSection";
import { FunctionsSection } from "./vision/FunctionsSection";

import { visionMissionConfig } from "../../config/visionMission";
import { useModalAccessibility } from "../../hooks/useModalAccessibility";

const sections = [
  {
    id: "vision",
    label: "Visi",
    component: VisionSection,
  },
  {
    id: "mission",
    label: "Misi",
    component: MissionSection,
  },
  {
    id: "functions",
    label: "Fungsi",
    component: FunctionsSection,
  },
];

export const VisionMissionModal = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useModalAccessibility({
    isOpen,
    onClose,
  });

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const isFirstSection = currentIndex === 0;
  const isLastSection = currentIndex === sections.length - 1;

  const CurrentSection = sections[currentIndex].component;

  const handleNext = () => {
    if (isLastSection) return;

    setCurrentIndex((previous) => previous + 1);
  };

  const handlePrevious = () => {
    if (isFirstSection) return;

    setCurrentIndex((previous) => previous - 1);
  };

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="vision-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          className="
            fixed
            inset-0
            z-9999
            flex
            items-center
            justify-center
            bg-black/45
            p-4
            backdrop-blur-sm
          "
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="vision-modal-title"
            aria-describedby="vision-modal-section"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    scale: 0.97,
                    y: 12,
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    scale: 0.98,
                    y: 8,
                  }
            }
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              relative

              flex
              h-135
              sm:h-145

              max-h-[85dvh]
              w-full
              max-w-md

              flex-col
              overflow-hidden

              rounded-3xl
              border
              border-white/80

              bg-white/95
              shadow-2xl
              backdrop-blur-xl
            "
          >
            <header
              className="
                flex
                items-center
                justify-between
                gap-4
                border-b
                border-brand-primary/10
                px-5
                py-4

                sm:px-6
              "
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand-primary/10
                    text-brand-primary
                  "
                >
                  <FiInfo size={18} />
                </span>

                <div className="min-w-0">
                  <h2
                    id="vision-modal-title"
                    className="
                      truncate
                      text-base
                      font-bold
                      text-brand-text

                      sm:text-lg
                    "
                  >
                    {visionMissionConfig.title}
                  </h2>

                  <p
                    id="vision-modal-section"
                    className="
                      mt-0.5
                      text-xs
                      text-brand-text/60
                    "
                  >
                    {sections[currentIndex].label} · {currentIndex + 1} dari{" "}
                    {sections.length}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup modal visi, misi, dan fungsi DPM"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  text-brand-text/70

                  transition-colors

                  hover:bg-brand-primary/10
                  hover:text-brand-primary

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand-primary
                  focus-visible:ring-offset-2
                "
              >
                <FiX aria-hidden="true" size={19} />
              </button>
            </header>

            <div
              className="
                custom-scrollbar
                min-h-0
                flex-1
                overflow-y-auto
                px-5
                py-5

                sm:px-6
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={sections[currentIndex].id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: 8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: -8,
                        }
                  }
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                >
                  <CurrentSection />
                </motion.div>
              </AnimatePresence>
            </div>

            <footer
              className="
                border-t
                border-brand-primary/10
                bg-brand-bg/30
                px-5
                py-4

                sm:px-6
              "
            >
              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-center
                  gap-2
                "
                aria-label={`Bagian ${currentIndex + 1} dari ${sections.length}`}
              >
                {sections.map((section, index) => {
                  const isActive = currentIndex === index;

                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Buka bagian ${section.label}`}
                      aria-current={isActive ? "step" : undefined}
                      className="
                        flex
                        h-6
                        items-center
                        justify-center
                        px-1

                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-brand-primary
                        focus-visible:ring-offset-2
                      "
                    >
                      <span
                        aria-hidden="true"
                        className={`
                          h-1.5
                          rounded-full
                          transition-all
                          duration-200

                          ${
                            isActive
                              ? "w-6 bg-brand-primary"
                              : "w-1.5 bg-brand-primary/25"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={isFirstSection}
                  className="
                    inline-flex
                    min-h-10
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    border
                    border-brand-primary/10
                    bg-white
                    px-3.5
                    text-xs
                    font-semibold
                    text-brand-primary
                    shadow-sm

                    transition-colors

                    hover:bg-brand-primary/5

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-primary
                    focus-visible:ring-offset-2

                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  <FiChevronLeft aria-hidden="true" size={16} />

                  <span className="hidden sm:inline">Sebelumnya</span>
                </button>

                <span className="text-xs font-medium text-brand-text/60">
                  {sections[currentIndex].label}
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isLastSection}
                  className="
                    inline-flex
                    min-h-10
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    bg-brand-primary
                    px-3.5
                    text-xs
                    font-semibold
                    text-white
                    shadow-sm

                    transition-colors

                    hover:bg-brand-primary/90

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-primary
                    focus-visible:ring-offset-2

                    disabled:cursor-not-allowed
                    disabled:bg-brand-primary/20
                    disabled:text-brand-text/40
                    disabled:shadow-none
                  "
                >
                  <span className="hidden sm:inline">Selanjutnya</span>

                  <FiChevronRight aria-hidden="true" size={16} />
                </button>
              </div>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
