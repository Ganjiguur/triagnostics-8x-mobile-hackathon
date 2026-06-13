import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  digestiveComfortData,
  energyLevelsData,
  bloatingFrequencyData,
} from "../data/index";

export function ProgressCharts() {
  const stats = [
    { label: "Improved digestion", value: "70%" },
    { label: "Sustained energy increase", value: "60%" },
    { label: "Reduced bloating", value: "52%" },
  ];

  return (
    <div className="space-y-8">
      {/* Charts */}
      <div className="space-y-6">
        {/* Digestive Comfort Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Digestive Comfort
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={digestiveComfortData}>
              <defs>
                <linearGradient id="colorDigestion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0B7A8C" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0B7A8C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="week"
                tick={{ fontSize: 12 }}
                stroke="#9ca3af"
              />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#0B7A8C"
                fillOpacity={1}
                fill="url(#colorDigestion)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Levels Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Energy Levels
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={energyLevelsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="week"
                tick={{ fontSize: 12 }}
                stroke="#9ca3af"
              />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bloating Frequency Chart (inverted) */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Bloating Frequency (Lower is Better)
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={bloatingFrequencyData}>
              <defs>
                <linearGradient id="colorBloating" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EC4899" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="week"
                tick={{ fontSize: 12 }}
                stroke="#9ca3af"
              />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#EC4899"
                fillOpacity={1}
                fill="url(#colorBloating)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stats Pills */}
      <div className="bg-gradient-to-r from-teal-50 to-pink-50 p-6 rounded-2xl border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          Your Progress
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white px-4 py-3 rounded-full shadow-sm text-center border border-gray-100"
            >
              <div className="text-lg font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
