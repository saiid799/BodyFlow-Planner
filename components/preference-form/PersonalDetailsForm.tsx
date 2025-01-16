import { UserPreferences, Gender } from "@/types/preferences";

interface PersonalDetailsFormProps {
  preferences: UserPreferences;
  onUpdate: (updates: Partial<UserPreferences>) => void;
}

export function PersonalDetailsForm({
  preferences,
  onUpdate,
}: PersonalDetailsFormProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-motter text-custom-dark">
          Tell Us About Yourself
        </h3>
        <p className="text-custom-dark/70">
          Help us personalize your workout plan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <label
            htmlFor="gender"
            className="block text-lg font-blogger text-custom-dark"
          >
            Gender
          </label>
          <select
            id="gender"
            value={preferences.gender}
            onChange={(e) =>
              onUpdate({
                gender: e.target.value as Gender,
              })
            }
            className="w-full p-4 rounded-xl border-2 border-custom-dark/10 bg-white font-blogger 
              focus:ring-4 focus:ring-custom-red/20 focus:border-custom-red focus:outline-none
              transition-all appearance-none"
            aria-label="Select your gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="age"
            className="block text-lg font-blogger text-custom-dark"
          >
            Age
          </label>
          <input
            id="age"
            type="number"
            value={preferences.age}
            onChange={(e) => onUpdate({ age: e.target.value })}
            min="16"
            max="100"
            className="w-full p-4 rounded-xl border-2 border-custom-dark/10 bg-white font-blogger 
              focus:ring-4 focus:ring-custom-red/20 focus:border-custom-red focus:outline-none
              transition-all"
            placeholder="Enter your age"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="weight"
            className="block text-lg font-blogger text-custom-dark"
          >
            Weight (kg)
          </label>
          <input
            id="weight"
            type="number"
            value={preferences.weight}
            onChange={(e) => onUpdate({ weight: e.target.value })}
            min="30"
            max="200"
            className="w-full p-4 rounded-xl border-2 border-custom-dark/10 bg-white font-blogger 
              focus:ring-4 focus:ring-custom-red/20 focus:border-custom-red focus:outline-none
              transition-all"
            placeholder="Enter your weight"
          />
        </div>
      </div>
    </section>
  );
}
