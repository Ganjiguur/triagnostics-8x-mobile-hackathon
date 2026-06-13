import type { Question } from "./questions";

export const followupQuestions: Question[] = [
  {
    id: 201,
    category: "Follow-up",
    question: "Since starting, your digestion is:",
    type: "choice",
    options: [
      { text: "Better", scores: { energy: 1, digestion: 2, sensitivity: 0, balance: 1 } },
      { text: "Same", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "Worse", scores: { energy: -1, digestion: -2, sensitivity: 1, balance: -1 } },
    ],
  },
  {
    id: 202,
    category: "Follow-up",
    question: "Bloating now:",
    type: "choice",
    options: [
      { text: "Rare", scores: { energy: 1, digestion: 2, sensitivity: 0, balance: 1 } },
      { text: "Occasional", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "Frequent", scores: { energy: -1, digestion: -2, sensitivity: 1, balance: -1 } },
    ],
  },
  {
    id: 203,
    category: "Follow-up",
    question: "Energy now:",
    type: "choice",
    options: [
      { text: "Steadier", scores: { energy: 2, digestion: 0, sensitivity: 0, balance: 1 } },
      { text: "Same", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "Lower", scores: { energy: -2, digestion: 0, sensitivity: 1, balance: -1 } },
    ],
  },
  {
    id: 204,
    category: "Follow-up",
    question: "Did you follow the starter routine?",
    type: "choice",
    options: [
      { text: "Mostly", scores: { energy: 0, digestion: 1, sensitivity: 0, balance: 2 } },
      { text: "Sometimes", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "Rarely", scores: { energy: -1, digestion: -1, sensitivity: 1, balance: -1 } },
    ],
  },
  {
    id: 205,
    category: "Follow-up",
    question: "Did you take the postbiotic sample?",
    type: "choice",
    options: [
      { text: "Daily", scores: { energy: 1, digestion: 1, sensitivity: 0, balance: 2 } },
      { text: "Sometimes", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "No", scores: { energy: -1, digestion: -1, sensitivity: 1, balance: -1 } },
    ],
  },
  {
    id: 206,
    category: "Follow-up",
    question: "Sleep now:",
    type: "choice",
    options: [
      { text: "Better", scores: { energy: 1, digestion: 0, sensitivity: 0, balance: 1 } },
      { text: "Same", scores: { energy: 0, digestion: 0, sensitivity: 0, balance: 0 } },
      { text: "Worse", scores: { energy: -2, digestion: 0, sensitivity: 0, balance: -1 } },
    ],
  },
];
