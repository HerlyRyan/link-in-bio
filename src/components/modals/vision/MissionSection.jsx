import { FiCheckCircle } from "react-icons/fi";

import { visionMissionConfig } from "../../../config/visionMission";

export const MissionSection = () => {
  return (
    <section aria-labelledby="mission-heading">
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
          id="mission-heading"
          className="
            text-sm
            font-semibold
            text-brand-primary
          "
        >
          Misi
        </h3>
      </div>

      <ul className="mt-3 space-y-2.5">
        {visionMissionConfig.missions.map((mission, index) => (
          <li
            key={mission}
            className="
              flex
              items-start
              gap-3

              rounded-xl
              border
              border-brand-primary/10

              bg-white
              p-3.5
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center

                rounded-lg
                bg-brand-primary/10

                text-brand-primary
              "
            >
              <FiCheckCircle aria-hidden="true" size={15} />
            </span>

            <div className="min-w-0">
              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-brand-primary
                "
              >
                Misi {index + 1}
              </span>

              <p
                className="
                  mt-1
                  text-[13px]
                  leading-5
                  text-brand-text/80

                  sm:text-sm
                "
              >
                {mission}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
