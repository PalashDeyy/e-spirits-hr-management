export default function Sidebar({ role, onLogout }) {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-4 font-bold text-xl border-b">E-Spirits</div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>Dashboard</li>
          {role === "admin" && (
            <>
              <li>Employees</li>
              <li>Leave Requests</li>
              <li>Payslips</li>
            </>
          )}
          {role === "employee" && (
            <>
              <li>My Leaves</li>
              <li>My Payslips</li>
            </>
          )}
        </ul>
      </nav>
      <button
        className="bg-red-500 text-white py-2 m-4 rounded"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
