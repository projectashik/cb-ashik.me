import classNames from "classnames";
import React from "react";

interface OtherContainerProps {
  condensed?: boolean;
}

const Container = ({
  children,
  condensed,
}: React.HTMLAttributes<HTMLDivElement> & OtherContainerProps) => {
  return (
    <div
      className={classNames(
        condensed ? "lg:max-w-screen-md" : "lg:max-w-screen-lg",
        "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
