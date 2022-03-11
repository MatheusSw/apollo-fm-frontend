import { Popover } from "@headlessui/react";
import { ReactComponent as Logo } from "../../logo.svg";
import NavButton from "../navbutton/Navbutton";

const Navbar: React.FC = () => {
  return (
    <Popover className="relative flex w-full flex-col justify-center py-6 md:min-h-screen md:w-1/12 md:flex-row md:py-12">
      <div className="flex items-center justify-between md:flex-col md:gap-40">
        <div className="ml-6">
          <Logo className="mx-auto w-10 fill-magenta md:w-16" />
        </div>
        <div className="mr-6 justify-end md:hidden">
          <Popover.Button>
            <span className="sr-only">Open menu</span>
            <i className="fa-solid fa-bars fa-lg" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group
          as="nav"
          className="hidden flex-grow items-center md:flex md:flex-col md:flex-wrap md:gap-8"
        >
          <NavButton icon="fas fa-house" to="/" />
          <NavButton icon="fas fa-gear" to="/settings" />
        </Popover.Group>

        <div className="hidden md:flex md:flex-col md:items-center md:justify-end">
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
    </Popover>
  );
};

export default Navbar;
