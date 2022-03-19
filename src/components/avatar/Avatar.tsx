import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useLoading } from "../../hooks/useLoading";

interface AvatarProps {
  name: string;
  picture_url: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name, picture_url }) => {
  const loading = useLoading();

  return (
    <div className="mt-6 flex items-center md:mt-0">
      {loading ? (
        <Skeleton className="mr-4 text-2xl font-bold" width={150} />
      ) : (
        <span className="mr-4 text-2xl font-bold">{name}</span>
      )}

      <div className="h-16 w-16 overflow-hidden rounded-full">
        {loading ? (
          <Skeleton circle className="h-full w-full object-cover" />
        ) : (
          <img
            src={picture_url}
            alt="Your twitter profile"
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
};
