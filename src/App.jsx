import { useState } from "react";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import { mockLogin } from "./lib/mockAuth";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password, role) => {
    const loggedUser = mockLogin(email, password, role);
    if (loggedUser) setUser(loggedUser);
    else alert("Invalid credentials");
  };

  const handleLogout = () => setUser(null);

  if (!user) return <Login onLogin={handleLogin} />;

  return user.role === "admin" ? (
    <AdminDashboard user={user} onLogout={handleLogout} />
  ) : (
    <EmployeeDashboard user={user} onLogout={handleLogout} />
  );
}

export default App;
