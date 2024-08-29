'use client';

import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function ClientWrapper({ children }) {
  const { user, setShowAuthFlow } = useDynamicContext();

  

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5BWordmark-primary%5D%20(2)-jSotf5LNO2iZLyHlkThBAGhwR2fVCb.svg"
          alt="Dynamic Logo"
          width={200}
          height={32}
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
