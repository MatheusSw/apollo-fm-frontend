/*There's gotta be a better name for this */
import React from "react";
import clsx from "clsx";

export enum StripTypes {
  error = "bg-red-500",
  warning = "bg-yellow-400",
  info = "bg-blue-400",
  success = "bg-green-400",
}

interface StripProps {
  text: JSX.Element | string;
  type: StripTypes;
}

export const Strip: React.FC<StripProps> = ({ text, type, ...rest }) => {
  return (
    <div className={clsx("mb-4 rounded-md p-2 font-medium", type)} {...rest}>
      {text}
    </div>
  );
};
