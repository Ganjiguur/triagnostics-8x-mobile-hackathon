import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { ProgressCharts } from "../components/ProgressCharts";
import { ChevronLeft } from "lucide-react";

export function Progress() {
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
            Your Progress
          </h1>
          <p className="text-gray-600 mt-2">
            Tracking your wellness journey over the past 8 weeks
          </p>
        </div>

        {/* Charts */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <ProgressCharts />
        </div>

        {/* Tips */}
        <div className="bg-green-50 border border-green-200 p-4 rounded-2xl">
          <p className="text-sm text-green-900">
            <span className="font-semibold">Great progress! 🎉</span> Keep
            maintaining your personalized recommendations and track your
            improvements over time.
          </p>
        </div>
      </div>
    </div>
  );
}
