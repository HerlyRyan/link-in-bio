import { FiCheckCircle } from "react-icons/fi";

import { visionMissionConfig } from "../../../config/visionMission";

export const MissionSection = () => {
  return (
    <section aria-labelledby="mission-heading">
      <h3
        id="mission-heading"
        className="text-sm font-semibold text-brand-primary"
      >
        Misi
      </h3>

      <ul
        className="
          mt-3
          space-y-3
          rounded-xl
          border
          border-brand-primary/10
          bg-brand-bg/50
          p-4
        "
      >
        {visionMissionConfig.missions.map((mission) => (
          <li key={mission} className="flex items-start gap-2.5">
            <FiCheckCircle
              aria-hidden="true"
              className="
                mt-0.5
                shrink-0
                text-brand-primary
              "
              size={15}
            />

            <span className="text-sm leading-5 text-brand-text/80">
              {mission}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
