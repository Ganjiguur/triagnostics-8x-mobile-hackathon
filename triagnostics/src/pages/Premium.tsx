import { useQuizStore } from "../store/quizStore";
import { premiumPlans } from "../data/index";

export function Premium() {
  const isPremium = useQuizStore((state) => state.isPremium);
  const setPremium = useQuizStore((state) => state.setPremium);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-teal-700">Premium</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Upgrade for more detail</h1>
          <p className="text-gray-600 mt-3">Unlock extra insight, token bonus rates, and long-term tracking.</p>
        </div>

        <div className="space-y-4">
          {premiumPlans.map((plan) => (
            <div key={plan.id} className="bg-white p-5 rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{plan.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{plan.features.join(" • ")}</p>
                </div>
                <p className="text-lg font-semibold text-gray-900">{plan.price}</p>
              </div>
              {plan.id === 2 && (
                <button
                  onClick={() => setPremium(true)}
                  disabled={isPremium}
                  className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    isPremium
                      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-teal-600 to-pink-600 text-white hover:shadow-lg"
                  }`}
                >
                  {isPremium ? "Active" : "Upgrade"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
