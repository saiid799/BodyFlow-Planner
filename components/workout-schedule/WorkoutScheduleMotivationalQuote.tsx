export function WorkoutScheduleMotivationalQuote() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        className="absolute inset-0 
        bg-gradient-to-r from-custom-red/5 
        via-custom-red/10 to-custom-red/5 
        rounded-3xl -z-10"
      />
      <blockquote
        className="text-center p-12 space-y-4 
        transform transition-transform hover:scale-[1.01]"
      >
        <p
          className="font-motter text-3xl text-custom-dark 
          transition-colors hover:text-custom-red/80"
        >
          &ldquo;Transform yourself, not your workouts.&rdquo;
        </p>
        <footer
          className="text-custom-dark/70 font-blogger 
          transition-colors hover:text-custom-red/70"
        >
          Stay consistent, trust the process
        </footer>
      </blockquote>
    </div>
  );
}
