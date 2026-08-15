export const FooterComponent = () => (
  <footer className="w-full text-center mt-12 py-4 border-t border-brand-text/10 z-10">
    <p className="text-xs text-brand-text opacity-60">
      © {new Date().getFullYear()} DPM FK UNTAR. All rights reserved.
    </p>
    <p className="text-[10px] text-brand-text opacity-40 mt-1">
      Crafted with precision by Dev Team
    </p>
  </footer>
);