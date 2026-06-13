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
  category: string;
  question: string;
  type: "choice" | "date" | "text";
  options?: AnswerOption[];
}

export const questions: Question[] = [
  {
    id: 1,
    category: "About your body",
    question: "When were you born?",
    type: "date",
  },
  {
    id: 2,
    category: "About your body",
    question: "Where were you born?",
    type: "text",
  },
  {
    id: 3,
    category: "About your body",
    question: "Biological sex",
    type: "choice",
    options: [
      {
        text: "Female",
        scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "Male",
        scores: { energy: 1, digestion: 0, sensitivity: 0, balance: 1 },
      },
      {
        text: "Prefer not to say",
        scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 },
      },
    ],
  },
  {
    id: 4,
    category: "About your body",
    question: "How would you describe your build?",
    type: "choice",
    options: [
      {
        text: "Slim",
        scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "Average",
        scores: { energy: 0, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "Broad",
        scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 },
      },
    ],
  },
  {
    id: 5,
    category: "Your environment",
    question: "Where do you live now?",
    type: "text",
  },
  {
    id: 6,
    category: "Your environment",
    question: "Climate where you live",
    type: "choice",
    options: [
      {
        text: "Cold",
        scores: { energy: 0, digestion: 1, sensitivity: 0, balance: 0 },
      },
      {
        text: "Temperate",
        scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "Hot",
        scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 },
      },
    ],
  },
  {
    id: 7,
    category: "Your environment",
    question: "How processed is your typical diet?",
    type: "choice",
    options: [
      {
        text: "Mostly fresh",
        scores: { energy: 2, digestion: 2, sensitivity: 0, balance: 2 },
      },
      {
        text: "Mixed",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "Mostly packaged",
        scores: { energy: -1, digestion: -1, sensitivity: 2, balance: -1 },
      },
    ],
  },
  {
    id: 8,
    category: "Your environment",
    question: "How often do you eat fermented foods?",
    type: "choice",
    options: [
      {
        text: "Often",
        scores: { energy: 1, digestion: 2, sensitivity: 0, balance: 1 },
      },
      {
        text: "Sometimes",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "Never",
        scores: { energy: -1, digestion: -1, sensitivity: 1, balance: -1 },
      },
    ],
  },
  {
    id: 9,
    category: "Your habits",
    question: "How often do you have regular bowel movements?",
    type: "choice",
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
        text: "Irregular",
        scores: { energy: 0, digestion: -1, sensitivity: 2, balance: 0 },
      },
    ],
  },
  {
    id: 10,
    category: "Your habits",
    question: "Do you experience bloating or gas?",
    type: "choice",
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
    id: 11,
    category: "Your habits",
    question: "Energy through the day",
    type: "choice",
    options: [
      {
        text: "Steady",
        scores: { energy: 2, digestion: 1, sensitivity: 0, balance: 2 },
      },
      {
        text: "Afternoon dip",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "Often tired",
        scores: { energy: -2, digestion: -1, sensitivity: 1, balance: -1 },
      },
    ],
  },
  {
    id: 12,
    category: "Your habits",
    question: "Sleep quality",
    type: "choice",
    options: [
      {
        text: "Good",
        scores: { energy: 2, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "Average",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "Poor",
        scores: { energy: -2, digestion: -1, sensitivity: 1, balance: -1 },
      },
    ],
  },
  {
    id: 13,
    category: "Your habits",
    question: "Stress level",
    type: "choice",
    options: [
      {
        text: "Low",
        scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "Moderate",
        scores: { energy: 0, digestion: 0, sensitivity: 1, balance: 0 },
      },
      {
        text: "High",
        scores: { energy: -1, digestion: -1, sensitivity: 2, balance: -1 },
      },
    ],
  },
  {
    id: 14,
    category: "Your habits",
    question: "Exercise frequency",
    type: "choice",
    options: [
      {
        text: "4+ times a week",
        scores: { energy: 2, digestion: 1, sensitivity: 0, balance: 1 },
      },
      {
        text: "1-3 times a week",
        scores: { energy: 1, digestion: 0, sensitivity: 0, balance: 1 },
      },
      {
        text: "Rarely",
        scores: { energy: -1, digestion: -1, sensitivity: 1, balance: -1 },
      },
    ],
  },
];
