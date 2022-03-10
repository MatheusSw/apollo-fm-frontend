import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../navbutton/Navbutton";

const Navbar: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-shrink-0 flex-grow-0 flex-col space-y-16 bg-pastel-amber py-14">
      <span className="mx-auto text-3xl font-bold md:text-6xl">Apollo</span>
      <div
        className="flex flex-col flex-wrap items-center"
        id="sidebar-now-playing-container"
      >
        <span className="text-base font-semibold">Now Scrobbling</span>
        <div
          className="m-3 rounded-lg bg-dark-yellow p-3 text-sm font-semibold shadow-sm"
          id="sidebar-now-playing-square"
        >
          Eternal Summer - The Strokes
        </div>
      </div>
      <nav className="flex max-w-xs flex-grow flex-col flex-wrap items-center space-y-6">
        <NavButton icon={faHouse} text="Home" to="/" />
        <NavButton icon={faGear} text="Settings" to="/settings" />
      </nav>
      <div className="flex flex-1 flex-col flex-nowrap items-center justify-end">
        <a
          href="logout"
          className="group flex text-lg font-semibold text-gray-500 transition-all duration-200 hover:text-gray-400"
        >
          <span className="mr-5 flex flex-shrink-0">
            <FontAwesomeIcon icon={faDoorOpen} size="lg" />
          </span>
          Logout
          <span className="ml-3 scale-0 transition-transform duration-500 group-hover:scale-100">
            :(
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
