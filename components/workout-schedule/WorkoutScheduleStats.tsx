import { Card } from "@/components/ui/card";
import { Flame, Dumbbell, Heart } from "lucide-react";
import { WorkoutPlan } from "@/types/workout";

interface WorkoutScheduleStatsProps {
  plan: WorkoutPlan;
}

export function WorkoutScheduleStats({ plan }: WorkoutScheduleStatsProps) {
  const stats = [
    {
      icon: Flame,
      label: "Total Days",
      value: `${plan.duration} Days`,
      bgColor: "bg-custom-red/10",
      textColor: "text-custom-red",
    },
    {
      icon: Dumbbell,
      label: "Workouts",
      value: `${plan.workouts.length} Sessions`,
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      icon: Heart,
      label: "Intensity",
      value: "Adaptive",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {stats.map(({ icon: Icon, label, value, bgColor, textColor }) => (
        <Card
          key={label}
          className="bg-white p-6 transform hover:scale-102 
          transition-all duration-300 group overflow-hidden"
        >
          <div className="flex items-center gap-4 relative">
            <div
              className={`p-4 ${bgColor} rounded-xl 
              transition-transform duration-300 group-hover:rotate-6`}
            >
              <Icon className={`w-8 h-8 ${textColor}`} />
            </div>
            <div>
              <p
                className="text-sm text-custom-dark/70 
                uppercase tracking-wider transition-colors 
                group-hover:text-custom-red/80"
              >
                {label}
              </p>
              <p
                className="font-blogger text-3xl text-custom-dark 
                transition-transform group-hover:translate-x-1"
              >
                {value}
              </p>
            </div>

            {/* Hover Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r 
              from-custom-red/5 to-transparent 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 
              -z-10"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
