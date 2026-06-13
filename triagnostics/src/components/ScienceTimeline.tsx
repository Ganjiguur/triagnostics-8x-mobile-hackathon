import { scienceSteps } from "../data/index";
import {
  Search,
  BarChart3,
  Zap,
  Target,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Search,
  BarChart3,
  Zap,
  Target,
};

export function ScienceTimeline() {
  return (
    <div className="space-y-6">
      {scienceSteps.map((step, index) => {
        const Icon = iconMap[step.icon];

        return (
          <div key={index} className="flex gap-4 md:gap-6">
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-pink-600 flex items-center justify-center text-white mb-2">
                {Icon && <Icon size={24} />}
              </div>
              {index < scienceSteps.length - 1 && (
                <div className="w-1 h-16 md:h-24 bg-gradient-to-b from-teal-200 to-pink-200"></div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1 pb-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
