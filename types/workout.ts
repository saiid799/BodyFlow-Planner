export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  description: string;
}

export interface Workout {
  day: number;
  name: string;
  exercises: Exercise[];
}

export interface WorkoutPlan {
  name: string;
  duration: string;
  workouts: Workout[];
}
