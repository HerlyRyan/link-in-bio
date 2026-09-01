import { visionMissionConfig } from "../../../config/visionMission";

export const VisionSection = () => {
  return (
    <section aria-labelledby="vision-heading">
      <h3
        id="vision-heading"
        className="text-sm font-semibold text-brand-primary"
      >
        Visi
      </h3>

      <div
        className="
          mt-3
          rounded-xl
          border
          border-brand-primary/10
          bg-brand-bg/50
          p-4
        "
      >
        <p className="text-sm leading-6 text-brand-text/80">
          {visionMissionConfig.vision}
        </p>
      </div>
    </section>
  );
};