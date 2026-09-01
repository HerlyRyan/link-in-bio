import { useState } from "react";

const initialState = {
  isOpen: false,
  title: "",
  url: "",
};

export const useExternalLink = () => {
  const [externalLink, setExternalLink] = useState(initialState);

  const openExternalLink = (title, url) => {
    setExternalLink({
      isOpen: true,
      title,
      url,
    });
  };

  const closeExternalLink = () => {
    setExternalLink(initialState);
  };

  const confirmExternalLink = () => {
    if (!externalLink.url) return;

    window.open(
      externalLink.url,
      "_blank",
      "noopener,noreferrer",
    );

    closeExternalLink();
  };

  return {
    externalLink,
    openExternalLink,
    closeExternalLink,
    confirmExternalLink,
  };
};