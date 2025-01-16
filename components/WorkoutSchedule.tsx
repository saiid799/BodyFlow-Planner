import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WorkoutPlan } from "@/types/workout";
import {
  Calendar,
  Trophy,
  Dumbbell,
  Flame,
  Heart,
  ChevronRight,
  Target,
  Zap,
  Timer,
} from "lucide-react";

interface WorkoutScheduleProps {
  plan: WorkoutPlan;
}

export default function WorkoutSchedule({ plan }: WorkoutScheduleProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-custom-red/5 to-transparent -z-10 rounded-3xl" />
        <div className="text-center space-y-6 py-16 px-4">
          <div className="inline-flex items-center gap-2 bg-custom-red/10 text-custom-red px-4 py-2 rounded-full font-blogger">
            <Target className="w-4 h-4" />
            <span>Your Personalized Plan</span>
          </div>
          <h2 className="font-motter text-4xl md:text-6xl text-custom-dark">
            {plan.name}
          </h2>
          <p className="font-blogger text-xl text-custom-dark/70 max-w-2xl mx-auto leading-relaxed">
            Transform your body and mind over the next {plan.duration} days with
            our expertly crafted program
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card className="bg-white p-6 transform hover:scale-102 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-custom-red/10 rounded-xl">
              <Flame className="w-8 h-8 text-custom-red" />
            </div>
            <div>
              <p className="text-sm text-custom-dark/70 uppercase tracking-wider">
                Total Days
              </p>
              <p className="font-blogger text-3xl text-custom-dark">
                {plan.duration} Days
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-white p-6 transform hover:scale-102 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-custom-red/10 rounded-xl">
              <Dumbbell className="w-8 h-8 text-custom-red" />
            </div>
            <div>
              <p className="text-sm text-custom-dark/70 uppercase tracking-wider">
                Workouts
              </p>
              <p className="font-blogger text-3xl text-custom-dark">
                {plan.workouts.length} Sessions
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-white p-6 transform hover:scale-102 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-custom-red/10 rounded-xl">
              <Heart className="w-8 h-8 text-custom-red" />
            </div>
            <div>
              <p className="text-sm text-custom-dark/70 uppercase tracking-wider">
                Intensity
              </p>
              <p className="font-blogger text-3xl text-custom-dark">Adaptive</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Timeline View */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plan.workouts.map((workout, index) => (
            <Card
              key={index}
              className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-500 border-none"
            >
              {/* Workout Header */}
              <div className="relative h-48 bg-gradient-to-br from-custom-dark to-custom-dark/90 p-6">
                <div className="absolute top-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                    <Trophy className="w-5 h-5 text-custom-red" />
                  </div>
                </div>

                <div className="h-full flex flex-col justify-between text-white">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-blogger">Day {workout.day}</span>
                  </div>
                  <div>
                    <h3 className="font-motter text-2xl mb-2">
                      {workout.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70">
                      <Timer className="w-4 h-4" />
                      <span className="text-sm">
                        {workout.exercises.length} exercises
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercise List */}
              <div className="divide-y divide-gray-100">
                {workout.exercises.map((exercise, idx) => (
                  <div
                    key={idx}
                    className="p-6 space-y-3 hover:bg-custom-red/5 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-blogger font-semibold text-lg text-custom-dark group-hover:text-custom-red transition-colors">
                          {exercise.name}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-custom-dark/70">
                          <Zap className="w-4 h-4 text-custom-red" />
                          <span>
                            {exercise.sets} sets × {exercise.reps}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-custom-dark/70 leading-relaxed">
                      {exercise.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-gray-50">
                <Button
                  variant="ghost"
                  className="w-full text-custom-red hover:text-custom-red/90 hover:bg-custom-red/5"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Detailed Instructions
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-custom-red/5 via-custom-red/10 to-custom-red/5 rounded-3xl -z-10" />
        <blockquote className="text-center p-12 space-y-4">
          <p className="font-motter text-3xl text-custom-dark">
            &ldquo;Transform yourself, not your workouts.&rdquo;
          </p>
          <footer className="text-custom-dark/70 font-blogger">
            Stay consistent, trust the process
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
