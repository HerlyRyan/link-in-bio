// src/components/carousel/ImageCarouselCard.jsx

import { useState } from "react";

import { FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";

import { CarouselImage } from "./CarouselImage";

export const ImageCarouselCard = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = items.length > 0;
  const hasMultipleImages = items.length > 1;

  const handlePrevious = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? items.length - 1 : previous - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((previous) =>
      previous === items.length - 1 ? 0 : previous + 1,
    );
  };

  if (!hasImages) {
    return (
      <section
        aria-label="Galeri DPM FK UNTAR"
        className="
          flex
          min-h-52
          w-full
          items-center
          justify-center

          rounded-2xl

          border-2
          border-brand-text/85

          bg-brand-card

          p-6

          shadow-[3px_3px_0_0_var(--color-brand-text)]
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <span
            aria-hidden="true"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              border-2
              border-brand-text/80

              bg-brand-secondary/40

              text-brand-text
            "
          >
            <FiImage size={20} />
          </span>

          <p
            className="
              mt-3

              text-sm
              font-bold
              text-brand-text
            "
          >
            Gambar belum tersedia
          </p>

          <p
            className="
              mt-1
              max-w-xs

              text-xs
              font-medium
              leading-5
              text-brand-muted
            "
          >
            Dokumentasi kegiatan akan ditampilkan di sini.
          </p>
        </div>
      </section>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <section
      aria-label="Galeri DPM FK UNTAR"
      className="
        relative
        w-full
        overflow-hidden

        rounded-2xl

        border-2
        border-brand-text/85

        bg-brand-card

        shadow-[3px_3px_0_0_var(--color-brand-text)]
      "
    >
      <div
        className="
          relative
          aspect-16/7
          w-full

          sm:aspect-16/6
        "
      >
        <CarouselImage
          key={currentItem.id}
          src={currentItem.src}
          alt={currentItem.alt}
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Tampilkan gambar sebelumnya"
              className="
                absolute
                left-3
                top-1/2

                flex
                h-9
                w-9

                -translate-y-1/2
                items-center
                justify-center

                rounded-lg

                border-2
                border-brand-text/80

                bg-brand-card

                text-brand-text

                shadow-[2px_2px_0_0_var(--color-brand-text)]

                transition-transform
                duration-150

                hover:-translate-x-px

                active:translate-x-px
                active:shadow-none

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-primary
                focus-visible:ring-offset-2
              "
            >
              <FiChevronLeft aria-hidden="true" size={18} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Tampilkan gambar berikutnya"
              className="
                absolute
                right-3
                top-1/2

                flex
                h-9
                w-9

                -translate-y-1/2
                items-center
                justify-center

                rounded-lg

                border-2
                border-brand-text/80

                bg-brand-card

                text-brand-text

                shadow-[2px_2px_0_0_var(--color-brand-text)]

                transition-transform
                duration-150

                hover:translate-x-px

                active:translate-x-px
                active:shadow-none

                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-primary
                focus-visible:ring-offset-2
              "
            >
              <FiChevronRight aria-hidden="true" size={18} />
            </button>
          </>
        )}

        {hasMultipleImages && (
          <div
            className="
              absolute
              bottom-3
              left-1/2

              flex
              -translate-x-1/2
              items-center
              gap-1.5

              rounded-lg

              border
              border-brand-text/20

              bg-brand-card/90

              px-2.5
              py-1.5

              backdrop-blur-sm
            "
          >
            {items.map((item, index) => {
              const isActive = currentIndex === index;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Tampilkan gambar ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className="
                    flex
                    h-4
                    items-center
                    justify-center

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-primary
                  "
                >
                  <span
                    aria-hidden="true"
                    className={`
                      h-1.5

                      rounded-sm

                      transition-all
                      duration-200

                      ${
                        isActive
                          ? `
                            w-5
                            bg-brand-primary
                          `
                          : `
                            w-1.5
                            bg-brand-text/30
                          `
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
