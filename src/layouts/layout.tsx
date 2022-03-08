import Navbar from "../components/navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex min-w-max">{children}</main>
    </div>
  );
};

export default Layout;
