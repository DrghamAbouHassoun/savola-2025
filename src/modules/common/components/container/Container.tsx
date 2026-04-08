import React from "react";
import { useLocale } from "../../hooks/useLocale";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ children, ...props }: ContainerProps) => {
  const { lang } = useLocale();
  return (
    <div
      {...props}
      className={`container mx-auto w-full max-w-7xl ${lang === "ar" ? "px-4 lg:pr-16 xl:pr-4" : "px-4 lg:pl-16 xl:pl-4"} ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Container;
