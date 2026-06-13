import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { bonusQuestions } from "../data/index";

export function Bonus() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const currentBonusQuestion = useQuizStore((state) => state.currentBonusQuestion);
  const bonusAnswers = useQuizStore((state) => state.bonusAnswers);
  const setBonusAnswer = useQuizStore((state) => state.setBonusAnswer);
  const setCurrentBonusQuestion = useQuizStore((state) => state.setCurrentBonusQuestion);

  const question = bonusQuestions[currentBonusQuestion - 1];
  const answer = bonusAnswers[question.id];
  const selectedOptionIndex = typeof answer === "number" ? answer : undefined;
  const isLastQuestion = currentBonusQuestion === bonusQuestions.length;

  const handleNext = () => {
    if (isLastQuestion) {
      setCompleted(true);
      setTimeout(() => navigate("/rewards"), 600);
    } else {
      setCurrentBonusQuestion(currentBonusQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentBonusQuestion > 1) {
      setCurrentBonusQuestion(currentBonusQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-700">Bonus quiz</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">Extra wellness questions</h1>
        <p className="text-gray-600 mt-3">Build more demo context and unlock rewards faster.</p>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">Question {currentBonusQuestion} of {bonusQuestions.length}</p>
            <h2 className="text-xl font-semibold text-gray-900">{question.question}</h2>
          </div>

          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => setBonusAnswer(question.id, index)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                  selectedOptionIndex === index
                    ? "border-teal-600 bg-teal-50 text-teal-900"
                    : "border-gray-200 bg-white text-gray-900 hover:border-teal-300 hover:bg-teal-50"
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleBack}
              disabled={currentBonusQuestion === 1}
              className="flex-1 rounded-2xl border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={selectedOptionIndex === undefined}
              className="flex-1 rounded-2xl bg-gradient-to-r from-teal-600 to-pink-600 px-4 py-3 text-sm font-semibold text-white hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLastQuestion ? "Finish" : "Next"}
            </button>
          </div>

          {completed && (
            <div className="rounded-3xl bg-teal-50 p-4 text-sm text-teal-900">
              Nice work! Redirecting to rewards...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
