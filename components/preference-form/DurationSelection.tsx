import { Button } from "@/components/ui/button";
import { Duration } from "@/types/preferences";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

const durations: {
  value: Duration;
  label: string;
  description: string;
  gradient: string;
}[] = [
  {
    value: "1",
    label: "1 Day",
    description: "Quick start program",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    value: "2",
    label: "2 Days",
    description: "Weekend program",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    value: "3",
    label: "3 Days",
    description: "Extended program",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    value: "5",
    label: "5 Days",
    description: "Intensive focus",
    gradient: "from-red-500/20 to-rose-500/20",
  },
  {
    value: "7",
    label: "7 Days",
    description: "Full week program",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
];

interface DurationSelectionProps {
  selectedDuration: Duration;
  onSelect: (duration: Duration) => void;
}

export function DurationSelection({
  selectedDuration,
  onSelect,
}: DurationSelectionProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-motter text-custom-dark">
          Choose Your Program Duration
        </h3>
        <p className="text-custom-dark/70">
          How many days would you like to train?
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
        {durations.map((duration) => {
          const isSelected = selectedDuration === duration.value;

          return (
            <div key={duration.value} className="group relative">
              <Button
                type="button"
                variant="outline"
                onClick={() => onSelect(duration.value)}
                className={cn(
                  "h-auto p-4 w-full flex flex-col items-center justify-center",
                  "transition-all duration-300 ease-in-out",
                  "border-2 border-transparent",
                  "hover:border-custom-red/20",
                  "group/button",
                  isSelected
                    ? "bg-gradient-to-br " + duration.gradient
                    : "bg-white hover:bg-custom-red/5"
                )}
              >
                <div
                  className={cn(
                    "mb-3 p-3 rounded-full transition-all duration-300",
                    isSelected
                      ? "bg-white/20"
                      : "bg-custom-red/5 group-hover/button:bg-custom-red/10"
                  )}
                >
                  <Clock
                    className={cn(
                      "w-6 h-6 transition-colors duration-300",
                      isSelected
                        ? "text-white"
                        : "text-custom-red group-hover/button:text-custom-red/80"
                    )}
                  />
                </div>
                <div className="text-center">
                  <div
                    className={cn(
                      "font-blogger text-xl mb-1 transition-colors duration-300",
                      isSelected
                        ? "text-white"
                        : "text-custom-dark group-hover/button:text-custom-red"
                    )}
                  >
                    {duration.label}
                  </div>
                  <p
                    className={cn(
                      "text-xs transition-colors duration-300",
                      isSelected
                        ? "text-white/70"
                        : "text-custom-dark/70 group-hover/button:text-custom-dark/90"
                    )}
                  >
                    {duration.description}
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
