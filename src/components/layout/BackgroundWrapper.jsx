export const BackgroundWrapper = ({ children }) => {
  return (
    <div
      className="
        relative
        flex
        min-h-dvh
        w-full
        items-center
        justify-center
        overflow-x-hidden

        bg-brand-bg

        px-4
        py-6

        sm:px-6
        sm:py-8

        lg:px-8
        lg:py-10
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Base gradient */}
        <div
          className="
            absolute
            inset-0

            bg-linear-to-br
            from-brand-bg
            via-[#F9D6E5]
            to-brand-secondary/20
          "
        />

        {/* Dot pattern */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
          "
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            color: "var(--color-brand-text)",
          }}
        />

        {/* Top-left decoration */}
        <div
          className="
            absolute
            -left-32
            -top-32

            h-96
            w-96

            rounded-full
            bg-brand-primary/10

            blur-[100px]
          "
        />

        {/* Bottom-right decoration */}
        <div
          className="
            absolute
            -bottom-32
            -right-32

            h-96
            w-96

            rounded-full
            bg-brand-accent/10

            blur-[100px]
          "
        />
      </div>

      {/* Main Content Container */}
      <div
        className="
          relative
          z-10

          w-full
          max-w-4xl
        "
      >
        {children}
      </div>
    </div>
  );
};
