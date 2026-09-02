import { motion, useReducedMotion } from "framer-motion";

export const IntroScreen = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="intro-screen"
      initial={{ opacity: 1 }}
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              scale: 1.01,
            }
      }
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.3,
        ease: "easeOut",
      }}
      className="
        fixed
        inset-0
        z-99999

        flex
        min-h-dvh
        w-full
        items-center
        justify-center

        overflow-hidden

        bg-brand-bg

        px-6
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0

            bg-linear-to-br
            from-brand-bg
            via-[#F9D6E5]
            to-brand-secondary/20
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
          "
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            color: "var(--color-brand-text)",
          }}
        />
      </div>

      <motion.div
        initial={
          shouldReduceMotion
            ? { opacity: 0 }
            : {
                opacity: 0,
                y: 12,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          relative
          z-10

          flex
          flex-col
          items-center
          text-center
        "
      >
        {/* Logo Card */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  rotate: -2,
                  scale: 0.94,
                }
          }
          animate={{
            rotate: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            flex
            h-28
            w-28
            items-center
            justify-center

            rounded-2xl

            border-2
            border-brand-text/85

            bg-white

            p-3

            shadow-[5px_5px_0_0_var(--color-brand-text)]

            sm:h-32
            sm:w-32
          "
        >
          <div
            className="
              h-full
              w-full
              overflow-hidden

              rounded-full

              border-2
              border-brand-text/80

              bg-white
            "
          >
            <img
              src="/icons/dpm-logo.png"
              alt="Logo DPM FK UNTAR"
              className="
                h-full
                w-full
                object-cover
              "
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Identity */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: shouldReduceMotion ? 0 : 0.12,
          }}
          className="mt-6"
        >
          <span
            className="
              inline-flex
              items-center
              justify-center

              rounded-lg

              border-2
              border-brand-text/80

              bg-brand-primary

              px-3
              py-1.5

              text-[10px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-white

              shadow-[2px_2px_0_0_var(--color-brand-text)]
            "
          >
            Dewan Perwakilan Mahasiswa
          </span>

          <h1
            className="
              mt-4

              text-xl
              font-bold
              tracking-tight
              text-brand-text

              sm:text-2xl
            "
          >
            DPM FK UNTAR
          </h1>

          <p
            className="
              mt-1

              text-xs
              font-medium
              text-brand-text/65

              sm:text-sm
            "
          >
            Universitas Tarumanagara
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 0.25,
            duration: 0.25,
          }}
          className="
            mt-7
            flex
            items-center
            gap-1.5
          "
          aria-hidden="true"
        >
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -3, 0],
                    }
              }
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: item * 0.12,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2

                rounded-sm

                border
                border-brand-text/70

                bg-brand-primary
              "
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
