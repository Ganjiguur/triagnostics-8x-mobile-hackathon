import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { ScienceTimeline } from "../components/ScienceTimeline";
import { ChevronLeft } from "lucide-react";

export function Science() {
  const navigate = useNavigate();
  const result = useQuizStore((state) => state.result);

  if (!result) {
    navigate("/quiz");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-4"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            The Science Behind Your Profile
          </h1>
          <p className="text-gray-600 mt-2">
            Here's how we personalized your gut-health assessment
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <ScienceTimeline />
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">How it works:</span> Our 4-step
            methodology analyzes your responses across energy, digestion,
            sensitivity, and balance dimensions to match you with one of 4
            specialized gut-health profiles.
          </p>
        </div>
      </div>
    </div>
  );
}
