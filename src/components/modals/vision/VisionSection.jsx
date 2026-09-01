import { visionMissionConfig } from "../../../config/visionMission";

export const VisionSection = () => {
  return (
    <section aria-labelledby="vision-heading">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-brand-primary
          "
        />

        <h3
          id="vision-heading"
          className="
            text-sm
            font-semibold
            text-brand-primary
          "
        >
          Visi
        </h3>
      </div>

      <div
        className="
          mt-3
          rounded-2xl
          border
          border-brand-primary/10
          bg-brand-primary/5
          p-4

          sm:p-5
        "
      >
        <p
          className="
            text-[13px]
            font-normal
            leading-6
            text-brand-text/80

            sm:text-sm
          "
        >
          {visionMissionConfig.vision}
        </p>
      </div>
    </section>
  );
};
