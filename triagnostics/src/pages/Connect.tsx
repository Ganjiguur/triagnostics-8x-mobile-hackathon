import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";
import { useQuizStore } from "../store/quizStore";

export function Connect() {
  const navigate = useNavigate();
  const walletConnected = useQuizStore((state) => state.walletConnected);
  const connectWallet = useQuizStore((state) => state.connectWallet);

  useEffect(() => {
    if (walletConnected) {
      navigate("/quiz");
    }
  }, [walletConnected, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-gray-200 shadow-lg p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-700">Simulated wallet</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">Connect your demo wallet</h1>
        <p className="text-gray-600 mt-3">
          This is a fake wallet flow for the demo. No real accounts are used.
        </p>

        <button
          onClick={connectWallet}
          className="mt-8 inline-flex items-center justify-center w-full rounded-2xl bg-gradient-to-r from-teal-600 to-pink-600 px-6 py-4 text-white font-semibold hover:shadow-lg transition-all gap-3"
        >
          <Wallet size={20} />
          <span>Connect wallet</span>
        </button>

        <div className="mt-6 rounded-3xl bg-teal-50 p-4 text-left text-sm text-gray-700">
          <p className="font-semibold">Demo details</p>
          <p className="mt-2">Your wallet unlocks the quiz. You can earn bonus tokens on the rewards page.</p>
        </div>
      </div>
    </div>
  );
}
