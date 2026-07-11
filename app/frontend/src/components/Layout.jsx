import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="container">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}