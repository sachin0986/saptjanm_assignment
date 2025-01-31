import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heart, ArrowLeft, RefreshCw } from "lucide-react";

const Error = () => {
  const err = useRouteError();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* Animated heart icon */}
        <div className="mb-8 relative">
          <Heart 
            size={120} 
            className="text-pink-500 mx-auto animate-pulse" 
            fill="currentColor"
          />
          <RefreshCw 
            size={32} 
            className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Taking a Short Break
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Just like in relationships, sometimes we need a moment to fix things. 
          We'll be back to helping you find love very soon!
        </p>

        {/* Error details */}
        {err && (
          <p className="text-sm text-gray-500 mb-8">
            Error details: {err.message || "Unknown error"}
          </p>
        )}

        {/* Action buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Homepage
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center w-full px-6 py-3 text-pink-500 border-2 border-pink-500 rounded-lg hover:bg-pink-50 transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;