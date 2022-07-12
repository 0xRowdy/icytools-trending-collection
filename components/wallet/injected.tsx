import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  // Basic chains for connection,
  supportedChainIds: [1, 3, 4, 5, 42, 1337],
});
