export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-gray-600 mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
