import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={`container mx-auto px-4 w-full max-w-7xl ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Container;
