import { Button } from "@/components/ui/button";
import { Dumbbell, Heart, StretchHorizontal, LucideIcon } from "lucide-react";
import { WorkoutType } from "@/types/preferences";
import { cn } from "@/lib/utils";

const workoutTypes: {
  value: WorkoutType;
  label: string;
  Icon: LucideIcon;
  description: string;
  gradient: string;
}[] = [
  {
    value: "bodyweight",
    label: "Bodyweight",
    Icon: Dumbbell,
    description: "No equipment needed",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    value: "cardio",
    label: "Cardio",
    Icon: Heart,
    description: "Improve endurance",
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    value: "flexibility",
    label: "Flexibility",
    Icon: StretchHorizontal,
    description: "Enhance mobility",
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

interface WorkoutTypeSelectionProps {
  selectedTypes: WorkoutType[];
  onToggle: (type: WorkoutType) => void;
}

export function WorkoutTypeSelection({
  selectedTypes,
  onToggle,
}: WorkoutTypeSelectionProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-motter text-custom-dark">
          Choose Your Training Style
        </h3>
        <p className="text-custom-dark/70">
          Select one or more workout types that interest you
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workoutTypes.map(({ value, label, Icon, description, gradient }) => {
          const isSelected = selectedTypes.includes(value);
          return (
            <div key={value} className="group relative">
              <Button
                type="button"
                variant="outline"
                onClick={() => onToggle(value)}
                className={cn(
                  "h-auto p-8 flex flex-col items-center gap-4 w-full",
                  "transition-all duration-300 ease-in-out",
                  "border-2 border-transparent",
                  "hover:border-custom-red/20",
                  "group/button",
                  isSelected
                    ? "bg-gradient-to-br " + gradient
                    : "bg-white hover:bg-custom-red/5"
                )}
              >
                <div
                  className={cn(
                    "p-4 rounded-full transition-all duration-300",
                    isSelected
                      ? "bg-white/20"
                      : "bg-custom-red/5 group-hover/button:bg-custom-red/10"
                  )}
                >
                  <Icon
                    size={32}
                    className={cn(
                      "transition-colors duration-300",
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
                    {label}
                  </div>
                  <p
                    className={cn(
                      "text-sm transition-colors duration-300",
                      isSelected
                        ? "text-white/70"
                        : "text-custom-dark/70 group-hover/button:text-custom-dark/90"
                    )}
                  >
                    {description}
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
