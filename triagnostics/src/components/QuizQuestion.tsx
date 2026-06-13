import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuizStore } from "../store/quizStore";
import { questions } from "../data/questions";

interface QuizQuestionProps {
  onComplete: () => void;
}

export function QuizQuestion({ onComplete }: QuizQuestionProps) {
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const answers = useQuizStore((state) => state.answers);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const setCurrentQuestion = useQuizStore((state) => state.setCurrentQuestion);

  const question = questions.find((q) => q.id === currentQuestion);
  const selectedOptionIndex = answers[currentQuestion];

  if (!question) {
    return null;
  }

  const progress = (currentQuestion / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length;

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    setAnswer(currentQuestion, optionIndex);
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-600">
            Question {currentQuestion} of {questions.length}
          </h2>
          <span className="text-xs text-gray-500">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-teal-600 to-pink-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {question.question}
        </h1>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                selectedOptionIndex === index
                  ? "border-teal-600 bg-teal-50 text-teal-900"
                  : "border-gray-200 bg-white text-gray-900 hover:border-teal-300 hover:bg-teal-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option.text}</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedOptionIndex === index
                      ? "border-teal-600 bg-teal-600"
                      : "border-gray-300"
                  }`}
                >
                  {selectedOptionIndex === index && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 pt-6">
        <button
          onClick={handleBack}
          disabled={currentQuestion === 1}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <button
          onClick={handleNext}
          disabled={selectedOptionIndex === undefined}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-pink-600 text-white font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <span className="hidden sm:inline">
            {isLastQuestion ? "Complete" : "Next"}
          </span>
          <span className="sm:hidden">
            {isLastQuestion ? "Done" : "Next"}
          </span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
