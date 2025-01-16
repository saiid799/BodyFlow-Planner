// File: components/loading/LoadingCard.tsx
export function LoadingCard() {
  return (
    <div className="border rounded-xl p-6 space-y-4 animate-pulse bg-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-6 w-48 bg-gray-300 rounded" />
        </div>
        <div className="h-10 w-10 bg-gray-200 rounded-lg" />
      </div>

      {/* Exercise List */}
      <div className="space-y-4 pt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-1/2 bg-gray-100 rounded" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4">
        <div className="h-10 w-full bg-gray-100 rounded-lg" />
      </div>
    </div>
  );
}
