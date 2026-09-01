import { FunctionItem } from "./FunctionItem";
import { visionMissionConfig } from "../../../config/visionMission";

export const FunctionsSection = () => {
  return (
    <section aria-labelledby="functions-heading">
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
          id="functions-heading"
          className="
            text-sm
            font-semibold
            text-brand-primary
          "
        >
          Fungsi DPM
        </h3>
      </div>

      <div className="mt-3 space-y-2.5">
        {visionMissionConfig.functions.map((item, index) => (
          <FunctionItem
            key={item.id}
            number={index + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
