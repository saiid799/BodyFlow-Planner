// File: components/Home/HomePage.tsx
import HomeNavbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Benefits from "./Benefits";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fefaf6]">
      <HomeNavbar />
      <Hero />
      <Benefits />
      <Features />
    </div>
  );
}
