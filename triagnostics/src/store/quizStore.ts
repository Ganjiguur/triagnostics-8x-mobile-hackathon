import { create } from "zustand";

export interface QuizResult {
  profileName: string;
  scores: {
    energy: number;
    digestion: number;
    sensitivity: number;
    balance: number;
  };
}

interface QuizStore {
  answers: { [key: number]: number };
  currentQuestion: number;
  result: QuizResult | null;
  setAnswer: (questionId: number, optionIndex: number) => void;
  setCurrentQuestion: (question: number) => void;
  setResult: (result: QuizResult) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  currentQuestion: 1,
  result: null,
  setAnswer: (questionId: number, optionIndex: number) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: optionIndex,
      },
    })),
  setCurrentQuestion: (question: number) =>
    set({ currentQuestion: question }),
  setResult: (result: QuizResult) => set({ result }),
  resetQuiz: () =>
    set({
      answers: {},
      currentQuestion: 1,
      result: null,
    }),
}));
