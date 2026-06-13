import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { QuizQuestion } from "../components/QuizQuestion";
import { questions } from "../data/questions";

export function Quiz() {
  const navigate = useNavigate();
  const answers = useQuizStore((state) => state.answers);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const setCurrentQuestion = useQuizStore((state) => state.setCurrentQuestion);

  const handleQuizComplete = () => {
    navigate("/analyzing");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gut health assessment</h1>
          <p className="text-gray-600 mt-2">One short quiz.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <QuizQuestion
            questions={questions}
            answers={answers}
            currentQuestion={currentQuestion}
            setAnswer={setAnswer}
            setCurrentQuestion={setCurrentQuestion}
            onComplete={handleQuizComplete}
          />
        </div>
      </div>
    </div>
  );
}
