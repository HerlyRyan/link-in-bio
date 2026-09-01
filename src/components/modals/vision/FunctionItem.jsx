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
        bg-brand-bg/50
        p-3.5
      "
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-brand-primary/10
            text-xs
            font-bold
            text-brand-primary
          "
        >
          {number}
        </span>

        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-brand-text">
            {title}
          </h4>

          <p className="mt-1 text-xs leading-5 text-brand-text/70">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};