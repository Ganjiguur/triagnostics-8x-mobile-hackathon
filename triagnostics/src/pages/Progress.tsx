import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { ProgressCharts } from "../components/ProgressCharts";
import { ChevronLeft } from "lucide-react";

export function Progress() {
  const navigate = useNavigate();
  const result = useQuizStore((state) => state.result);
  const simulatedWeek = useQuizStore((state) => state.simulatedWeek);
  const followUpDone = useQuizStore((state) => state.followUpDone);
  const profileHistory = useQuizStore((state) => state.profileHistory);

  if (!result) {
    navigate("/quiz");
    return null;
  }

  const previous = useMemo(
    () => (profileHistory.length > 0 ? profileHistory[profileHistory.length - 1].result : null),
    [profileHistory]
  );

  const comparisonText = previous
    ? previous.profileName === result.profileName
      ? "Profile stable, scores improved"
      : `Previous: ${previous.profileName} · Now: ${result.profileName}`
    : "Your follow-up summary will appear here.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto space-y-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-4"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Week {simulatedWeek} of 7</h2>
          {simulatedWeek < 7 ? (
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Your follow-up unlocks at week 7.</p>
              <button
                className="w-full px-4 py-3 rounded-2xl bg-gray-100 text-gray-500 font-semibold cursor-not-allowed"
                disabled
              >
                Start follow-up
              </button>
            </div>
          ) : followUpDone ? (
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Follow-up complete</p>
              <p className="text-sm text-gray-700">{comparisonText}</p>
            </div>
          ) : (
            <button
              onClick={() => navigate("/followup")}
              className="w-full px-4 py-3 rounded-2xl bg-teal-600 text-white font-semibold"
            >
              Start follow-up
            </button>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">Your Progress</h1>
          <p className="text-gray-600 mt-2">
            Tracking your wellness journey since the first result.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <ProgressCharts />
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-2xl">
          <p className="text-sm text-green-900">
            Keep the routine simple and use the follow-up to refine your profile.
          </p>
        </div>
      </div>
    </div>
  );
}
