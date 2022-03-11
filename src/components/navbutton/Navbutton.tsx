import { NavLink } from "react-router-dom";

interface NavButtonProps {
  icon: string;
  to: string;
  text?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center rounded-full py-3 px-4 text-lg font-semibold transition-colors duration-300
        ${
          isActive && !text
            ? "bg-magenta text-white hover:bg-white hover:text-magenta"
            : "text-magenta hover:text-gray-400 hover:bg-gray-50"
        }`
      }
    >
      <span className="flex-shrink-0">
        <i className={`${icon} fa-lg`} />
        {text && (
          <span className="ml-4 text-gray-600">{text}</span>
        )}
      </span>
    </NavLink>
  );
};

export default NavButton;
