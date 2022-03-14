import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactElement;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <header className="mx-6 flex flex-wrap justify-between">
      <div className="flex flex-col">
        <span className="mb-2 text-4xl font-bold">{title}</span>
        {subtitle && <span className="text-xl font-medium">{subtitle}</span>}
      </div>
      {children}
    </header>
  );
};
