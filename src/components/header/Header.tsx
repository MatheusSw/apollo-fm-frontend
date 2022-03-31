import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      <div className="flex flex-col">
        <span className="mb-2 text-4xl font-bold">{title}</span>
        {subtitle && <span className="text-xl font-medium">{subtitle}</span>}
      </div>
    </header>
  );
};
