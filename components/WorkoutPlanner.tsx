// File: components/WorkoutPlanner.tsx
"use client";

import { useState } from "react";
import { WorkoutPlan } from "@/types/workout";
import { WorkoutPlanGenerator } from "./workout-planner/WorkoutPlanGenerator";
import { WorkoutScheduleHeader } from "./workout-schedule/WorkoutScheduleHeader";
import { WorkoutScheduleStats } from "./workout-schedule/WorkoutScheduleStats";
import { WorkoutScheduleCard } from "./workout-schedule/WorkoutScheduleCard";
import { WorkoutScheduleMotivationalQuote } from "./workout-schedule/WorkoutScheduleMotivationalQuote";
import { WorkoutPlanActions } from "./workout-planner/WorkoutPlanActions";

export default function WorkoutPlanner() {
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);

  const handleRegenerateClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setWorkoutPlan(null);
  };

  const handlePlanGenerated = (plan: WorkoutPlan) => {
    setWorkoutPlan(plan);
  };

  if (!workoutPlan) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <WorkoutPlanGenerator onPlanGenerated={handlePlanGenerated} />
      </div>
    );
  }

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <WorkoutScheduleHeader plan={workoutPlan} />

      {/* Stats Overview */}
      <WorkoutScheduleStats plan={workoutPlan} />

      {/* Workout Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workoutPlan.workouts.map((workout, index) => (
            <WorkoutScheduleCard key={index} workout={workout} index={index} />
          ))}
        </div>
      </div>

      {/* Motivational Quote */}
      <WorkoutScheduleMotivationalQuote />

      {/* Action Buttons */}
      <WorkoutPlanActions
        onRegenerate={handleRegenerateClick}
        plan={workoutPlan}
      />

      {/* Print Styles - Hidden on screen, visible on print */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .workout-plan-content,
          .workout-plan-content * {
            visibility: visible;
          }
          .workout-plan-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
