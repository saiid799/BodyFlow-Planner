"use client";

import { useRouter } from "next/navigation";
import {
  Dumbbell,
  Heart,
  Sparkles,
  Target,
  Users,
  BarChart3,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  videoUrl?: string;
  stats?: { label: string; value: string }[];
}[] = [
  {
    icon: Dumbbell,
    title: "AI-Powered Workouts",
    description:
      "Experience personalized training sessions that adapt to your progress and goals in real-time",
    color: "bg-blue-500/10 text-blue-500",
    videoUrl: "/workout-demo.mp4",
    stats: [
      { label: "Success Rate", value: "94%" },
      { label: "User Satisfaction", value: "4.8/5" },
    ],
  },
  {
    icon: Heart,
    title: "Health Analytics",
    description:
      "Track your vitals, progress, and wellness metrics with our advanced monitoring system",
    color: "bg-red-500/10 text-red-500",
    stats: [
      { label: "Data Points", value: "50+" },
      { label: "Accuracy", value: "99.9%" },
    ],
  },
  {
    icon: Target,
    title: "Smart Goal Setting",
    description:
      "Set and achieve your fitness milestones with AI-driven recommendations and progress tracking",
    color: "bg-green-500/10 text-green-500",
    stats: [
      { label: "Goals Met", value: "89%" },
      { label: "User Growth", value: "+45%" },
    ],
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a vibrant community of fitness enthusiasts, share achievements, and stay motivated together",
    color: "bg-purple-500/10 text-purple-500",
    stats: [
      { label: "Active Users", value: "10K+" },
      { label: "Monthly Events", value: "25+" },
    ],
  },
  {
    icon: BarChart3,
    title: "Progress Insights",
    description:
      "Visualize your improvement with detailed analytics, charts, and performance metrics",
    color: "bg-amber-500/10 text-amber-500",
    stats: [
      { label: "Data Points", value: "100+" },
      { label: "Weekly Reports", value: "4" },
    ],
  },
  {
    icon: Sparkles,
    title: "Expert Guidance",
    description:
      "Access professional workout plans and get real-time form corrections from AI trainers",
    color: "bg-indigo-500/10 text-indigo-500",
    stats: [
      { label: "Certified Trainers", value: "50+" },
      { label: "Exercise Library", value: "1000+" },
    ],
  },
];

export default function Features() {
  const router = useRouter();

  return (
    <section
      className="py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-custom-red/10 text-custom-red px-4 py-2 rounded-full font-blogger mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Cutting-Edge Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-motter text-custom-dark mb-6">
            Transform Your Fitness Journey
          </h2>
          <p className="text-xl text-custom-dark/70 font-blogger">
            Experience a comprehensive suite of features designed to elevate
            your workout routine and help you achieve your fitness goals faster
            than ever before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-white border-none overflow-hidden"
            >
              {/* Background Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                {/* Icon */}
                <div
                  className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-motter text-2xl text-custom-dark group-hover:text-custom-red transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-custom-dark/70 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Grid */}
                  {feature.stats && (
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {feature.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 rounded-xl p-4 transition-all duration-300 group-hover:bg-custom-red/5"
                        >
                          <div className="font-motter text-xl text-custom-red">
                            {stat.value}
                          </div>
                          <div className="text-sm text-custom-dark/70">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="w-full mt-6 text-custom-red hover:text-custom-red hover:bg-custom-red/5 group/btn"
                    onClick={() => router.push("/workout-planner")}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Learn more
                      <ArrowRight className="w-4 h-4 transform transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </div>

                {/* Hover Effects */}
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-custom-red to-custom-red/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="bg-custom-red hover:bg-custom-red/90 text-white px-8 h-14 text-lg font-blogger group relative overflow-hidden"
            onClick={() => router.push("/workout-planner")}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-custom-red to-custom-red/80 transform transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </section>
  );
}
