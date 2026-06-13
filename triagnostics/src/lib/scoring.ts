import { questions } from "../data/questions";

export interface QuizAnswers {
  [key: number]: number; // question id -> option index
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

export function calculateScores(answers: QuizAnswers): ScoringResult {
  const scores = {
    energy: 0,
    digestion: 0,
    sensitivity: 0,
    balance: 0,
  };

  // Sum up scores from all answers
  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const qId = parseInt(questionId);
    const question = questions.find((q: any) => q.id === qId);

    if (question && question.options[optionIndex as number]) {
      const option = question.options[optionIndex as number];
      scores.energy += option.scores.energy;
      scores.digestion += option.scores.digestion;
      scores.sensitivity += option.scores.sensitivity;
      scores.balance += option.scores.balance;
    }
  });

  // Determine profile based on highest score
  const profileMap = {
    energy: "The Processor",
    digestion: "The Balancer",
    sensitivity: "The Sensitive Gut",
    balance: "The Fermenter",
  };

  // Find the dimension with the highest score
  let maxScore = Math.max(
    scores.energy,
    scores.digestion,
    scores.sensitivity,
    scores.balance
  );

  // If max score is negative or zero, default to Balancer
  if (maxScore <= 0) {
    return {
      profileName: "The Balancer",
      scores,
    };
  }

  const highestDimension = Object.entries(scores).reduce((prev, current) =>
    current[1] > prev[1] ? current : prev
  )[0] as keyof typeof profileMap;

  return {
    profileName: profileMap[highestDimension],
    scores,
  };
}
