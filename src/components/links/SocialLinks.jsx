import { motion } from "framer-motion";
import { itemVariants } from "../../animations/variants";

export const SocialLinks = ({
  links,
  onExternalClick,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="mt-7 flex items-center justify-center gap-3"
      aria-label="Social media DPM FK UNTAR"
    >
      {links.map((social) => {
        const Icon = social.icon;

        return (
          <motion.button
            key={social.id}
            type="button"
            aria-label={`Buka ${social.label} DPM FK UNTAR`}
            whileHover={{
              y: -2,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() =>
              onExternalClick(
                social.label,
                social.url,
              )
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-brand-primary/10
              bg-white/80
              text-brand-text

              shadow-sm
              backdrop-blur-sm

              transition-colors
              duration-200

              hover:border-brand-primary/30
              hover:bg-brand-primary
              hover:text-white

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-primary
              focus-visible:ring-offset-2
            "
          >
            <Icon
              size={19}
              aria-hidden="true"
            />
          </motion.button>
        );
      })}
    </motion.div>
  );
};