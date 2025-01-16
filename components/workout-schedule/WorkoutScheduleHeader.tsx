import { Target } from "lucide-react";
import { WorkoutPlan } from "@/types/workout";

interface WorkoutScheduleHeaderProps {
  plan: WorkoutPlan;
}

export function WorkoutScheduleHeader({ plan }: WorkoutScheduleHeaderProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-custom-red/5 to-transparent -z-10 rounded-3xl" />
      <div className="text-center space-y-6 py-16 px-4">
        <div
          className="inline-flex items-center gap-2 
          bg-custom-red/10 text-custom-red 
          px-4 py-2 rounded-full font-blogger 
          hover:bg-custom-red/20 transition-colors"
        >
          <Target className="w-4 h-4" />
          <span>Your Personalized Plan</span>
        </div>

        <h2
          className="font-motter text-4xl md:text-6xl text-custom-dark 
          transform transition-transform hover:scale-[1.02]"
        >
          {plan.name}
        </h2>

        <p
          className="font-blogger text-xl text-custom-dark/70 
          max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          Transform your body and mind over the next {plan.duration} days with
          our expertly crafted program designed to push your limits and achieve
          remarkable results.
        </p>
      </div>
    </div>
  );
}
