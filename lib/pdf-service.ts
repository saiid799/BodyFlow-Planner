import { WorkoutPlan } from "@/types/workout";
import WorkoutPlanDocument from "@/components/pdf/WorkoutPlanPDF";
import { pdf } from "@react-pdf/renderer";
import React from "react";

export async function generatePDF(workoutPlan: WorkoutPlan): Promise<Blob> {
  try {
    const element = React.createElement(WorkoutPlanDocument, {
      plan: workoutPlan,
    });
    const instance = pdf();
    instance.updateContainer(element);
    const blob = await instance.toBlob();
    return blob;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
}
