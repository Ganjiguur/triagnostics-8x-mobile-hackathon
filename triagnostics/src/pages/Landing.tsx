import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-pink-600 flex items-center justify-center text-white shadow-lg">
            <Heart size={40} />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900">TriAgnostics</h1>
          <p className="text-xl text-gray-700">
            Find your gut-health profile in a few minutes.
          </p>
        </div>

        <Link
          to="/connect"
          className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all transform hover:scale-105"
        >
          Start
        </Link>

        <div className="pt-8 grid grid-cols-3 gap-4 text-sm font-semibold text-gray-900">
          <div>Quick</div>
          <div>Science-backed</div>
          <div>Personal</div>
        </div>
      </div>
    </div>
  );
}
