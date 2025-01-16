import { Button } from "@/components/ui/button";
import { FitnessLevel } from "@/types/preferences";
import { cn } from "@/lib/utils";
import {
  Zap, // for Beginner
  TrendingUp, // for Intermediate
  Target, // for Advanced
} from "lucide-react";

const fitnessLevels: {
  value: FitnessLevel;
  label: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}[] = [
  {
    value: "beginner",
    label: "Beginner",
    description: "New to fitness",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    value: "intermediate",
    label: "Intermediate",
    description: "Regular exerciser",
    icon: TrendingUp,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    value: "advanced",
    label: "Advanced",
    description: "Experienced athlete",
    icon: Target,
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

interface FitnessLevelSelectionProps {
  selectedLevel: FitnessLevel;
  onSelect: (level: FitnessLevel) => void;
}

export function FitnessLevelSelection({
  selectedLevel,
  onSelect,
}: FitnessLevelSelectionProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-motter text-custom-dark">
          Your Experience Level
        </h3>
        <p className="text-custom-dark/70">Select your current fitness level</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {fitnessLevels.map((level) => {
          const isSelected = selectedLevel === level.value;
          const Icon = level.icon;

          return (
            <div key={level.value} className="group relative">
              <Button
                type="button"
                variant="outline"
                onClick={() => onSelect(level.value)}
                className={cn(
                  "h-auto p-6 w-full flex flex-col items-center justify-center",
                  "transition-all duration-300 ease-in-out",
                  "border-2 border-transparent",
                  "hover:border-custom-red/20",
                  "group/button",
                  isSelected
                    ? "bg-gradient-to-br " + level.gradient
                    : "bg-white hover:bg-custom-red/5"
                )}
              >
                <div
                  className={cn(
                    "mb-4 p-4 rounded-full transition-all duration-300",
                    isSelected
                      ? "bg-white/20"
                      : "bg-custom-red/5 group-hover/button:bg-custom-red/10"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-8 h-8 transition-colors duration-300",
                      isSelected
                        ? "text-white"
                        : "text-custom-red group-hover/button:text-custom-red/80"
                    )}
                  />
                </div>
                <div className="text-center">
                  <div
                    className={cn(
                      "font-blogger text-xl mb-2 transition-colors duration-300",
                      isSelected
                        ? "text-white"
                        : "text-custom-dark group-hover/button:text-custom-red"
                    )}
                  >
                    {level.label}
                  </div>
                  <p
                    className={cn(
                      "text-sm transition-colors duration-300",
                      isSelected
                        ? "text-white/70"
                        : "text-custom-dark/70 group-hover/button:text-custom-dark/90"
                    )}
                  >
                    {level.description}
                  </p>
                </div>
              </Button>

              {/* Subtle hover effect */}
              <div
                className={cn(
                  "absolute inset-0 border-2 rounded-lg pointer-events-none opacity-0",
                  "transition-all duration-300 ease-in-out",
                  "group-hover:opacity-100 group-hover:border-custom-red/30",
                  isSelected ? "border-custom-red" : ""
                )}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
