import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import seed from "../data/seed";

export default function AdminDashboard({ user, onLogout }) {
  const totalEmployees = seed.employees.length;
  const pendingLeaves = seed.leaves.filter((l) => l.status === "pending").length;
  const totalPayslips = seed.payslips.length;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="admin" onLogout={onLogout} />
      <div className="flex flex-col flex-1">
        <Header user={user} />
        <div className="p-6 grid grid-cols-3 gap-4">
          <DashboardCard title="Total Employees" value={totalEmployees} />
          <DashboardCard title="Pending Leaves" value={pendingLeaves} />
          <DashboardCard title="Payslips" value={totalPayslips} />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Employee List</h2>
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Department</th>
              </tr>
            </thead>
            <tbody>
              {seed.employees.map((e) => (
                <tr key={e.id} className="border-t">
                  <td className="p-2">{e.id}</td>
                  <td className="p-2">{e.name}</td>
                  <td className="p-2">{e.email}</td>
                  <td className="p-2">{e.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Leave Requests</h2>
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">ID</th>
                <th className="p-2">Employee</th>
                <th className="p-2">Type</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {seed.leaves.map((l) => (
                <tr key={l.id} className="border-t">
                  <td className="p-2">{l.id}</td>
                  <td className="p-2">{seed.employees.find(e => e.id === l.employeeId)?.name}</td>
                  <td className="p-2">{l.type}</td>
                  <td className="p-2">{l.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
