import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`container mx-auto px-2 sm:px-6 lg:px-8 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
