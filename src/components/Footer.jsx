export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center mt-12 py-4 border-t border-brand-primary/10 z-10 transition-colors">
      <p className="text-xs text-brand-text/60 hover:text-brand-text/80 transition-colors">
        &copy; {currentYear} DPM FK UNTAR. All rights reserved.
      </p>
      <p className="text-[10px] text-brand-text/40 mt-1 tracking-wider uppercase font-medium">
        Spring Picnic Theme &bull; Crafted with precision
      </p>
    </footer>
  );
};
