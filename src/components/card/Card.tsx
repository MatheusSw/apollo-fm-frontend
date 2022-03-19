interface CardProps {
  title: string;
  value: string | number;
  text: string;
  status: string;
  backgroundColor: string;
  icon: any;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  text,
  status,
  icon,
  backgroundColor,
}) => {
  return (
    <div className={`rounded-2xl ${backgroundColor} px-10 py-6`}>
      <div className="mb-6 flex flex-grow-0 flex-wrap items-center justify-start gap-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white bg-opacity-40">
          <i className={`${icon} fa-xl`} />
        </div>
        <span className="ml-2 text-3xl font-bold">{title}</span>
      </div>
      <div className="mb-2 flex content-end items-end space-x-3">
        <span className="text-6xl font-bold">{value}</span>
        <span className="text-2xl font-medium">{text}</span>
      </div>
      <span className="font-semibold text-pastel-orange">{status}</span>
    </div>
  );
};

export default Card;
