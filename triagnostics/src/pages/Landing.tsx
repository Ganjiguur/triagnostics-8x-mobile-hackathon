import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo / Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-pink-600 flex items-center justify-center text-white shadow-lg">
            <Heart size={40} />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900">
            TriAgnostics
          </h1>
          <p className="text-xl text-gray-700">
            Discover Your Personalized Gut-Health Profile
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-gray-600">
          Answer 8 quick questions about your digestion, energy, and wellness habits to receive personalized recommendations designed just for you.
        </p>

        {/* CTA Button */}
        <Link
          to="/quiz"
          className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all transform hover:scale-105"
        >
          Start Assessment
        </Link>

        {/* Features */}
        <div className="pt-8 grid grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <div className="text-2xl">🎯</div>
            <p className="font-semibold text-gray-900">Quick</p>
            <p className="text-xs text-gray-600">5 min quiz</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">🔬</div>
            <p className="font-semibold text-gray-900">Science-backed</p>
            <p className="text-xs text-gray-600">4-step analysis</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">⚡</div>
            <p className="font-semibold text-gray-900">Personal</p>
            <p className="text-xs text-gray-600">Just for you</p>
          </div>
        </div>
      </div>
    </div>
  );
}
