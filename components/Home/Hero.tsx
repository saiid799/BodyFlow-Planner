// File: components/Hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  const features = [
    "No sign-up required",
    "Instant access",
    "100% Free forever",
  ];

  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-custom-red/5 via-white/80 to-transparent" />
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] 
            bg-[radial-gradient(ellipse_at_center,rgba(216,64,64,0.15)_0%,transparent_70%)]"
          />
        </div>

        {/* Animated Background Elements */}
        <div
          className="absolute top-1/4 left-20 w-96 h-96 bg-custom-red/5 rounded-full 
          blur-3xl animate-pulse opacity-75"
        />
        <div
          className="absolute bottom-1/4 right-20 w-96 h-96 bg-blue-500/5 rounded-full 
          blur-3xl animate-pulse delay-1000 opacity-75"
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-500/5 rounded-full 
          blur-3xl animate-pulse delay-700 opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-10 text-center lg:text-left relative fade-in-up">
            {/* Enhanced Floating Badge */}
            <div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md 
              px-6 py-3 rounded-full border border-custom-red/10 shadow-lg 
              transform hover:scale-105 transition-all duration-300 group cursor-default"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-custom-red/10 to-transparent 
                rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <Sparkles className="w-5 h-5 text-custom-red animate-pulse" />
              <span className="text-base font-blogger text-custom-red relative">
                AI-Powered Personalized Workouts
              </span>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-8 relative">
              <h1 className="font-motter text-5xl lg:text-7xl text-custom-dark leading-tight">
                Transform Your{" "}
                <span className="relative inline-block">
                  <span
                    className="relative z-10 bg-gradient-to-br from-custom-red via-custom-red to-custom-red/80 
                    bg-clip-text text-transparent animate-gradient"
                  >
                    Body & Mind
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-full h-3 bg-custom-red/10 -rotate-2 
                    transform origin-left transition-transform duration-300 hover:scale-x-110"
                  ></span>
                </span>
              </h1>
              <p className="text-xl text-custom-dark/70 font-blogger max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience personalized workout plans that adapt to your goals
                and progress. Our AI-powered system creates the perfect fitness
                journey tailored just for you.
              </p>
            </div>

            {/* Free Features List */}
            <div className="flex flex-col gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/50 backdrop-blur-sm rounded-lg px-4 py-3
                    border border-custom-red/10 shadow-sm hover:shadow-md
                    transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-custom-dark/70 font-blogger text-center block">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => router.push("/workout-planner")}
                className="bg-custom-red text-white px-8 h-14 text-lg font-blogger 
                  group relative overflow-hidden transform hover:scale-105 
                  transition-all duration-300 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-custom-red to-custom-red/80 
                  transform transition-transform group-hover:scale-110"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/about")}
                className="h-14 px-8 text-lg font-blogger group border-2 
                  hover:bg-custom-dark/5 relative overflow-hidden transform 
                  hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Features
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-custom-red/10 
                  to-transparent transform origin-left scale-x-0 
                  transition-transform group-hover:scale-x-100"
                />
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-[600px] flex items-center justify-center slide-in-right">
            <div className="relative w-full h-full max-w-lg mx-auto">
              <div
                className="absolute inset-0 bg-gradient-to-br from-custom-red/10 
                to-transparent rounded-3xl transform rotate-3 transition-transform 
                duration-500 group-hover:rotate-6"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tl from-custom-dark/10 
                to-transparent rounded-3xl transform -rotate-3 transition-transform 
                duration-500 group-hover:-rotate-6"
              />

              <div
                className="relative bg-white/60 backdrop-blur-md rounded-3xl p-6 
                shadow-xl transform hover:scale-102 transition-all duration-500 
                group hover:shadow-2xl"
              >
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/images/Workout-Visualization.jpg"
                    alt="Workout Visualization"
                    fill
                    className="object-cover transform transition-transform duration-700 
                      group-hover:scale-110"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 
                    via-transparent to-transparent opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500"
                  />
                </div>

                <div
                  className="absolute -top-8 -right-8 w-32 h-32 bg-custom-red/20 
                  rounded-full blur-2xl animate-pulse"
                />
                <div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 
                  rounded-full blur-2xl animate-pulse delay-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
