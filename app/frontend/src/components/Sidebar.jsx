import {
  Dashboard,
  Cloud,
  Storage,
  MonitorHeart,
  Settings
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const menu = [
  { title: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { title: "Deployments", icon: <Cloud />, path: "/deployments" },
  { title: "Pods", icon: <Storage />, path: "/pods" },
  { title: "Monitoring", icon: <MonitorHeart />, path: "/monitoring" },
  { title: "Settings", icon: <Settings />, path: "/settings" }
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>DevBoard</h2>

      {menu.map((item) => (
        <Link key={item.title} to={item.path} className="menu-item">
          {item.icon}
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}