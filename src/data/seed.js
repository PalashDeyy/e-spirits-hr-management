const employees = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: Employee ,
  email: employee@espirits.com,
  password: "Password@123",
  department: i % 2 === 0 ? "Engineering" : "HR",
  role: "employee",
}));

const leaves = [
  { id: 1, employeeId: 1, type: "CL", status: "approved" },
  { id: 2, employeeId: 2, type: "SL", status: "pending" },
  { id: 3, employeeId: 3, type: "CL", status: "rejected" },
];

const payslips = employees.map((emp, idx) => ({
  id: idx + 1,
  employeeId: emp.id,
  month: "September 2023",
  basic: 12800,
  hra: 5400,
  allowance: 8500,
  net: 26700,
}));

export default { employees, leaves, payslips };
