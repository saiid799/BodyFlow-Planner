// File: components/workout-planner/WorkoutPlanActions.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Printer,
  Download,
  Share2,
  ArrowLeft,
  LucideIcon,
  Loader2,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { generatePDF } from "@/lib/pdf-service";
import { WorkoutPlan } from "@/types/workout";

interface WorkoutPlanActionsProps {
  onRegenerate: () => void;
  plan: WorkoutPlan;
}

interface ActionButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => Promise<void> | void;
  variant?: "outline" | "default" | "secondary";
  baseClassName?: string;
  hoverClassName?: string;
  iconClassName?: string;
  isLoading?: boolean;
}

export function WorkoutPlanActions({
  onRegenerate,
  plan,
}: WorkoutPlanActionsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;

    try {
      setIsDownloading(true);
      toast.loading("Preparing your PDF...");

      const blob = await generatePDF(plan);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${plan.name
        .toLowerCase()
        .replace(/\s+/g, "-")}-workout-plan.pdf`;

      // Create loading toast
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("Download complete!", {
        description: "Your workout plan PDF is ready",
        icon: <FileText className="w-4 h-4" />,
      });
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Download failed", {
        description: "Please try again or contact support",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    toast.loading("Preparing print view...");
    setTimeout(() => {
      window.print();
      toast.success("Print dialog opened");
    }, 500);
  };

  const handleShare = async () => {
    if (isSharing) return;

    try {
      setIsSharing(true);

      if (navigator.share) {
        const blob = await generatePDF(plan);
        const file = new File([blob], `${plan.name}-workout-plan.pdf`, {
          type: "application/pdf",
        });

        await navigator.share({
          title: `${plan.name} Workout Plan`,
          text: "Check out my personalized workout plan from BodyFlow!",
          files: [file],
        });

        toast.success("Successfully shared!");
      } else {
        // Fallback to clipboard
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        toast.success("Link copied!", {
          description: "Share the link with your friends",
        });
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        toast.error("Sharing failed", {
          description: "Please try a different method",
        });
      }
    } finally {
      setIsSharing(false);
    }
  };

  const actionButtons: ActionButtonProps[] = [
    {
      label: "New Plan",
      icon: ArrowLeft,
      onClick: onRegenerate,
      variant: "outline",
      baseClassName:
        "text-custom-dark border-custom-dark/20 hover:border-custom-red/50",
      hoverClassName: "hover:bg-custom-red/5 hover:text-custom-red",
      iconClassName: "transition-transform group-hover:-translate-x-1",
    },
    {
      label: "Print Plan",
      icon: Printer,
      onClick: handlePrint,
      variant: "outline",
      baseClassName:
        "text-custom-dark border-custom-dark/20 hover:border-custom-red/50",
      hoverClassName: "hover:bg-custom-red/5 hover:text-custom-red",
      iconClassName: "transition-transform group-hover:scale-110",
    },
    {
      label: isDownloading ? "Preparing PDF..." : "Download PDF",
      icon: isDownloading ? Loader2 : Download,
      onClick: handleDownload,
      variant: "default",
      baseClassName: "bg-custom-red hover:bg-custom-red/90",
      iconClassName: cn(
        "transition-transform",
        isDownloading ? "animate-spin" : "group-hover:translate-y-1"
      ),
      isLoading: isDownloading,
    },
    {
      label: isSharing ? "Sharing..." : "Share Plan",
      icon: isSharing ? Loader2 : Share2,
      onClick: handleShare,
      variant: "secondary",
      baseClassName: "bg-custom-dark hover:bg-custom-dark/90",
      iconClassName: cn(
        "transition-transform",
        isSharing ? "animate-spin" : "group-hover:rotate-12"
      ),
      isLoading: isSharing,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {actionButtons.map(
          ({
            label,
            icon: Icon,
            onClick,
            variant,
            baseClassName,
            hoverClassName,
            iconClassName,
            isLoading,
          }) => (
            <Button
              key={label}
              onClick={onClick}
              disabled={isLoading}
              variant={variant}
              className={cn(
                "font-blogger text-lg group h-auto py-4 relative overflow-hidden",
                baseClassName,
                "transition-all duration-300 ease-in-out",
                "hover:shadow-md hover:scale-[1.02]",
                hoverClassName,
                isLoading && "cursor-wait"
              )}
            >
              {/* Gradient Hover Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-custom-red/10 
                to-custom-red/5 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 -z-10"
              />

              {/* Button Content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Icon className={cn("w-5 h-5", iconClassName)} />
                {label}
              </span>
            </Button>
          )
        )}
      </div>

      {/* Help Text */}
      <p className="text-center text-custom-dark/60 text-sm">
        Need help? Contact our fitness experts for guidance and support
      </p>
    </div>
  );
}
