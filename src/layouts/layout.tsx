import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex text-gray-800 antialiased">
      <Navbar />
      <main className="flex w-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
