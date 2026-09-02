// src/components/carousel/CarouselImage.jsx

import { useState } from "react";

export const CarouselImage = ({
  src,
  alt,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
      "
    >
      {isLoading && !hasError && (
        <div
          className="
            absolute
            inset-0
            z-10

            flex
            items-center
            justify-center

            bg-brand-card
          "
          role="status"
          aria-label="Memuat gambar"
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-2
                w-2

                animate-pulse
                rounded-sm

                bg-brand-primary
              "
            />

            <span
              className="
                h-2
                w-2

                animate-pulse
                rounded-sm

                bg-brand-primary

                [animation-delay:150ms]
              "
            />

            <span
              className="
                h-2
                w-2

                animate-pulse
                rounded-sm

                bg-brand-primary

                [animation-delay:300ms]
              "
            />
          </div>
        </div>
      )}

      {hasError ? (
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center

            bg-brand-card

            px-6
            text-center
          "
        >
          <p
            className="
              text-xs
              font-semibold
              text-brand-muted

              sm:text-sm
            "
          >
            Gambar gagal dimuat
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`
            h-full
            w-full

            object-cover

            transition-opacity
            duration-300

            ${
              isLoading
                ? "opacity-0"
                : "opacity-100"
            }
          `}
          decoding="async"
        />
      )}
    </div>
  );
};