import { motion, useReducedMotion } from "framer-motion";

export const ProfileLogo = ({ src, alt }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 0.92,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.45,
            ease: "easeOut",
          },
        },
      }}
      className="relative mb-4"
    >
      <div
        aria-hidden="true"
        className="
          absolute
          -inset-2

          rounded-full

          bg-brand-primary/10

          blur-xl
        "
      />

      <div
        className="
          relative
          h-24
          w-24
          overflow-hidden
          rounded-full
          border-4
          border-white
          bg-white
          shadow-md

          sm:h-28
          sm:w-28
        "
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          decoding="async"
        />
      </div>
    </motion.div>
  );
};
