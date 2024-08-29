import './globals.css'
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import ClientWrapper from './ClientWrapper';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DynamicContextProvider
          settings={{
            environmentId: "YOUR_ENVIRONMENT_ID",
            walletConnectors: [EthereumWalletConnectors],
          }}
        >
          <ClientWrapper>{children}</ClientWrapper>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
