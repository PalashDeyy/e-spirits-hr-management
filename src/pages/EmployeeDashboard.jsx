import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import seed from "../data/seed";

export default function EmployeeDashboard({ user, onLogout }) {
  const myLeaves = seed.leaves.filter((l) => l.employeeId === user.id);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar role="employee" onLogout={onLogout} />
      <div className="flex flex-col flex-1">
        <Header user={user} />
        <div className="p-6 grid grid-cols-2 gap-4">
          <DashboardCard title="My Leaves" value={myLeaves.length} />
          <DashboardCard title="Payslips" value="3 Available" />
        </div>
      </div>
    </div>
  );
}
