import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import NavButton from "../navbutton/Navbutton";
import { apiClient } from "../../clients/apiClient";
import { NavLink } from "react-router-dom";
import { Avatar } from "../avatar/Avatar";
import { useAuth } from "../../hooks/useAuth";

const Navbar: React.FC = () => {
  const { me } = useAuth();
  const handleLogout = async () => {
    await apiClient.post("api/logout");
  };

  return (
    <Popover className="relative flex w-full flex-col justify-center py-6 md:min-h-screen md:w-1/12 md:flex-row md:py-12">
      <div className="flex items-center justify-between md:flex-col md:gap-40">
        <div className="ml-6">
          <NavLink to={"/"}>
            <Logo className="mx-auto w-10 fill-magenta md:w-16" />
          </NavLink>
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
          <form onSubmit={handleLogout}>
            <button
              type="submit"
              className="group flex text-lg font-semibold text-magenta transition-all duration-500 hover:text-gray-400"
            >
              <span className="flex flex-shrink-0">
                <i className="fa-solid fa-door-open fa-lg" />
              </span>
            </button>
          </form>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          {/* Shout-out to my tailwindui guys!!! <3 */}
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo className="mx-auto w-10 fill-magenta md:w-16" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-magenta">
                    <span className="sr-only">Close menu</span>
                    <i
                      className="fa-solid fa-xmark fa-xl p-2"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  <Avatar
                    name={me!.name}
                    picture_url={me!.profile_picture_url}
                  />
                  {/*[TODO] Make a component out of this or adapt the NavButton*/}
                  <NavButton icon="fas fa-house" to="/" text="Home" />
                  <NavButton
                    icon="fas fa-gear"
                    to="/settings"
                    text="Settings"
                  />
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
