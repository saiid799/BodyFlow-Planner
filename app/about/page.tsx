import Image from "next/image";
import { Heart, Target, Users, Award, Clock, Dumbbell } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Every workout plan is tailored to your unique needs and goals.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Clear objectives and milestones to track your progress.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a community of like-minded fitness enthusiasts.",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description: "AI-powered plans based on professional fitness expertise.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Workouts that fit your busy lifestyle and availability.",
  },
  {
    icon: Dumbbell,
    title: "Progressive Training",
    description: "Plans that evolve as you grow stronger and fitter.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fefaf6]">
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-custom-red/5 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6 fade-in-up">
            <h1 className="font-motter text-5xl md:text-6xl text-custom-dark">
              About <span className="text-custom-red">BodyFlow</span>
            </h1>
            <p className="text-xl text-custom-dark/70 font-blogger max-w-2xl mx-auto">
              We&apos;re revolutionizing personal fitness through AI-powered
              technology and personalized workout experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative slide-in-right">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <Image
                src="/api/placeholder/800/600"
                alt="About BodyFlow"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-custom-red/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-custom-dark/10 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <h2 className="font-motter text-3xl text-custom-dark">
              Our Mission
            </h2>
            <p className="text-lg text-custom-dark/70 font-blogger leading-relaxed">
              At BodyFlow, we believe that everyone deserves access to
              professional-quality fitness guidance. Our AI-powered platform
              combines cutting-edge technology with proven exercise science to
              create personalized workout plans that adapt to your progress and
              needs.
            </p>
            <p className="text-lg text-custom-dark/70 font-blogger leading-relaxed">
              We&apos;re committed to making fitness accessible, enjoyable, and
              effective for people of all fitness levels. Whether you&apos;re just
              starting your fitness journey or looking to reach new heights,
              BodyFlow is here to support you every step of the way.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32">
          <h2 className="font-motter text-3xl text-custom-dark text-center mb-16">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-102"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-custom-red/10 rounded-xl group-hover:bg-custom-red/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-custom-red" />
                  </div>
                  <div>
                    <h3 className="font-motter text-xl text-custom-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-custom-dark/70">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
