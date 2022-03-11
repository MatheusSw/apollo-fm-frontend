import { ReactComponent as Logo } from "../../logo.svg";
import NavButton from "../navbutton/Navbutton";

const Navbar: React.FC = () => {
  return (
    <div className="min-h-screen w-1/12 flex-shrink-0 flex-grow-0 flex-col space-y-40 py-14 md:flex">
      <Logo className="mx-auto w-16 fill-magenta" />
      <nav className="flex max-w-xs flex-grow flex-col flex-wrap items-center space-y-10">
        <NavButton icon="fas fa-house" to="/" />
        <NavButton icon="fas fa-gear" to="/settings" />
      </nav>
      <div className="flex flex-1 flex-col flex-nowrap items-center justify-end">
        <a
          href="logout"
          className="group flex text-lg font-semibold text-magenta transition-all duration-500 hover:text-gray-400"
        >
          <span className="flex flex-shrink-0">
            <i className="fa-solid fa-door-open fa-lg" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
