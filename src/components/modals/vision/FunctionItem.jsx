export const FunctionItem = ({
  number,
  title,
  description,
}) => {
  return (
    <article
      className="
        rounded-xl
        border
        border-brand-primary/10
        bg-white
        p-3.5
      "
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center

            rounded-lg
            bg-brand-primary/10

            text-xs
            font-bold
            text-brand-primary
          "
        >
          {number}
        </span>

        <div className="min-w-0">
          <h4
            className="
              text-[13px]
              font-semibold
              text-brand-text

              sm:text-sm
            "
          >
            {title}
          </h4>

          <p
            className="
              mt-1
              text-xs
              leading-5
              text-brand-text/70

              sm:text-[13px]
            "
          >
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};