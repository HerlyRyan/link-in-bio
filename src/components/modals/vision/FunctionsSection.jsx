import { FunctionItem } from "./FunctionItem";
import { visionMissionConfig } from "../../../config/visionMission";

export const FunctionsSection = () => {
  return (
    <section aria-labelledby="functions-heading">
      <h3
        id="functions-heading"
        className="text-sm font-semibold text-brand-primary"
      >
        Fungsi DPM
      </h3>

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
