export interface AnswerOption {
  text: string;
  scores: {
    energy: number;
    digestion: number;
    sensitivity: number;
    balance: number;
  };
}

export interface Question {
  id: number;
  question: string;
  options: AnswerOption[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "How often do you have regular bowel movements?",
    options: [
      {
        text: "1-2 times daily",
        scores: { energy: 2, digestion: 3, sensitivity: 0, balance: 2 },
      },
      {
        text: "Every 2-3 days",
        scores: { energy: 1, digestion: 0, sensitivity: 1, balance: 1 },
      },
      {
        text: "Irregular/unpredictable",
        scores: { energy: 0, digestion: -1, sensitivity: 2, balance: 0 },
      },
    ],
  },
  {
    id: 2,
    question: "What's your typical energy level during the day?",
    options: [
      {
        text: "Consistently high",
        scores: { energy: 3, digestion: 1, sensitivity: 0, balance: 2 },
      },
      {
        text: "Moderate with dips",
        scores: { energy: 1, digestion: 0, sensitivity: 1, balance: 1 },
      },
      {
        text: "Low/fatigued",
        scores: { energy: -1, digestion: -1, sensitivity: 1, balance: -1 },
      },
    ],
  },
  {
    id: 3,
    question: "Do you experience bloating or gas?",
    options: [
      {
        text: "Rarely",
        scores: { energy: 2, digestion: 2, sensitivity: 0, balance: 2 },
      },
      {
        text: "Occasionally",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "Frequently",
        scores: { energy: -1, digestion: -2, sensitivity: 2, balance: -1 },
      },
      {
        text: "Constantly",
        scores: { energy: -2, digestion: -3, sensitivity: 3, balance: -2 },
      },
    ],
  },
  {
    id: 4,
    question: "What best describes your diet?",
    options: [
      {
        text: "Whole foods, balanced",
        scores: { energy: 2, digestion: 2, sensitivity: 0, balance: 3 },
      },
      {
        text: "Mixed with some processed",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "High in fermented foods",
        scores: { energy: 1, digestion: 1, sensitivity: -1, balance: 2 },
      },
      {
        text: "Processed/fast foods",
        scores: { energy: -1, digestion: -1, sensitivity: 2, balance: -2 },
      },
    ],
  },
  {
    id: 5,
    question: "How would you rate your stress levels?",
    options: [
      {
        text: "Low/well-managed",
        scores: { energy: 2, digestion: 1, sensitivity: 0, balance: 2 },
      },
      {
        text: "Moderate",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "High/frequently stressed",
        scores: { energy: -1, digestion: -1, sensitivity: 2, balance: -1 },
      },
    ],
  },
  {
    id: 6,
    question: "How's your sleep quality?",
    options: [
      {
        text: "7-9 hours, restful",
        scores: { energy: 3, digestion: 1, sensitivity: 0, balance: 2 },
      },
      {
        text: "6-7 hours, okay",
        scores: { energy: 1, digestion: 0, sensitivity: 1, balance: 1 },
      },
      {
        text: "Less than 6 hours",
        scores: { energy: -2, digestion: -1, sensitivity: 1, balance: -1 },
      },
    ],
  },
  {
    id: 7,
    question: "Do you notice food sensitivities or intolerances?",
    options: [
      {
        text: "None that I'm aware of",
        scores: { energy: 2, digestion: 2, sensitivity: -2, balance: 2 },
      },
      {
        text: "Mild (occasional discomfort)",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "Moderate (affects diet)",
        scores: { energy: -1, digestion: -1, sensitivity: 2, balance: -1 },
      },
      {
        text: "Severe (many restrictions)",
        scores: { energy: -2, digestion: -2, sensitivity: 3, balance: -2 },
      },
    ],
  },
  {
    id: 8,
    question: "How often do you exercise?",
    options: [
      {
        text: "4+ times per week",
        scores: { energy: 3, digestion: 1, sensitivity: 0, balance: 2 },
      },
      {
        text: "2-3 times per week",
        scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "Once a week",
        scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 },
      },
      {
        text: "Rarely/never",
        scores: { energy: -2, digestion: -1, sensitivity: 1, balance: -2 },
      },
    ],
  },
];
