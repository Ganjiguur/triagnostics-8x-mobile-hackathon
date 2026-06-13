import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { calculateScores } from "../lib/scoring";
import { QuizQuestion } from "../components/QuizQuestion";

export function Quiz() {
  const navigate = useNavigate();
  const answers = useQuizStore((state) => state.answers);
  const setResult = useQuizStore((state) => state.setResult);

  const handleQuizComplete = () => {
    // Calculate scores and determine profile
    const result = calculateScores(answers);
    setResult(result);

    // Navigate to results
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Gut Health Assessment
          </h1>
          <p className="text-gray-600 mt-2">
            Let's learn about your digestive wellness
          </p>
        </div>

        {/* Quiz Component */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <QuizQuestion onComplete={handleQuizComplete} />
        </div>
      </div>
    </div>
  );
}
