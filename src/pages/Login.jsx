import { useState } from "react";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password, role);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">E-Spirits Login</h2>

        <div className="flex justify-center mb-4">
          <button
            className={px-4 py-2 rounded-l-lg }
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
          <button
            className={px-4 py-2 rounded-r-lg }
            onClick={() => setRole("employee")}
          >
            Employee
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
