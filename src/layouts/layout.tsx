import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col bg-pastel-amber text-gray-800 antialiased md:flex-row">
      <Navbar />
      <main className="flex w-full py-16 px-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
