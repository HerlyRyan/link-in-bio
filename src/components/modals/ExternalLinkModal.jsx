import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { createPortal } from "react-dom";

import { FiAlertCircle, FiExternalLink, FiX } from "react-icons/fi";

import { useModalAccessibility } from "../../hooks/useModalAccessibility";

export const ExternalLinkModal = ({
  isOpen,
  onClose,
  onConfirm,
  linkTitle,
  linkUrl,
}) => {
  const shouldReduceMotion = useReducedMotion();

  useModalAccessibility({
    isOpen,
    onClose,
  });

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="external-link-overlay"
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
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="external-link-title"
            aria-describedby="external-link-description"
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
              w-full
              max-w-sm
              overflow-hidden
              rounded-3xl

              border
              border-white/80

              bg-white/95
              shadow-2xl
              backdrop-blur-xl
            "
          >
            {/* Header */}
            <header
              className="
                flex
                items-center
                justify-between
                border-b
                border-brand-primary/10
                px-5
                py-4
              "
            >
              <div className="flex items-center gap-3">
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
                  <FiExternalLink size={17} />
                </span>

                <h2
                  id="external-link-title"
                  className="
                    text-sm
                    font-bold
                    text-brand-text

                    sm:text-base
                  "
                >
                  Buka Tautan Eksternal?
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup konfirmasi tautan eksternal"
                className="
                  flex
                  h-10
                  w-10
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

            {/* Content */}
            <div className="px-5 py-5 sm:px-6">
              <div
                className="
                  flex
                  items-start
                  gap-3
                  rounded-xl
                  border
                  border-brand-primary/10
                  bg-brand-bg/50
                  p-4
                "
              >
                <FiAlertCircle
                  aria-hidden="true"
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-brand-primary
                  "
                />

                <p
                  id="external-link-description"
                  className="
                    text-xs
                    leading-5
                    text-brand-text/70

                    sm:text-sm
                  "
                >
                  Anda akan meninggalkan halaman DPM FK UNTAR dan membuka{" "}
                  <span className="font-semibold text-brand-text">
                    {linkTitle}
                  </span>{" "}
                  di tab baru.
                </p>
              </div>

              {/* URL */}
              <div className="mt-4">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-brand-text/50
                  "
                >
                  Tujuan
                </span>

                <div
                  className="
                    mt-1.5
                    max-h-20
                    overflow-y-auto
                    break-all
                    rounded-xl
                    border
                    border-brand-primary/10
                    bg-brand-bg/40
                    px-3
                    py-2.5

                    font-mono
                    text-[11px]
                    leading-4
                    text-brand-text/65
                  "
                >
                  {linkUrl}
                </div>
              </div>
            </div>

            {/* Actions */}
            <footer
              className="
                flex
                gap-3
                border-t
                border-brand-primary/10
                bg-brand-bg/30
                px-5
                py-4

                sm:px-6
              "
            >
              <button
                type="button"
                onClick={onClose}
                className="
                  min-h-11
                  flex-1
                  rounded-xl
                  border
                  border-brand-primary/10
                  bg-white

                  text-xs
                  font-semibold
                  text-brand-text/75

                  transition-colors

                  hover:bg-brand-bg

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand-primary
                  focus-visible:ring-offset-2

                  sm:text-sm
                "
              >
                Batal
              </button>

              <button
                type="button"
                onClick={onConfirm}
                className="
                  inline-flex
                  min-h-11
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl

                  bg-brand-primary

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

                  sm:text-sm
                "
              >
                Lanjutkan
                <FiExternalLink aria-hidden="true" size={14} />
              </button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
