import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import seed from "../data/seed";

export default function AdminDashboard({ user, onLogout }) {
  const totalEmployees = seed.employees.length;
  const pendingLeaves = seed.leaves.filter((l) => l.status === "pending").length;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="admin" onLogout={onLogout} />
      <div className="flex flex-col flex-1">
        <Header user={user} />
        <div className="p-6 grid grid-cols-3 gap-4">
          <DashboardCard title="Total Employees" value={totalEmployees} />
          <DashboardCard title="Pending Leaves" value={pendingLeaves} />
          <DashboardCard title="Payroll (Mock)" value="₹10,00,000" />
        </div>
      </div>
    </div>
  );
}
