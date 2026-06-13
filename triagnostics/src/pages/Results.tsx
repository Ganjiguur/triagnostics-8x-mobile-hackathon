import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { profiles } from "../data/profiles";
import { Heart, Beaker, Zap, AlertCircle, ChevronRight } from "lucide-react";

const profileIcons: Record<string, any> = {
  Heart,
  Beaker,
  Zap,
  AlertCircle,
};

export function Results() {
  const navigate = useNavigate();
  const result = useQuizStore((state) => state.result);
  const assessmentCount = useQuizStore((state) => state.assessmentCount);
  const starterClaimed = useQuizStore((state) => state.starterClaimed);
  const simulatedWeek = useQuizStore((state) => state.simulatedWeek);
  const profileHistory = useQuizStore((state) => state.profileHistory);
  const claimStarter = useQuizStore((state) => state.claimStarter);
  const [claiming, setClaiming] = useState(false);

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
  const previous = profileHistory.length > 0 ? profileHistory[profileHistory.length - 1].result : null;
  const comparisonLabel = previous
    ? previous.profileName === result.profileName
      ? "Profile stable, scores improved"
      : `Previous: ${previous.profileName} · Now: ${result.profileName}`
    : null;

  const handleClaim = () => {
    setClaiming(true);
    window.setTimeout(() => {
      claimStarter();
      setClaiming(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {assessmentCount >= 2 ? (
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">Progress so far</h3>
            <p className="text-sm text-gray-600 mb-4">{comparisonLabel}</p>
            <div className="space-y-3">
              {Object.entries(result.scores).map(([dimension, score]) => {
                const previousScore = previous ? previous.scores[dimension as keyof typeof previous.scores] : 0;
                const diff = score - previousScore;
                return (
                  <div key={dimension} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700 capitalize">{dimension}</p>
                      <div className="w-64 bg-gray-100 rounded-full h-2 mt-2">
                        <div
                          className="bg-gradient-to-r from-teal-600 to-pink-600 h-2 rounded-full"
                          style={{ width: `${Math.max(0, (score + 10) / 20) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className={`text-sm font-semibold ${diff >= 0 ? "text-teal-700" : "text-gray-500"}`}>
                      {diff >= 0 ? "+" : ""}{diff}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-4">Accuracy improves with each check-in.</p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
            <h3 className="font-semibold text-gray-900">Your starter plan</h3>
            <p className="text-sm text-gray-600">A free 7-day routine and a free postbiotic sample to begin.</p>
            <div className="space-y-2">
              <div className="text-sm text-gray-700">• Starter routine: Morning fibre, fermented food daily, evening walk</div>
              <div className="text-sm text-gray-700">• Free postbiotic sample</div>
            </div>
            <button
              onClick={handleClaim}
              disabled={starterClaimed || claiming}
              className="w-full px-4 py-3 rounded-2xl bg-teal-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {starterClaimed ? "Claimed" : claiming ? "Claiming..." : "Claim"}
            </button>
            <p className="text-xs text-gray-500">Next check-in: week 7 · Current simulated week: {simulatedWeek}</p>
          </div>
        )}

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
          <p className="text-gray-600">{profile.description}</p>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-pink-50 p-6 rounded-2xl border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Your scores</h3>
          <div className="space-y-3">
            {Object.entries(result.scores).map(([dimension, score]) => (
              <div key={dimension} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 capitalize">{dimension}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-white rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-teal-600 to-pink-600 h-2 rounded-full"
                      style={{ width: `${Math.max(0, (score + 10) / 20) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-8 text-right">{score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Recommended for you</h3>
          <div className="space-y-2 overflow-x-auto pb-2">
            {profile.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0"
              >
                <h4 className="font-semibold text-gray-900 text-sm">{rec.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{rec.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/science"
          className="block w-full px-6 py-4 rounded-2xl bg-white border-2 border-teal-600 text-teal-600 font-semibold hover:bg-teal-50 transition-colors text-center"
        >
          View science
          <ChevronRight size={20} className="inline-block ml-2" />
        </Link>
      </div>
    </div>
  );
}
