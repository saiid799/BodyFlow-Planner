// File: app/api/workout/route.ts
import { NextResponse } from "next/server";
import { generateWorkoutPlan } from "@/lib/workout-service";

export async function POST(request: Request) {
  try {
    const preferences = await request.json();
    const workoutPlan = await generateWorkoutPlan(preferences);

    if (
      !workoutPlan ||
      !workoutPlan.workouts ||
      !Array.isArray(workoutPlan.workouts)
    ) {
      throw new Error("Invalid workout plan structure");
    }

    return NextResponse.json(workoutPlan);
  } catch (error) {
    console.error("Error in workout API:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate workout plan",
        details:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    );
  }
}
