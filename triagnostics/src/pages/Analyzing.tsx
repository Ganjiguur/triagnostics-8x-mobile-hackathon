import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";
import { calculateScores } from "../lib/scoring";

export function Analyzing() {
  const navigate = useNavigate();
  const answers = useQuizStore((state) => state.answers);
  const result = useQuizStore((state) => state.result);
  const setResult = useQuizStore((state) => state.setResult);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!result) {
      const calculated = calculateScores(answers);
      setResult(calculated);
    }

    const timer = window.setTimeout(() => {
      setReady(true);
    }, 1600);

    return () => window.clearTimeout(timer);
  }, [answers, result, setResult]);

  useEffect(() => {
    if (ready) {
      navigate("/results");
    }
  }, [ready, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 shadow-lg p-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-700">Analyzing</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">Reviewing your responses</h1>
        <p className="text-gray-600 mt-4">
          We are simulating profile analysis based on your answers. This will only take a moment.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-teal-600 to-pink-600 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
