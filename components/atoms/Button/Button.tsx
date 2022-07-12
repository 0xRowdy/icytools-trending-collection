import React, { RefObject } from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  secondary?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  value?: string;
};

type Ref =
  | ((instance: HTMLButtonElement | null) => void)
  | RefObject<HTMLButtonElement>
  | null
  | undefined;

export const Button = React.forwardRef((props: ButtonProps, ref: Ref) => {
  const { secondary, children } = props;
  return (
    <button
      {...props}
      ref={ref}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
});
