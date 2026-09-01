/* eslint-disable react-hooks/immutability */
import { motion } from "framer-motion";
import { LinkItem } from "./LinkItem";
import { itemVariants } from "../../animations/variants";

export const LinkList = ({ links, onVisionClick, onExternalClick }) => {
  const handleLinkClick = (link) => {
    if (link.type === "internal") {
      if (link.action === "vision") {
        onVisionClick();
      }

      return;
    }

    if (link.type === "email") {
      window.location.href = link.url;
      return;
    }

    if (link.type === "external") {
      onExternalClick(link.title, link.url);
    }
  };

  return (
    <nav aria-label="DPM FK UNTAR links" className="mt-6 w-full space-y-3">
      {links.map((link, index) => {
        const Icon = link.icon;

        return (
          <motion.div key={link.id} variants={itemVariants}>
            <LinkItem
              title={link.title}
              icon={<Icon size={20} aria-hidden="true" />}
              index={index}
              isSpecial={link.featured}
              onClick={() => handleLinkClick(link)}
            />
          </motion.div>
        );
      })}
    </nav>
  );
};
