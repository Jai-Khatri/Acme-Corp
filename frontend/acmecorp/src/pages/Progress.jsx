import { useEffect } from 'react';
import useInfoStore from '../stores/useInfoStore';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 1, weight: 100 },
  { day: 2, weight: 85 },
  { day: 3, weight: 70 },
  { day: 4, weight: 55 },
  { day: 5, weight: 40 },
];

export default function Progress() {
  const { info, loading, getUserInfo } = useInfoStore();
  const latest = info[info.length - 1];

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1c1c] to-black text-white p-10">
      <div className="bg-[#121212] rounded-2xl p-10 shadow-lg w-full">
        <h2 className="text-4xl text-center font-bold mb-8">Your Progress</h2>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#fff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {loading ? (
          <p className="text-xl text-center mt-10">Loading progress info...</p>
        ) : latest ? (
          <div className="grid grid-cols-4 gap-6 text-center text-2xl font-semibold mt-10 bg-[#2b2b2b] rounded-xl p-6">
            <div>
              <p>BMI:-</p>
              <p className="text-3xl font-bold mt-1">{latest.bmi}</p>
            </div>
            <div>
              <p>Day:-</p>
              <p className="text-3xl font-bold mt-1">{latest.day}</p>
            </div>
            <div>
              <p>Pills taken:-</p>
              <p className="text-3xl font-bold mt-1">{latest.pillsTaken}</p>
            </div>
            <div>
              <p>Days left:-</p>
              <p className="text-3xl font-bold mt-1">{latest.daysLeft}</p>
            </div>
          </div>
        ) : (
          <p className="text-xl text-center text-red-400 mt-10">
            No progress data available.
          </p>
        )}
      </div>
    </div>
  );
}
