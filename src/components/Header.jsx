export default function Header({ user }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="font-bold text-xl">E-Spirits HR</div>
      <div>
        {user.role === "admin" ? "Admin Panel" : "Employee Panel"} |{" "}
        {user.email}
      </div>
    </header>
  );
}
