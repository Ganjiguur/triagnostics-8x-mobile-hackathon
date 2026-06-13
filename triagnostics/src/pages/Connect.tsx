import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";

export function Connect() {
  const navigate = useNavigate();
  const walletConnected = useQuizStore((state) => state.walletConnected);
  const connectWallet = useQuizStore((state) => state.connectWallet);
  const appleHealthConnected = useQuizStore((state) => state.connectedServices.appleHealth);
  const setServiceConnected = useQuizStore((state) => state.setServiceConnected);

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
          <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-teal-700">
            <svg viewBox="0 0 32 32" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
              <path fill="#E2761B" d="M16 2c-1.1 0-2 .9-2 2v4h4V4c0-1.1-.9-2-2-2z" />
              <path fill="#F5841F" d="M6 6l4 5 4-3-2-3L6 6z" />
              <path fill="#E2761B" d="M22 6l-4 2 4 4 2-3-2-3z" />
              <path fill="#E2761B" d="M8 16l4-3 4 3-4 4-4-4z" />
              <path fill="#C0AD9E" d="M16 16l4-3 4 3-4 4-4-4z" />
              <path fill="#F5841F" d="M8 24l4-3 4 3-4 4-4-4z" />
              <path fill="#E2761B" d="M24 24l-4-3-4 3 4 4 4-4z" />
            </svg>
          </span>
          <span>Connect wallet</span>
        </button>

        <button
          onClick={() => setServiceConnected("appleHealth")}
          disabled={appleHealthConnected}
          className={`mt-4 inline-flex items-center justify-center w-full rounded-2xl border-2 px-6 py-4 text-sm font-semibold transition-all ${
            appleHealthConnected
              ? "border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
              : "border-teal-600 bg-white text-teal-700 hover:bg-teal-50"
          }`}
        >
          {appleHealthConnected ? "Apple Fitness connected" : "Connect Apple Fitness for +20 TOK"}
        </button>

        <div className="mt-6 rounded-3xl bg-teal-50 p-4 text-left text-sm text-gray-700">
          <p className="font-semibold">Demo details</p>
          <p className="mt-2">Your wallet unlocks the quiz. Connecting Apple Fitness earns bonus demo tokens.</p>
        </div>
      </div>
    </div>
  );
}
