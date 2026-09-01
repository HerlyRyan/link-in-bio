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
      {/* Logo */}
      <ProfileLogo src={logo.src} alt={logo.alt} />

      {/* Identity */}
      <div className="flex w-full flex-col items-center">
        <motion.div variants={profileItemVariants}>
          <span
            className="
              inline-flex
              items-center
              justify-center

              rounded-full
              border
              border-brand-primary/25

              bg-brand-primary/8

              px-3
              py-1

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
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
            mt-2.5

            px-4

            text-2xl
            font-bold
            tracking-[-0.025em]
            text-brand-text

            sm:text-[30px]
          "
        >
          {name}
        </motion.h1>

        <motion.div
          variants={profileDividerVariants}
          aria-hidden="true"
          className="
            mt-2.5

            h-px
            w-20

            origin-center

            bg-linear-to-r
            from-transparent
            via-brand-primary/50
            to-transparent

            sm:w-24
          "
        />
      </div>

      {/* Description */}
      <motion.p
        variants={profileItemVariants}
        className="
          mt-3.5

          max-w-[360px]
          px-4

          text-[13px]
          font-normal
          leading-6
          text-brand-text/75

          sm:text-sm
        "
      >
        {description}
      </motion.p>
    </motion.header>
  );
};
