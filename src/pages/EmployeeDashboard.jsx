import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import seed from "../data/seed";
import { generatePayslip } from "../utils/pdfGenerator";

export default function EmployeeDashboard({ user, onLogout }) {
  const myLeaves = seed.leaves.filter((l) => l.employeeId === user.id);
  const myPayslips = seed.payslips.filter((p) => p.employeeId === user.id);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="employee" onLogout={onLogout} />
      <div className="flex flex-col flex-1">
        <Header user={user} />
        <div className="p-6 grid grid-cols-2 gap-4">
          <DashboardCard title="My Leaves" value={myLeaves.length} />
          <DashboardCard title="My Payslips" value={myPayslips.length} />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">My Leave Requests</h2>
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">ID</th>
                <th className="p-2">Type</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {myLeaves.map((l) => (
                <tr key={l.id} className="border-t">
                  <td className="p-2">{l.id}</td>
                  <td className="p-2">{l.type}</td>
                  <td className="p-2">{l.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">My Payslips</h2>
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Month</th>
                <th className="p-2">Net Pay</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {myPayslips.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-2">{p.month}</td>
                  <td className="p-2">₹{p.net}</td>
                  <td className="p-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => generatePayslip(p, user)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
