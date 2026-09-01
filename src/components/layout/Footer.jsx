export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        z-10
        mt-12
        w-full
        border-t
        border-brand-primary/15
        px-4
        py-5
        text-center
      "
    >
      <p className="text-[11px] leading-5 text-brand-text/60">
        &copy; {currentYear}{" "}
        <span className="font-semibold text-brand-text/75">DPM FK UNTAR</span>.
        All rights reserved.
      </p>

      <p className="mt-0.5 text-[10px] font-medium tracking-wide text-brand-text/50">
        Universitas Tarumanagara
      </p>
    </footer>
  );
};
