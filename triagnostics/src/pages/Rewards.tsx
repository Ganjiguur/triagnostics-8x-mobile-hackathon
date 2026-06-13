import { useMemo } from "react";
import { useQuizStore } from "../store/quizStore";
import { rewardItems } from "../data/index";

export function Rewards() {
  const tokenBalance = useQuizStore((state) => state.tokenBalance);
  const redeemedRewards = useQuizStore((state) => state.redeemedRewards);
  const redeemReward = useQuizStore((state) => state.redeemReward);

  const canRedeem = useMemo(
    () => rewardItems.some((item) => !redeemedRewards.includes(item.id) && item.cost <= tokenBalance),
    [redeemedRewards, tokenBalance]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-teal-700">Rewards</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Token store</h1>
          <p className="text-gray-600 mt-3">Spend demo tokens on sample wellness items.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-3 text-teal-700 font-semibold">
            {tokenBalance} TOK
          </div>
        </div>

        <div className="space-y-4">
          {rewardItems.map((item) => {
            const redeemed = redeemedRewards.includes(item.id);
            return (
              <div key={item.id} className="bg-white p-5 rounded-3xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Cost</p>
                    <p className="font-semibold text-gray-900">{item.cost} TOK</p>
                  </div>
                </div>
                <button
                  onClick={() => redeemReward(item.id, item.cost)}
                  disabled={redeemed || item.cost > tokenBalance}
                  className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
                    redeemed
                      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                      : item.cost <= tokenBalance
                      ? "bg-gradient-to-r from-teal-600 to-pink-600 text-white hover:shadow-lg"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {redeemed ? "Redeemed" : item.cost <= tokenBalance ? "Redeem" : "Need more tokens"}
                </button>
              </div>
            );
          })}
        </div>

        {!canRedeem && (
          <div className="rounded-3xl bg-gray-50 p-5 text-sm text-gray-600">
            Earn more tokens by connecting your health service or finishing the quiz.
          </div>
        )}
      </div>
    </div>
  );
}
