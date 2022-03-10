import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface NavButtonProps {
  icon: IconProp;
  text: string;
  to: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center rounded-xl py-3 px-12 text-lg font-semibold
        ${
          isActive
            ? "bg-black text-white transition-colors duration-300 hover:bg-magenta"
            : "text-gray-500 transition-colors duration-200 hover:text-gray-400"
        }`
      }
    >
      <span className="mr-5 flex-shrink-0">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="break-all">{text}</span>
    </NavLink>
  );
};

export default NavButton;
