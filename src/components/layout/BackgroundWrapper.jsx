export const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-brand-bg px-4 py-8 sm:py-12">
      {/* Background Layer & Dekorasi Abstrak */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient Dasar */}
        <div className="absolute inset-0 bg-linear-to-br from-brand-bg via-[#F9D6E5] to-brand-secondary/30" />

        {/* Pola Titik-titik Halus (Dot Pattern Overlay) */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            color: "var(--brand-primary, #4A5568)"
          }} 
        />

        {/* Elemen Bentuk Organik / Blob 1 (Kiri Atas) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-linear-to-br from-brand-primary/20 to-brand-secondary/30 rounded-full blur-[100px] animate-pulse" />

        {/* Elemen Bentuk Organik / Blob 2 (Kanan Bawah) */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-linear-to-br from-brand-accent/25 to-brand-primary/15 rounded-full blur-[100px]" />

        {/* Garis Aksen Geometris Melengkung Abstrak (SVG Dekoratif) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 200 C 400 400, 600 0, 1000 300 C 1300 500, 1500 100, 1600 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-primary/20"
          />
          <path
            d="M 0 700 C 500 500, 900 900, 1500 600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand-accent/30"
          />
        </svg>
      </div>

      {/* Floating Glass Card Utama */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-2xl bg-white/80 border border-white/90 rounded-[2.2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-5 sm:p-7 flex flex-col justify-between my-auto">
        {children}
      </div>
    </div>
  );
};