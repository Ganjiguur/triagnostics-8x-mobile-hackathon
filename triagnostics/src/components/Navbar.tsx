import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { useQuizStore } from "../store/quizStore";

export function Navbar() {
  const location = useLocation();
  const result = useQuizStore((state) => state.result);

  // Only show nav if we have a result (user completed quiz)
  if (!result) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold"
          >
            <Home size={20} />
            <span className="hidden sm:inline">TriAgnostics</span>
          </Link>

          <div className="flex gap-2">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
