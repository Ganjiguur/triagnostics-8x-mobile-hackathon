import { questions } from "../data/questions";
import { followupQuestions } from "../data/followupQuestions";

export interface QuizAnswers {
  [key: number]: string | number;
}

export interface ScoringResult {
  profileName: string;
  scores: {
    energy: number;
    digestion: number;
    sensitivity: number;
    balance: number;
  };
}

function scoreInput(questionId: number, value: string | number) {
  if (questionId === 1 && typeof value === "string") {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      const age = new Date().getFullYear() - date.getFullYear();
      if (age < 30) return { energy: 1, digestion: 0, sensitivity: 0, balance: 1 };
      if (age < 50) return { energy: 0, digestion: 1, sensitivity: 0, balance: 0 };
      return { energy: -1, digestion: 1, sensitivity: 0, balance: 0 };
    }
  }
  return { energy: 0, digestion: 0, sensitivity: 0, balance: 0 };
}

function clamp(value: number) {
  return Math.max(-5, Math.min(10, value));
}

function refineScores(scores: ScoringResult["scores"], followUpAnswers: QuizAnswers) {
  const refined = { ...scores };

  Object.entries(followUpAnswers).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId, 10);
    const question = followupQuestions.find((q) => q.id === qId);

    if (!question || question.type !== "choice" || typeof answer !== "number" || !question.options) {
      return;
    }

    const option = question.options[answer];
    if (!option) {
      return;
    }

    refined.energy += option.scores.energy;
    refined.digestion += option.scores.digestion;
    refined.sensitivity += option.scores.sensitivity;
    refined.balance += option.scores.balance;
  });

  return {
    energy: clamp(refined.energy),
    digestion: clamp(refined.digestion),
    sensitivity: clamp(refined.sensitivity),
    balance: clamp(refined.balance),
  };
}

export function calculateScores(answers: QuizAnswers, followUpAnswers?: QuizAnswers): ScoringResult {
  const scores = {
    energy: 0,
    digestion: 0,
    sensitivity: 0,
    balance: 0,
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId, 10);
    const question = questions.find((q) => q.id === qId);

    if (!question) {
      return;
    }

    if (question.type === "choice" && typeof answer === "number" && question.options) {
      const option = question.options[answer];
      if (option) {
        scores.energy += option.scores.energy;
        scores.digestion += option.scores.digestion;
        scores.sensitivity += option.scores.sensitivity;
        scores.balance += option.scores.balance;
      }
      return;
    }

    const inputScore = scoreInput(qId, answer);
    scores.energy += inputScore.energy;
    scores.digestion += inputScore.digestion;
    scores.sensitivity += inputScore.sensitivity;
    scores.balance += inputScore.balance;
  });

  const finalScores = followUpAnswers ? refineScores(scores, followUpAnswers) : scores;

  const profileMap = {
    energy: "The Processor",
    digestion: "The Balancer",
    sensitivity: "The Sensitive Gut",
    balance: "The Fermenter",
  } as const;

  const bestKey = (Object.keys(finalScores) as Array<keyof typeof finalScores>).reduce(
    (best, key) => (finalScores[key] > finalScores[best] ? key : best),
    "digestion"
  );

  return {
    profileName: profileMap[bestKey],
    scores: finalScores,
  };
}
