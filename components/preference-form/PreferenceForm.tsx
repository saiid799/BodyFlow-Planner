"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { UserPreferences } from "@/types/preferences";

import { WorkoutTypeSelection } from "./WorkoutTypeSelection";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { FitnessLevelSelection } from "./FitnessLevelSelection";
import { DurationSelection } from "./DurationSelection";
import { cn } from "@/lib/utils";

interface PreferenceFormProps {
  onSubmit: (preferences: UserPreferences) => void;
  isLoading: boolean;
}

export default function PreferenceForm({
  onSubmit,
  isLoading,
}: PreferenceFormProps) {
  const [preferences, setPreferences] = useState<UserPreferences>({
    gender: "male",
    age: "",
    weight: "",
    fitnessLevel: "beginner",
    duration: "7",
    workoutTypes: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const updatePreferences = (updates: Partial<UserPreferences>) => {
    setPreferences((prev) => ({ ...prev, ...updates }));
  };

  const handleWorkoutTypeToggle = (
    type: UserPreferences["workoutTypes"][0]
  ) => {
    setPreferences((prev) => ({
      ...prev,
      workoutTypes: prev.workoutTypes.includes(type)
        ? prev.workoutTypes.filter((t) => t !== type)
        : [...prev.workoutTypes, type],
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto space-y-20 relative"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10 
          bg-gradient-to-br from-custom-red/5 via-white to-custom-red/5 
          opacity-50 pointer-events-none"
      />

      {/* Hero Section */}
      <div className="text-center space-y-4 relative">
        <div
          className="inline-flex items-center gap-2 
          bg-custom-red/10 text-custom-red px-4 py-2 
          rounded-full font-blogger mb-4 
          animate-pulse-slow hover:animate-none"
        >
          <Sparkles className="w-4 h-4" />
          <span>Your Personalized Fitness Journey</span>
        </div>

        <h2 className="text-5xl font-motter text-custom-dark">
          Design Your <span className="text-custom-red">Fitness Journey</span>
        </h2>
        <p className="text-xl text-custom-dark/70 font-blogger max-w-2xl mx-auto">
          Create a personalized workout plan tailored to your goals and
          preferences with our intelligent AI-powered system
        </p>
      </div>

      {/* Workout Type Selection */}
      <WorkoutTypeSelection
        selectedTypes={preferences.workoutTypes}
        onToggle={handleWorkoutTypeToggle}
      />

      {/* Personal Details Form */}
      <PersonalDetailsForm
        preferences={preferences}
        onUpdate={updatePreferences}
      />

      {/* Fitness Level Selection */}
      <FitnessLevelSelection
        selectedLevel={preferences.fitnessLevel}
        onSelect={(level) => updatePreferences({ fitnessLevel: level })}
      />

      {/* Duration Selection */}
      <DurationSelection
        selectedDuration={preferences.duration}
        onSelect={(duration) => updatePreferences({ duration })}
      />

      {/* Submit Button */}
      <div className="flex justify-center pt-8">
        <Button
          type="submit"
          disabled={isLoading || preferences.workoutTypes.length === 0}
          className={cn(
            "group px-12 py-8 text-xl font-blogger",
            "bg-custom-red hover:bg-custom-red/90",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-300 ease-in-out",
            "transform hover:scale-105 active:scale-95",
            "shadow-md hover:shadow-xl",
            "relative overflow-hidden"
          )}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 
              bg-gradient-to-r from-custom-red/20 to-custom-red/10 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300"
          />

          <span
            className="relative z-10 flex items-center gap-3 
              transition-transform duration-300 
              group-hover:translate-x-1"
          >
            {isLoading ? "Creating Your Plan..." : "Generate Your Workout Plan"}
            <ChevronRight
              className="w-5 h-5 
                transition-transform duration-300 
                group-hover:translate-x-1"
            />
          </span>
        </Button>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute -top-20 -left-20 
          w-64 h-64 bg-custom-red/5 
          rounded-full blur-3xl opacity-50 
          pointer-events-none"
      />
      <div
        className="absolute -bottom-20 -right-20 
          w-64 h-64 bg-custom-dark/5 
          rounded-full blur-3xl opacity-50 
          pointer-events-none"
      />
    </form>
  );
}
