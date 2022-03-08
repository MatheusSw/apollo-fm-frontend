import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardProps {
  title: string;
  value: string | number;
  text: string;
  status: string;
  backgroundColor: string;
  primary: boolean;
  icon: any;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  text,
  status,
  primary,
  icon,
}) => {
  return (
    <>
      <div className="font-bold">
        something
        <FontAwesomeIcon icon={icon} />
      </div>
    </>
  );
};

export default Card;
