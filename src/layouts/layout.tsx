import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col text-gray-800 antialiased md:flex-row">
      <Navbar />
      <main className="flex w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
