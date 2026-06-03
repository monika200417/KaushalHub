import { useState } from "react";
import { loginUser } from "../services/authService";
import { toast } from "react-toastify";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(form);
      console.log(data);

      toast.success("Login successful");

      // Save token
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
    } catch (error) {
  console.log(error.response?.data);
  toast.error(error.response?.data?.message || "Login failed");
      } 
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;