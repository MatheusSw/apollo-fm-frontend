import { NavLink } from "react-router-dom";

interface NavButtonProps {
  icon: string;
  to: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center rounded-full py-3 px-3 text-lg font-semibold transition-colors duration-300
        ${
          isActive
            ? "bg-magenta text-white hover:bg-white hover:text-magenta"
            : "text-magenta hover:text-gray-400"
        }`
      }
    >
      <span className="flex-shrink-0">
        <i className={`${icon} fa-lg`} />
      </span>
    </NavLink>
  );
};

export default NavButton;
