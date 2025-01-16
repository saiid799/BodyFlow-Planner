// File: components/workout-schedule/WorkoutScheduleCard.tsx
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Trophy,
  Timer,
  Zap,
  ChevronRight,
  Target,
} from "lucide-react";
import { Workout } from "@/types/workout";
import { cn } from "@/lib/utils";

interface WorkoutScheduleCardProps {
  workout: Workout;
  index: number;
}

export function WorkoutScheduleCard({
  workout,
  index,
}: WorkoutScheduleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate a gradient based on the index
  const gradients = [
    "from-blue-500/20 to-cyan-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-amber-500/20 to-orange-500/20",
    "from-green-500/20 to-emerald-500/20",
    "from-red-500/20 to-rose-500/20",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <Card
      className={cn(
        "group bg-white overflow-hidden transition-all duration-500",
        "border-none hover:shadow-xl",
        "transform hover:scale-[1.02]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Workout Header */}
      <div
        className={cn(
          "relative h-48 p-6",
          "bg-gradient-to-br from-custom-dark to-custom-dark/90"
        )}
      >
        {/* Background Effects */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-20",
            gradient
          )}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Trophy Icon */}
        <div
          className={cn(
            "absolute top-4 right-4 transform transition-all duration-300",
            isHovered ? "rotate-12 scale-110" : ""
          )}
        >
          <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
            <Trophy className="w-5 h-5 text-custom-red" />
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between text-white z-10">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="font-blogger">Day {workout.day}</span>
          </div>

          <div>
            <h3
              className={cn(
                "font-motter text-2xl mb-2",
                "transform transition-all duration-300",
                isHovered ? "translate-x-2" : ""
              )}
            >
              {workout.name}
            </h3>

            <div className="flex items-center gap-4 text-white/70">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4" />
                <span className="text-sm">
                  {workout.exercises.length} exercises
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span className="text-sm">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise List */}
      <div className="divide-y divide-gray-100">
        {workout.exercises.map((exercise, idx) => (
          <div
            key={idx}
            className={cn(
              "p-6 space-y-3",
              "hover:bg-custom-red/5 transition-all duration-300"
            )}
          >
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
          className="w-full text-custom-red hover:text-custom-red/90 hover:bg-custom-red/5 group"
        >
          <span className="flex items-center justify-center gap-2">
            View More
            <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </Card>
  );
}
