import { motion } from "framer-motion";

import { ProfileLogo } from "./ProfileLogo";
import { profileConfig } from "../../config/profile";

import {
  profileHeaderVariants,
  profileItemVariants,
  profileDividerVariants,
} from "../../animations/variants";

export const ProfileHeader = () => {
  const { name, badge, description, logo } = profileConfig;

  return (
    <motion.header
      variants={profileHeaderVariants}
      initial="hidden"
      animate="visible"
      className="
        z-10
        flex
        w-full
        flex-col
        items-center
        text-center
      "
    >
      <ProfileLogo src={logo.src} alt={logo.alt} />

      <motion.div variants={profileItemVariants}>
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-brand-primary/20
            bg-brand-primary/8
            px-3
            py-1

            text-[10px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-brand-primary

            sm:text-[11px]
          "
        >
          {badge}
        </span>
      </motion.div>

      <motion.h1
        variants={profileItemVariants}
        className="
          mt-3
          px-4
          text-2xl
          font-bold
          tracking-tight
          text-brand-text

          sm:text-3xl
        "
      >
        {name}
      </motion.h1>

      <motion.div
        variants={profileDividerVariants}
        aria-hidden="true"
        className="
          mt-3
          h-px
          w-28
          origin-center
          bg-linear-to-r
          from-transparent
          via-brand-primary/50
          to-transparent

          sm:w-36
        "
      />

      <motion.p
        variants={profileItemVariants}
        className="
          mt-4
          max-w-sm
          px-5

          text-sm
          font-normal
          leading-6
          text-brand-text/70

          sm:px-4
          sm:text-[15px]
        "
      >
        {description}
      </motion.p>
    </motion.header>
  );
};
