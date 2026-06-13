import { Link, useLocation } from "react-router-dom";
import { Home, Wallet } from "lucide-react";
import { useQuizStore } from "../store/quizStore";

export function Navbar() {
  const location = useLocation();
  const result = useQuizStore((state) => state.result);
  const walletConnected = useQuizStore((state) => state.walletConnected);
  const walletAddress = useQuizStore((state) => state.walletAddress);
  const tokenBalance = useQuizStore((state) => state.tokenBalance);

  if (!result && !walletConnected) {
    return null;
  }

  const displayAddress = walletConnected
    ? `${walletAddress.slice(0, 6)}…${walletAddress.slice(-4)}`
    : null;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-teal-700 font-semibold">
            <Home size={20} />
            <span className="hidden sm:inline">TriAgnostics</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              to="/results"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/results"
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Results
            </Link>
            <Link
              to="/science"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/science"
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Science
            </Link>
            <Link
              to="/progress"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/progress"
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Progress
            </Link>
            <Link
              to="/rewards"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/rewards"
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Rewards
            </Link>
            <Link
              to="/premium"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/premium"
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Premium
            </Link>
          </div>
        </div>

        {walletConnected && (
          <div className="mt-3 flex items-center justify-between gap-3 text-sm text-gray-700">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2">
              <Wallet size={16} />
              {displayAddress}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-teal-700">
              {tokenBalance} TOK
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
