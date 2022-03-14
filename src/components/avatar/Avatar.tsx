import React from "react";

interface AvatarProps {
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="mt-6 flex items-center md:mt-0">
      <div className="h-16 w-16 overflow-hidden rounded-full">
        <img
          /*[TODO] Get it from storage, once auth is complete*/
          src={`${process.env.PUBLIC_URL}/portrait.jpg`}
          alt="Your twitter profile"
          className="h-full w-full object-cover"
        />
      </div>
      <span className="ml-4 text-2xl font-bold">{name}</span>
    </div>
  );
};
