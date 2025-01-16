// File: lib/workout-service.ts
import { generateContent } from "./ai-config";
import { WorkoutPlan } from "@/types/workout";
import { UserPreferences } from "@/types/preferences";

function cleanAIResponse(response: string): string {
  let cleaned = response.replace(/```json\s*|\s*```/g, "").trim();
  cleaned = cleaned.replace(/^\s*\n+/, "").trim();

  try {
    JSON.parse(cleaned);
    return cleaned;
  } catch {
    throw new Error("Invalid JSON response format received from AI service");
  }
}

function getRestDayPlan(dayNumber: number): {
  day: number;
  name: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: string;
    description: string;
  }>;
} {
  return {
    day: dayNumber,
    name: "Active Recovery & Movement",
    exercises: [
      {
        name: "Mobility Flow",
        sets: 2,
        reps: "30 secs each",
        description:
          "Arm circles, leg swings, hip rotations. Keep movements controlled and smooth.",
      },
      {
        name: "Light Cardio",
        sets: 3,
        reps: "45 secs",
        description:
          "Alternate between march in place, jumping jacks, high knees. Go at 50% intensity.",
      },
      {
        name: "Movement Prep",
        sets: 2,
        reps: "10 each side",
        description:
          "Walking lunges, bodyweight squats, arm crossovers. Focus on form and breathing.",
      },
      {
        name: "Cool Down",
        sets: 2,
        reps: "30 secs each",
        description:
          "Light stretches for major muscle groups. Shoulders, hips, legs, back.",
      },
    ],
  };
}

async function generateWorkoutChunk(
  preferences: UserPreferences,
  startDay: number,
  daysInChunk: number,
  previousExercises: string[] = [],
  retryAttempt: number = 1
): Promise<WorkoutPlan> {
  const intensityLevels = {
    beginner: "60-70% effort, focus on form",
    intermediate: "70-85% effort, controlled tempo",
    advanced: "85-95% effort, explosive power",
  };

  const previousExercisesContext =
    previousExercises.length > 0
      ? `Previous exercises for progressive overload:
${previousExercises.map((ex) => `- ${ex}`).join("\n")}`
      : "";

  const prompt = `Generate a ${daysInChunk}-day segment (days ${startDay}-${
    startDay + daysInChunk - 1
  }) 
of a modern, no-equipment training plan.

${previousExercisesContext}

Client Profile:
- Level: ${preferences.fitnessLevel} (${
    intensityLevels[preferences.fitnessLevel]
  })
- Gender: ${preferences.gender}
- Age: ${preferences.age}
- Weight: ${preferences.weight}kg

Modern Training Principles:
1. Focus on movement patterns over muscle groups
2. Integrate mobility work into exercises
3. Progressive overload through technique and tempo
4. Mind-muscle connection emphasis
5. Modern calisthenics approach

Exercise Selection Guidelines:
1. Use ONLY basic bodyweight exercises everyone knows (push-ups, squats, lunges, etc.)
2. NO complex movements or skills required
3. Each exercise must be doable by anyone, anywhere
4. Progressive overload through reps and tempo
5. Focus on fundamentals with modern twists

Key Requirements:
1. EXACTLY 4 exercises per workout
2. NO equipment needed - pure bodyweight
3. Brief, clear exercise cues (max 2 lines)
4. Modern exercise selection and combinations
5. Clear progression from previous workouts

FORMAT YOUR RESPONSE AS VALID JSON (no other text):
{
  "name": "Modern Movement Flow Program",
  "duration": "${daysInChunk}",
  "workouts": [
    {
      "day": ${startDay},
      "name": "Workout Name",
      "exercises": [
        {
          "name": "Exercise Name",
          "sets": 3,
          "reps": "12",
          "description": "Modern, clear form cues. Focus on quality."
        }
      ]
    }
  ]
}

Example good description:
"Control descent, explosive up. Focus on full body tension."

REQUIREMENTS:
- Modern exercise combinations
- Focus on movement quality
- Progressive intensity
- Clear, concise cues
${retryAttempt > 1 ? "- Verify JSON structure before returning" : ""}`;

  const response = await generateContent(prompt);
  const cleaned = cleanAIResponse(response);
  return JSON.parse(cleaned) as WorkoutPlan;
}

export async function generateWorkoutPlan(
  preferences: UserPreferences & { retryAttempt?: number }
): Promise<WorkoutPlan> {
  const { retryAttempt = 1 } = preferences;
  const totalDays = parseInt(preferences.duration);

  // Define rest day patterns based on program length
  const restDayPatterns = {
    "5": [3], // Rest on day 3 for 5-day plans
    "7": [3, 6], // Rest on days 3 and 6 for 7-day plans
  };

  // Get rest days for current plan duration
  const restDays = restDayPatterns[preferences.duration as "5" | "7"] || [];

  try {
    const completeWorkoutPlan: WorkoutPlan = {
      name: "",
      duration: preferences.duration,
      workouts: [],
    };

    let previousExercises: string[] = [];
    let currentDay = 1;

    while (currentDay <= totalDays) {
      // Check if current day should be a rest day
      if (restDays.includes(currentDay)) {
        completeWorkoutPlan.workouts.push(getRestDayPlan(currentDay));
        currentDay++;
        continue;
      }

      // Calculate days until next rest day or end
      const nextRestDayIndex = restDays.findIndex((day) => day > currentDay);
      const nextRestDay =
        nextRestDayIndex !== -1 ? restDays[nextRestDayIndex] : totalDays + 1;
      const daysUntilRest = nextRestDay - currentDay;

      // Generate chunk of workouts
      const chunkSize = Math.min(3, daysUntilRest);
      const chunkPlan = await generateWorkoutChunk(
        preferences,
        currentDay,
        chunkSize,
        previousExercises,
        retryAttempt
      );

      // Update complete plan
      if (currentDay === 1) {
        completeWorkoutPlan.name = chunkPlan.name;
      }

      completeWorkoutPlan.workouts.push(...chunkPlan.workouts);

      // Update previous exercises and current day
      previousExercises = chunkPlan.workouts.flatMap((workout) =>
        workout.exercises.map((ex) => ex.name)
      );
      currentDay += chunkSize;
    }

    // Validate final plan
    if (
      !completeWorkoutPlan.workouts ||
      !Array.isArray(completeWorkoutPlan.workouts)
    ) {
      throw new Error("Invalid workout plan structure");
    }

    if (completeWorkoutPlan.workouts.length !== totalDays) {
      throw new Error(
        `Expected ${totalDays} workout days, got ${completeWorkoutPlan.workouts.length}`
      );
    }

    completeWorkoutPlan.workouts.forEach((workout, index) => {
      if (!workout.exercises || !Array.isArray(workout.exercises)) {
        throw new Error(`Invalid exercises in workout day ${index + 1}`);
      }

      if (workout.exercises.length !== 4) {
        throw new Error(
          `Workout day ${index + 1} must have exactly 4 exercises`
        );
      }

      workout.exercises.forEach((exercise, exIndex) => {
        if (
          !exercise.name ||
          !exercise.sets ||
          !exercise.reps ||
          !exercise.description
        ) {
          throw new Error(
            `Invalid exercise data at position ${exIndex + 1} in workout day ${
              index + 1
            }`
          );
        }

        if (exercise.description.length > 100) {
          exercise.description = exercise.description.slice(0, 97) + "...";
        }
      });
    });

    return completeWorkoutPlan;
  } catch (error) {
    console.error("Error generating workout plan:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to generate workout plan"
    );
  }
}
