import seed from "../data/seed";

export function mockLogin(email, password, role) {
  if (role === "admin" && email === "admin@espirits.com" && password === "Password@123") {
    return { id: 0, email, role: "admin" };
  }
  const emp = seed.employees.find(
    (e) => e.email === email && e.password === password
  );
  if (emp) return { id: emp.id, email: emp.email, role: "employee" };
  return null;
}
