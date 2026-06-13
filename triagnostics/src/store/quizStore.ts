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

export interface ConnectedServices {
  appleHealth: boolean;
  googleFit: boolean;
}

interface QuizStore {
  answers: { [key: number]: string | number };
  bonusAnswers: { [key: number]: string | number };
  currentQuestion: number;
  currentBonusQuestion: number;
  result: QuizResult | null;
  walletConnected: boolean;
  walletAddress: string;
  tokenBalance: number;
  connectedServices: ConnectedServices;
  isPremium: boolean;
  redeemedRewards: number[];
  setAnswer: (questionId: number, answer: string | number) => void;
  setBonusAnswer: (questionId: number, answer: string | number) => void;
  setCurrentQuestion: (question: number) => void;
  setCurrentBonusQuestion: (question: number) => void;
  setResult: (result: QuizResult) => void;
  resetQuiz: () => void;
  resetBonusQuiz: () => void;
  connectWallet: () => void;
  addTokens: (amount: number) => void;
  setServiceConnected: (service: keyof ConnectedServices) => void;
  setPremium: (value: boolean) => void;
  redeemReward: (id: number, cost: number) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  bonusAnswers: {},
  currentQuestion: 1,
  currentBonusQuestion: 1,
  result: null,
  walletConnected: false,
  walletAddress: "",
  tokenBalance: 0,
  connectedServices: {
    appleHealth: false,
    googleFit: false,
  },
  isPremium: false,
  redeemedRewards: [],
  setAnswer: (questionId: number, answer: string | number) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    })),
  setBonusAnswer: (questionId: number, answer: string | number) =>
    set((state) => ({
      bonusAnswers: {
        ...state.bonusAnswers,
        [questionId]: answer,
      },
    })),
  setCurrentQuestion: (question: number) => set({ currentQuestion: question }),
  setCurrentBonusQuestion: (question: number) =>
    set({ currentBonusQuestion: question }),
  setResult: (result: QuizResult) => set({ result }),
  resetQuiz: () =>
    set({
      answers: {},
      currentQuestion: 1,
      result: null,
    }),
  resetBonusQuiz: () =>
    set({
      bonusAnswers: {},
      currentBonusQuestion: 1,
    }),
  connectWallet: () =>
    set({
      walletConnected: true,
      walletAddress: "0x7Fa2...3b9C",
      tokenBalance: 10,
    }),
  addTokens: (amount: number) =>
    set((state) => ({ tokenBalance: state.tokenBalance + amount })),
  setServiceConnected: (service: keyof ConnectedServices) =>
    set((state) => ({
      connectedServices: {
        ...state.connectedServices,
        [service]: true,
      },
      tokenBalance: state.tokenBalance + 20,
    })),
  setPremium: (value: boolean) => set({ isPremium: value }),
  redeemReward: (id: number, cost: number) =>
    set((state) => ({
      tokenBalance: state.tokenBalance - cost,
      redeemedRewards: [...state.redeemedRewards, id],
    })),
}));
