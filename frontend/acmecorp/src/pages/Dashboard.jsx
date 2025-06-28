import { useEffect } from 'react';
import useInfoStore from '../stores/useInfoStore';
import moment from 'moment';

export default function Dashboard() {
  const { info, loading, getUserInfo } = useInfoStore();
  const latest = info[info.length - 1];

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1c1c] to-black text-white p-10">
      <div className="bg-[#121212] rounded-2xl p-10 shadow-lg w-full">
        <h1 className="text-5xl font-bold mb-6">Hello, Jai!</h1>
        <p className="text-2xl font-semibold mb-2">Welcome to your dashboard!</p>
        <p className="text-xl mb-10">
          Here are some quick updates to get you started for the day :-
        </p>

        {loading ? (
          <p className="text-xl text-center">Loading...</p>
        ) : latest ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="bg-[#2b2b2b] rounded-xl p-6 shadow-md">
              <p className="text-xl font-semibold">Current Weight:-</p>
              <p className="text-4xl font-bold mt-2">{latest.currentWeight}Kgs</p>
            </div>
            <div className="bg-[#2b2b2b] rounded-xl p-6 shadow-md">
              <p className="text-xl font-semibold">Next Shipment on:-</p>
              <p className="text-4xl font-bold mt-2">
                {moment(latest.nextShipment).format('Do')}
              </p>
              <p className="text-2xl">{moment(latest.nextShipment).format('MMMM')}</p>
            </div>
            <div className="bg-[#2b2b2b] rounded-xl p-6 shadow-md">
              <p className="text-xl font-semibold">Weight Lost:-</p>
              <p className="text-4xl font-bold mt-2">{latest.weightLost}Kgs</p>
            </div>
          </div>
        ) : (
          <p className="text-xl text-center text-red-400">
            No user info available. Please submit your details.
          </p>
        )}
      </div>
    </div>
  );
}
