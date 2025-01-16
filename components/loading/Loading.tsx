// File: components/loading/Loading.tsx
import { Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/card";

const pulseMessages = [
  "Analyzing your fitness profile...",
  "Crafting the perfect workout plan...",
  "Optimizing exercise sequences...",
  "Adding progressive overload...",
  "Finalizing your transformation journey...",
];

export interface LoadingProps {
  variant?: "fullscreen" | "inline";
  message?: string;
  showProgress?: boolean;
}

export function Loading({
  variant = "inline",
  message = "Loading...",
  showProgress = false,
}: LoadingProps) {
  if (variant === "fullscreen") {
    return (
      <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <Card
            className="w-full max-w-md mx-auto bg-white/50 backdrop-blur-md 
            shadow-lg border-custom-red/10 overflow-hidden"
          >
            <div className="relative px-6 py-8">
              {/* Background Gradients */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-custom-red/5 to-transparent opacity-50" />
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 
                  bg-[radial-gradient(ellipse_at_center,rgba(216,64,64,0.1)_0%,transparent_70%)]"
                />
              </div>

              {/* Title Section */}
              <div className="text-center mb-6">
                <h2
                  className="font-motter text-2xl sm:text-3xl text-custom-dark mb-2 
                  transform transition-all duration-500 hover:scale-105"
                >
                  {message}
                </h2>
                <div
                  className="w-full max-w-[180px] sm:max-w-xs mx-auto h-0.5 
                  bg-gradient-to-r from-transparent via-custom-red/30 to-transparent rounded"
                />
              </div>

              {/* Main Animation Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6">
                {/* Outer rotating rings */}
                <div className="absolute inset-0">
                  {/* Outer ring */}
                  <div
                    className="w-full h-full rounded-full border-3 border-custom-red/10 
                    transform transition-transform duration-500 hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 rounded-full border-3 
                    border-t-custom-red border-r-custom-red/30 border-b-transparent border-l-transparent 
                    animate-[spin_3s_linear_infinite]"
                  />
                  {/* Inner ring */}
                  <div className="absolute inset-4 rounded-full border-3 border-custom-red/5" />
                  <div
                    className="absolute inset-4 rounded-full border-3 
                    border-t-custom-red/30 border-r-custom-red/20 border-b-transparent border-l-transparent 
                    animate-[spin_4s_linear_infinite_reverse]"
                  />
                </div>

                {/* Center Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer pulse */}
                  <div className="w-14 h-14 rounded-full bg-custom-red/10 animate-ping" />
                  {/* Inner pulse */}
                  <div className="absolute w-12 h-12 rounded-full bg-custom-red/5 animate-pulse" />
                  {/* Center icon */}
                  <div
                    className="absolute w-10 h-10 rounded-full bg-white shadow-lg 
                    flex items-center justify-center transform hover:scale-110 
                    transition-transform duration-300 hover:shadow-xl"
                  >
                    <Dumbbell className="w-5 h-5 text-custom-red animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Progress Messages */}
              {showProgress && (
                <div className="space-y-2">
                  {pulseMessages.map((msg, index) => (
                    <div
                      key={index}
                      className="bg-white/70 backdrop-blur-sm rounded-lg p-2.5 
                        shadow-sm hover:shadow-md transition-all duration-300
                        transform hover:translate-x-1"
                      style={{
                        opacity: 0,
                        animation: `fadeInOut 5s infinite ${index * 0.8}s`,
                      }}
                    >
                      <p className="text-custom-dark/70 font-blogger text-center text-sm">
                        {msg}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Inline variant
  return (
    <Card className="bg-white/50 backdrop-blur-sm p-4 w-fit mx-auto">
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-3 border-custom-red/20" />
          <div
            className="absolute inset-0 rounded-full border-3 
            border-t-custom-red border-r-custom-red/40 border-b-transparent border-l-transparent 
            animate-[spin_1.5s_linear_infinite]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-custom-red animate-pulse" />
          </div>
        </div>
        <p className="font-blogger text-sm text-custom-dark/70">{message}</p>
      </div>
    </Card>
  );
}
