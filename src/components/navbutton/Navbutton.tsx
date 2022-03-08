import { icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { text } from "stream/consumers";

interface NavButtonProps {
  icon: IconProp;
  text: string;
  to: string;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        `flex items-center rounded-xl py-3 px-12 text-lg font-semibold 
        ${
          isActive
            ? "bg-black text-white transition-colors duration-300 hover:bg-magenta"
            : "transition-colors duration-200 text-gray-500 hover:text-gray-400"
        } break-words`
      }
    >
      <span className="mr-5 flex-shrink-0">
        <FontAwesomeIcon icon={icon} />
      </span>
      {text}
    </NavLink>
  );
};

export default NavButton;
