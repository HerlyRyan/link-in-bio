import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiInfo,
} from "react-icons/fi";
import { LoadingScreen } from "./components/LoadingScreen";
import { ProfileHeader } from "./components/ProfileHeader";
import { LinkItem } from "./components/LinkItem";
import { FooterComponent } from "./components/Footer";
import { VisionMissionModal } from "./components/VisionModal";
import { ExternalLinkModal } from "./components/ExternalLinkModal";
import { BackgroundWrapper } from "./components/BackgroundWrapper";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State untuk menangani modal link eksternal
  const [externalModal, setExternalModal] = useState({
    isOpen: false,
    title: "",
    url: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenExternalLink = (title, url) => {
    setExternalModal({
      isOpen: true,
      title,
      url,
    });
  };

  const handleConfirmExternalLink = () => {
    if (externalModal.url) {
      window.open(externalModal.url, "_blank", "noopener,noreferrer");
    }
    setExternalModal({ isOpen: false, title: "", url: "" });
  };

  const links = [
    {
      id: 1,
      title: "Visi, Misi, & Fungsi DPM",
      icon: <FiInfo size={20} />,
      isSpecial: true,
      action: () => setIsModalOpen(true),
    },
    {
      id: 2,
      title: "Official Website DPM FK UNTAR",
      url: "https://google.com",
      icon: <FiGlobe size={20} />,
    },
    {
      id: 3,
      title: "Pendaftaran Anggota Baru",
      url: "https://forms.gle/contoh",
      icon: <FiMail size={20} />,
    },
    {
      id: 4,
      title: "Lokasi Sekretariat",
      url: "https://maps.google.com",
      icon: <FiMapPin size={20} />,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FiInstagram size={22} />,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      id: 2,
      icon: <FiTwitter size={22} />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      id: 3,
      icon: <FiYoutube size={22} />,
      url: "https://youtube.com",
      label: "YouTube",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <BackgroundWrapper key="content">
          <div className="w-full flex flex-col items-center justify-between min-h-[70vh]">
            {/* Wrapper utama dengan efek stagger */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full flex flex-col items-center"
            >
              <ProfileHeader />

              <nav className="w-full space-y-3.5 mb-8 mt-4">
                {links.map((link, index) => (
                  <motion.div key={link.id} variants={itemVariants}>
                    <LinkItem
                      title={link.title}
                      icon={link.icon}
                      index={index}
                      isSpecial={link.isSpecial}
                      onClick={
                        link.action
                          ? link.action
                          : () => handleOpenExternalLink(link.title, link.url)
                      }
                    />
                  </motion.div>
                ))}
              </nav>

              {/* Social Buttons dengan hover yang lebih halus */}
              <motion.div variants={itemVariants} className="flex gap-4 mb-2">
                {socialLinks.map((social) => (
                  <motion.button
                    key={social.id}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      handleOpenExternalLink(social.label, social.url)
                    }
                    className="p-3.5 bg-white/70 backdrop-blur-lg border border-white/50 rounded-2xl text-brand-text hover:text-white hover:bg-brand-primary transition-colors shadow-sm"
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Footer dengan sedikit delay animasi agar muncul terakhir */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-8"
            >
              <FooterComponent />
            </motion.div>
          </div>

          {/* Modal Components tetap sama */}
          <VisionMissionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <ExternalLinkModal
            isOpen={externalModal.isOpen}
            onClose={() =>
              setExternalModal({ isOpen: false, title: "", url: "" })
            }
            onConfirm={handleConfirmExternalLink}
            linkTitle={externalModal.title}
            linkUrl={externalModal.url}
          />
        </BackgroundWrapper>
      )}
    </AnimatePresence>
  );
}
