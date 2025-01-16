// File: components/workout-planner/WorkoutPlanGenerator.tsx
"use client";

import { useState } from "react";
import { WorkoutPlan, Workout } from "@/types/workout";
import { UserPreferences } from "@/types/preferences";
import { toast } from "sonner";
import PreferenceForm from "../preference-form/PreferenceForm";
import { LoadingScreen } from "../loading";

interface WorkoutPlanGeneratorProps {
  onPlanGenerated: (plan: WorkoutPlan) => void;
}

export function WorkoutPlanGenerator({
  onPlanGenerated,
}: WorkoutPlanGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000; // 2 seconds

  const handlePreferenceSubmit = async (
    preferences: UserPreferences,
    isRetry = false
  ) => {
    if (!isRetry) {
      setRetryCount(0);
    }

    if (retryCount >= MAX_RETRIES) {
      toast.error("Maximum retry attempts reached", {
        description: "Please try again with different preferences",
        duration: 5000,
      });
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...preferences,
          retryAttempt: retryCount + 1,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate workout plan");
      }

      // Validate the workout plan structure
      if (
        !data.workouts?.length ||
        data.workouts.some(
          (workout: Workout) =>
            !workout.exercises || workout.exercises.length < 3
        )
      ) {
        throw new Error(
          "Invalid workout plan structure or insufficient exercises"
        );
      }

      onPlanGenerated(data);
      toast.success("Your personalized plan is ready! 🎉", {
        description: "Get ready to transform your fitness journey",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error:", error);

      if (retryCount < MAX_RETRIES - 1) {
        toast.error("Having trouble creating your plan", {
          description: `Retrying (Attempt ${retryCount + 2}/${MAX_RETRIES})...`,
          duration: 3000,
        });

        // Increment retry count and try again after delay
        setRetryCount((prev) => prev + 1);
        setTimeout(() => {
          handlePreferenceSubmit(preferences, true);
        }, RETRY_DELAY);
      } else {
        toast.error("Couldn't create your plan", {
          description: "Please try adjusting your preferences and try again",
          action: {
            label: "Try Again",
            onClick: () => {
              setRetryCount(0);
              handlePreferenceSubmit(preferences);
            },
          },
          duration: 8000,
        });
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-custom-red/5 via-white to-custom-red/5 opacity-50 pointer-events-none" />
        <div className="relative z-0">
          <PreferenceForm
            onSubmit={handlePreferenceSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  );
}
