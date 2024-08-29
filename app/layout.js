import './globals.css'
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import ClientWrapper from './ClientWrapper';

export default function RootLayout({ children }) {
  const customCSS = `
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    .accordion-item {
      max-height: 100vh !important;
    }

    .modal, .dynamic-widget-modal, .dynamic-widget-card {
      right: 0 !important;
      top: 0 !important;
      transform: none !important;
      height: 100vh !important;
      border-radius: 0 !important;
      left: auto !important;
    }

    .modal-card {
      border-radius: 0 !important;
    }

    .social-redirect-view__container, .wallet-no-access__container, .pending-signature__container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .footer-options-switcher__container {
      border-radius: 0 !important;
      position: absolute !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
    }

    .dynamic-footer, .tos-and-pp__footer {
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
    }

    .tos-and-pp__footer {
      bottom: 30px !important;
    }
  }
`;

  const metadata = {
    title: "Dynamic Sidebar Widget Demo",
    description: "Experience the future of Web3 interactions with Dynamic's sleek Sidebar Widget. Seamlessly integrate wallet functionality into your website.",
    openGraph: {
      title: "Dynamic Sidebar Widget Demo",
      description: "Experience the future of Web3 interactions with Dynamic's sleek Sidebar Widget. Seamlessly integrate wallet functionality into your website.",
      images: [
        {
          url: "https://dynamic.xyz/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Dynamic Sidebar Widget Demo",
        },
      ],
      site_name: "Dynamic Sidebar Widget Demo",
    },
    twitter: {
      card: "summary_large_image",
      title: "Dynamic Sidebar Widget Demo",
      description: "Experience the future of Web3 interactions with Dynamic's sleek Sidebar Widget. Seamlessly integrate wallet functionality into your website.",
      images: ["https://dynamic.xyz/images/og-image.jpg"],
      creator: "@dynamic_xyz",
    },
  };

  export { metadata };

  return (
    <html lang="en">
      <body>
        <DynamicContextProvider
          settings={{
            environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID,
            walletConnectors: [EthereumWalletConnectors],
            cssOverrides: customCSS,
          }}
        >
          <ClientWrapper>{children}</ClientWrapper>
        </DynamicContextProvider>
      </body>
    </html>
  );
}
