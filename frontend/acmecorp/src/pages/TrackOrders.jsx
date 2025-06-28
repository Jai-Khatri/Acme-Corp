export default function TrackOrders() {
  const orders = [
    {
      name: 'GRE-37',
      date: '15/08/2025',
      dosage: '3 Daily',
      status: 'Shipped',
    },
    {
      name: 'GRE-29',
      date: '15/10/2025',
      dosage: '2 Daily',
      status: '-',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c1c1c] to-black text-white p-10">
      <div className="bg-[#121212] rounded-2xl p-10 shadow-lg w-full">
        <h2 className="text-4xl text-center font-bold mb-10">Track Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-lg text-left border border-white border-collapse">
            <thead>
              <tr className="bg-[#2b2b2b] text-white">
                <th className="border border-white px-6 py-4">Name</th>
                <th className="border border-white px-6 py-4">Expected Delivery Date</th>
                <th className="border border-white px-6 py-4">Dosage</th>
                <th className="border border-white px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx}>
                  <td className="border border-white px-6 py-4">{order.name}</td>
                  <td className="border border-white px-6 py-4">{order.date}</td>
                  <td className="border border-white px-6 py-4">{order.dosage}</td>
                  <td className="border border-white px-6 py-4">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
