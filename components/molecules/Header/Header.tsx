import { LinkProps } from "next/dist/client/link";
import React, { RefObject } from "react";
import useMetaMask from "../../../hooks/useMetaMask";

import { Button } from "../../atoms/Button/Button";

export type HeaderProps = {
  links?: LinkProps[];
};

type Ref =
  | ((instance: HTMLButtonElement | null) => void)
  | RefObject<HTMLButtonElement>
  | null
  | undefined;

export const Header = (props: HeaderProps) => {
  const { connect, disconnect, isActive, account } = useMetaMask();
  return (
    <div className="lg:flex lg:items-center lg:justify-between p-4">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Icy Tools Trending Collection
        </h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700">
          {isActive ? (
            <span>Connected with: {account}</span>
          ) : (
            <span>Not connected</span>
          )}
        </p>
        <span className="sm:ml-3">
          {isActive ? (
            <Button onClick={disconnect} type="button">
              Disconnect
            </Button>
          ) : (
            <Button onClick={connect} type="button">
              Connect to MetaMask
            </Button>
          )}
        </span>
      </div>
    </div>
  );
};
