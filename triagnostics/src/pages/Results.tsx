import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { profiles } from "../data/profiles";
import {
  Heart,
  Beaker,
  Zap,
  AlertCircle,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

const profileIcons: Record<string, any> = {
  Heart,
  Beaker,
  Zap,
  AlertCircle,
};

export function Results() {
  const navigate = useNavigate();
  const result = useQuizStore((state) => state.result);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  useEffect(() => {
    if (!result) {
      navigate("/quiz");
    }
  }, [result, navigate]);

  if (!result) {
    return null;
  }

  const profile = profiles[result.profileName];
  const IconComponent = profileIcons[profile.icon];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Profile Header */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div className="flex justify-center mb-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${profile.color} 0%, ${profile.color}dd 100%)`,
              }}
            >
              {IconComponent && <IconComponent size={32} />}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {profile.name}
          </h1>
          <p className="text-gray-600 leading-relaxed">{profile.description}</p>
        </div>

        {/* Score Breakdown */}
        <div className="bg-gradient-to-r from-teal-50 to-pink-50 p-6 rounded-2xl border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Your Wellness Scores</h3>
          <div className="space-y-3">
            {Object.entries(result.scores).map(([dimension, score]) => (
              <div key={dimension} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {dimension}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-white rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-600 to-pink-600 h-2 rounded-full"
                      style={{
                        width: `${Math.max(0, (score + 10) / 20) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-8 text-right">
                    {score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">
            Recommended For You
          </h3>
          <div className="space-y-2 overflow-x-auto pb-2">
            {profile.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0"
              >
                <h4 className="font-semibold text-gray-900 text-sm">
                  {rec.name}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{rec.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Science Button */}
        <Link
          to="/science"
          className="block w-full px-6 py-4 rounded-2xl bg-white border-2 border-teal-600 text-teal-600 font-semibold hover:bg-teal-50 transition-colors text-center flex items-center justify-center gap-2"
        >
          See the science behind this
          <ChevronRight size={20} />
        </Link>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <button
            onClick={() => {
              resetQuiz();
              navigate("/");
            }}
            className="flex-1 px-4 py-3 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} />
            <span className="hidden sm:inline">Retake Quiz</span>
            <span className="sm:hidden">Retake</span>
          </button>

          <Link
            to="/progress"
            className="flex-1 px-4 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span className="hidden sm:inline">View Progress</span>
            <span className="sm:hidden">Progress</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
