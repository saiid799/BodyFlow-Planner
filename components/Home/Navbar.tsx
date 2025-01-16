"use client";

import { useEffect, useState } from "react";
import { Dumbbell, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Benefits", href: "#benefits" },
];

export default function HomeNavbar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle mounting state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled && mounted
          ? "bg-white/80 backdrop-blur-lg shadow-lg shadow-black/[0.03] py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-custom-dark hover:text-custom-red transition-all duration-300"
          >
            <div className="relative">
              <Dumbbell className="w-8 h-8 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-custom-red/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-motter text-2xl relative">
              BodyFlow
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-red transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "relative group font-blogger text-lg transition-colors duration-300",
                    activeSection === link.href.slice(1) && mounted
                      ? "text-custom-red"
                      : "text-custom-dark/80 hover:text-custom-red"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-custom-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              ))}
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-custom-red to-custom-red/60 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <Button
                variant="default"
                size="lg"
                onClick={() => router.push("/workout-planner")}
                className="relative bg-custom-red hover:bg-custom-red text-white font-blogger text-lg px-8 h-12 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative group p-2 text-custom-dark hover:text-custom-red transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-custom-red/10 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300"></div>
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden border-t border-custom-dark/5",
            isMobileMenuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left font-blogger text-lg text-custom-dark/80 hover:text-custom-red transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-custom-red/5"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  router.push("/workout-planner");
                }}
                className="w-full bg-custom-red hover:bg-custom-red/90 text-white font-blogger text-lg transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-1px]"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
