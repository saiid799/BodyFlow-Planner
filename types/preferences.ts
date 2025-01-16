export type Gender = "male" | "female";
export type FitnessLevel = "beginner" | "intermediate" | "advanced";
export type Duration = "1" | "2" | "3" | "5" | "7";
export type WorkoutType = "bodyweight" | "cardio" | "flexibility";

export interface UserPreferences {
  gender: Gender;
  age: string;
  weight: string;
  fitnessLevel: FitnessLevel;
  duration: Duration;
  workoutTypes: WorkoutType[];
}
