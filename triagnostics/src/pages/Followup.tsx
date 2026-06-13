import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { QuizQuestion } from "../components/QuizQuestion";
import { followupQuestions } from "../data/followupQuestions";
import { calculateScores } from "../lib/scoring";

export function Followup() {
  const navigate = useNavigate();
  const result = useQuizStore((state) => state.result);
  const answers = useQuizStore((state) => state.answers);
  const followUpAnswers = useQuizStore((state) => state.followUpAnswers);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const setFollowUpAnswer = useQuizStore((state) => state.setFollowUpAnswer);
  const setCurrentQuestion = useQuizStore((state) => state.setCurrentQuestion);
  const setResult = useQuizStore((state) => state.setResult);
  const setFollowUpDone = useQuizStore((state) => state.setFollowUpDone);
  const setAssessmentCount = useQuizStore((state) => state.setAssessmentCount);
  const addProfileHistory = useQuizStore((state) => state.addProfileHistory);
  const simulatedWeek = useQuizStore((state) => state.simulatedWeek);
  const resetFollowUpQuiz = useQuizStore((state) => state.resetFollowUpQuiz);

  useEffect(() => {
    if (!result) {
      navigate("/quiz");
      return;
    }
    resetFollowUpQuiz();
    setCurrentQuestion(1);
  }, [result, navigate, resetFollowUpQuiz, setCurrentQuestion]);

  const handleComplete = () => {
    if (!result) {
      return;
    }

    addProfileHistory(result, simulatedWeek);
    const updated = calculateScores(answers, followUpAnswers);
    setResult(updated);
    setFollowUpDone(true);
    setAssessmentCount(2);
    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Follow-up questionnaire</h1>
          <p className="text-gray-600 mt-2">Six questions on progress since week 0.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <QuizQuestion
            questions={followupQuestions}
            answers={followUpAnswers}
            currentQuestion={currentQuestion}
            setAnswer={setFollowUpAnswer}
            setCurrentQuestion={setCurrentQuestion}
            onComplete={handleComplete}
          />
        </div>
      </div>
    </div>
  );
}
