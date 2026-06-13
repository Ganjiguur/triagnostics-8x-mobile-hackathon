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

export interface ProfileHistoryItem {
  week: number;
  result: QuizResult;
}

interface QuizStore {
  answers: { [key: number]: string | number };
  followUpAnswers: { [key: number]: string | number };
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
  assessmentCount: number;
  startDate: string;
  simulatedWeek: number;
  followUpDone: boolean;
  starterClaimed: boolean;
  profileHistory: ProfileHistoryItem[];
  setAnswer: (questionId: number, answer: string | number) => void;
  setFollowUpAnswer: (questionId: number, answer: string | number) => void;
  setBonusAnswer: (questionId: number, answer: string | number) => void;
  setCurrentQuestion: (question: number) => void;
  setCurrentBonusQuestion: (question: number) => void;
  setResult: (result: QuizResult) => void;
  resetQuiz: () => void;
  resetFollowUpQuiz: () => void;
  resetBonusQuiz: () => void;
  connectWallet: () => void;
  addTokens: (amount: number) => void;
  setServiceConnected: (service: keyof ConnectedServices) => void;
  setPremium: (value: boolean) => void;
  redeemReward: (id: number, cost: number) => void;
  claimStarter: () => void;
  setSimulatedWeek: (week: number) => void;
  setFollowUpDone: (value: boolean) => void;
  addProfileHistory: (profile: QuizResult, week: number) => void;
  setAssessmentCount: (count: number) => void;
  setStartDate: (date: string) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: {},
  followUpAnswers: {},
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
  assessmentCount: 0,
  startDate: "",
  simulatedWeek: 0,
  followUpDone: false,
  starterClaimed: false,
  profileHistory: [],
  setAnswer: (questionId: number, answer: string | number) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    })),
  setFollowUpAnswer: (questionId: number, answer: string | number) =>
    set((state) => ({
      followUpAnswers: {
        ...state.followUpAnswers,
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
      assessmentCount: 0,
      startDate: "",
      simulatedWeek: 0,
      followUpDone: false,
      starterClaimed: false,
      profileHistory: [],
      followUpAnswers: {},
    }),
  resetFollowUpQuiz: () =>
    set({
      followUpAnswers: {},
      currentQuestion: 1,
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
  claimStarter: () => set({ starterClaimed: true }),
  setSimulatedWeek: (week: number) => set({ simulatedWeek: week }),
  setFollowUpDone: (value: boolean) => set({ followUpDone: value }),
  addProfileHistory: (profile: QuizResult, week: number) =>
    set((state) => ({
      profileHistory: [...state.profileHistory, { week, result: profile }],
    })),
  setAssessmentCount: (count: number) => set({ assessmentCount: count }),
  setStartDate: (date: string) => set({ startDate: date }),
}));
