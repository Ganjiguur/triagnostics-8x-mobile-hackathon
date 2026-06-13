import { Question } from "./questions";

export interface ChartDataPoint {
  week: number;
  value: number;
}

export const digestiveComfortData: ChartDataPoint[] = [
  { week: 0, value: 35 },
  { week: 1, value: 40 },
  { week: 2, value: 42 },
  { week: 3, value: 48 },
  { week: 4, value: 55 },
  { week: 5, value: 65 },
  { week: 6, value: 70 },
  { week: 7, value: 75 },
  { week: 8, value: 80 },
];

export const energyLevelsData: ChartDataPoint[] = [
  { week: 0, value: 40 },
  { week: 1, value: 42 },
  { week: 2, value: 45 },
  { week: 3, value: 50 },
  { week: 4, value: 55 },
  { week: 5, value: 62 },
  { week: 6, value: 68 },
  { week: 7, value: 72 },
  { week: 8, value: 75 },
];

export const bloatingFrequencyData: ChartDataPoint[] = [
  { week: 0, value: 80 },
  { week: 1, value: 75 },
  { week: 2, value: 72 },
  { week: 3, value: 68 },
  { week: 4, value: 60 },
  { week: 5, value: 50 },
  { week: 6, value: 40 },
  { week: 7, value: 35 },
  { week: 8, value: 28 },
];

export const scienceSteps = [
  {
    title: "Discovery",
    description: "One short questionnaire.",
    icon: "Search",
  },
  {
    title: "Analysis",
    description: "Match responses to a postbiotic effect map.",
    icon: "BarChart3",
  },
  {
    title: "Prediction",
    description: "Estimate your metabolic fingerprint.",
    icon: "Zap",
  },
  {
    title: "Recommendation",
    description: "Show the best profile and choices.",
    icon: "Target",
  },
];

export const bonusQuestions: Question[] = [
  {
    id: 101,
    category: "Bonus questions",
    question: "Do you eat leafy greens regularly?",
    type: "choice",
    options: [
      { text: "Yes", scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 } },
      { text: "Sometimes", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "Rarely", scores: { energy: -1, digestion: -1, sensitivity: 0, balance: -1 } },
    ],
  },
  {
    id: 102,
    category: "Bonus questions",
    question: "Do you drink at least 2 liters of water a day?",
    type: "choice",
    options: [
      { text: "Yes", scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 } },
      { text: "Sometimes", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "No", scores: { energy: -1, digestion: -1, sensitivity: 0, balance: -1 } },
    ],
  },
  {
    id: 103,
    category: "Bonus questions",
    question: "Do you eat a source of fibre every day?",
    type: "choice",
    options: [
      { text: "Yes", scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 } },
      { text: "Sometimes", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "No", scores: { energy: -1, digestion: -1, sensitivity: 0, balance: -1 } },
    ],
  },
  {
    id: 104,
    category: "Bonus questions",
    question: "Do you feel rested when you wake up?",
    type: "choice",
    options: [
      { text: "Yes", scores: { energy: 2, digestion: 0, sensitivity: 0, balance: 1 } },
      { text: "Some days", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "No", scores: { energy: -2, digestion: -1, sensitivity: 0, balance: -1 } },
    ],
  },
  {
    id: 105,
    category: "Bonus questions",
    question: "Do you include fermented foods in most meals?",
    type: "choice",
    options: [
      { text: "Yes", scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 1 } },
      { text: "Sometimes", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "No", scores: { energy: -1, digestion: -1, sensitivity: 0, balance: -1 } },
    ],
  },
];

export interface RewardItem {
  id: number;
  name: string;
  cost: number;
  description: string;
}

export const rewardItems: RewardItem[] = [
  { id: 1, name: "Postbiotic blend", cost: 30, description: "Sample pack for gut support." },
  { id: 2, name: "Fibre supplement", cost: 25, description: "Daily fibre to support digestion." },
  { id: 3, name: "Starter pack", cost: 50, description: "Core set for early use." },
];

export interface PremiumPlan {
  id: number;
  title: string;
  price: string;
  features: string[];
}

export const premiumPlans: PremiumPlan[] = [
  {
    id: 1,
    title: "Free",
    price: "£0",
    features: ["Assessment", "Profile result", "Basic recommendations"],
  },
  {
    id: 2,
    title: "Plus",
    price: "£6/month",
    features: ["Reassessment tracking", "Bonus token rate", "Detailed reports"],
  },
];
