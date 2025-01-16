"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Brain,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Smart AI Analysis",
    description:
      "Our AI system adapts and learns from your performance, providing real-time optimization of your workout routine.",
    icon: Brain,
    color: "from-blue-500/20 to-cyan-500/20",
    metrics: [
      { label: "Accuracy Rate", value: "99.8%" },
      { label: "Response Time", value: "<0.5s" },
    ],
    image: "/images/Smart-AI.jpg",
  },
  {
    title: "Performance Tracking",
    description:
      "Track your progress with advanced metrics and visualizations that help you understand your fitness journey.",
    icon: TrendingUp,
    color: "from-purple-500/20 to-pink-500/20",
    metrics: [
      { label: "Data Points", value: "50+" },
      { label: "Success Rate", value: "94%" },
    ],
    image: "/images/Performance-Tracking.jpg",
  },
  {
    title: "Goal Achievement",
    description:
      "Set and achieve your fitness goals with our intelligent milestone tracking and reward system.",
    icon: Target,
    color: "from-amber-500/20 to-orange-500/20",
    metrics: [
      { label: "Goals Met", value: "89%" },
      { label: "User Growth", value: "45%" },
    ],
    image: "/images/Goal-Achievement.jpg",
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "AI-powered form correction ensures safe and effective workouts",
    color: "bg-emerald-500",
  },
  {
    icon: Zap,
    title: "Quick Results",
    description: "See measurable improvements within the first month",
    color: "bg-amber-500",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Access to expert-designed workout programs",
    color: "bg-purple-500",
  },
];

export default function Benefits() {
  const router = useRouter();

  return (
    <section
      id="benefits"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-custom-red/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 bg-custom-red/10 text-custom-red px-4 py-2 rounded-full font-blogger mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-motter text-custom-dark mb-6">
            Experience the Future of{" "}
            <span className="text-custom-red">Fitness</span>
          </h2>
          <p className="text-xl text-custom-dark/70 font-blogger">
            Discover how our innovative platform revolutionizes your workout
            experience with cutting-edge technology and personalized guidance
          </p>
        </div>

        {/* Main Benefits */}
        <div className="space-y-32">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "flex items-center gap-16",
                index % 2 === 1 && "flex-row-reverse"
              )}
            >
              {/* Content Side */}
              <div className="w-1/2 space-y-8">
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                    benefit.color
                  )}
                >
                  <benefit.icon className="w-8 h-8 text-custom-dark" />
                </div>

                <div>
                  <h3 className="text-3xl font-motter text-custom-dark mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-custom-dark/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="flex gap-8">
                  {benefit.metrics.map((metric) => (
                    <div key={metric.label} className="space-y-2">
                      <div className="text-3xl font-motter text-custom-red">
                        {metric.value}
                      </div>
                      <div className="text-sm text-custom-dark/70">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group text-custom-red hover:text-custom-red hover:bg-custom-red/5"
                >
                  <span className="flex items-center gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>

              {/* Image Side */}
              <div className="w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500",
                      benefit.color
                    )}
                  />
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights */}
        <div className="mt-32 grid grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform transition-transform duration-300 group-hover:scale-105" />
              <div className="relative p-8 flex items-start gap-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    highlight.color + "/10"
                  )}
                >
                  <highlight.icon
                    className={cn(
                      "w-6 h-6",
                      "text-" + highlight.color.split("-")[1]
                    )}
                  />
                </div>
                <div>
                  <h4 className="font-motter text-xl text-custom-dark mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-custom-dark/70">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <Button
            size="lg"
            onClick={() => router.push("/workout-planner")}
            className="bg-custom-red hover:bg-custom-red/90 text-white px-8 h-14 text-lg font-blogger group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Transform Your Fitness Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-custom-red to-custom-red/80 transform transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </section>
  );
}
