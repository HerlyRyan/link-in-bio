import { motion } from "framer-motion";

import { ProfileHeader } from "../profile/ProfileHeader";
import { LinkList } from "../links/LinkList";
import { SocialLinks } from "../links/SocialLinks";
import { FooterComponent } from "./Footer";

import {
  containerVariants,
  footerVariants,
} from "../../animations/variants";

export const LinkBioContent = ({
  links,
  socialLinks,
  onVisionClick,
  onExternalClick,
}) => {
  return (
    <main
      className="
        flex
        min-h-[70vh]
        w-full
        flex-col
      "
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-1 flex-col items-center"
      >
        <ProfileHeader />

        <LinkList
          links={links}
          onVisionClick={onVisionClick}
          onExternalClick={onExternalClick}
        />

        <SocialLinks
          links={socialLinks}
          onExternalClick={onExternalClick}
        />
      </motion.section>

      <motion.div
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <FooterComponent />
      </motion.div>
    </main>
  );
};