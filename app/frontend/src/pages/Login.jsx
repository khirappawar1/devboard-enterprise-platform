import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">

      <h1>DevBoard</h1>

      <p>Enterprise GitOps Platform</p>

      <Link to="/dashboard">
        <button>Enter Dashboard</button>
      </Link>

    </div>
  );
}