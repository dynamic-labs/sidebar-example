'use client';

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function ClientWrapper({ children }) {
  const { user, setShowAuthFlow } = useDynamicContext();

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

  return (
    <>
      <style>{customCSS}</style>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5BWordmark-primary%5D%20(2)-jSotf5LNO2iZLyHlkThBAGhwR2fVCb.svg"
          alt="Dynamic Logo"
          className="h-8 w-auto mb-6"
        />
        {user ? (
          <div className="p-8 bg-white rounded-lg shadow-lg border border-blue-200">
            <DynamicWidget />
          </div>
        ) : (
          <button 
            onClick={() => setShowAuthFlow(true)}
            className="p-4 bg-white rounded-lg shadow-lg border border-blue-200 hover:bg-blue-50 text-blue-500 font-semibold transition duration-300 ease-in-out"
          >
            Dynamic sidebar widget
          </button>
        )}
      </div>
      {children}
    </>
  );
}
