import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heart, ArrowLeft, RefreshCw } from "lucide-react";



const ErrorStyle = {
  mainDiv: `min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4`,
  animationDiv: `"mb-8 relative`,
  heartIcon: `text-pink-500 mx-auto animate-pulse`,
  refreshIcon: `text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin`,
  h1: `text-4xl font-bold text-gray-900 mb-4`,
  p: `text-lg text-gray-600 mb-8`,
  actionButton: `inline-flex items-center justify-center w-full px-6 py-3 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors`,
  tryAgain: `inline-flex items-center justify-center w-full px-6 py-3 text-pink-500 border-2 border-pink-500 rounded-lg hover:bg-pink-50 transition-colors`,
  arrowLeft: `w-5 h-5 mr-2`,
  psmall: `text-sm text-gray-500 mb-8`,
}


const Error = () => {
  const err = useRouteError();
  
  return (
    <div className={ErrorStyle.mainDiv}>
      <div className="text-center max-w-md">
        {/* Animated heart icon */}
        <div className={ErrorStyle.animationDiv}>
          <Heart 
            size={120} 
            className={ErrorStyle.heartIcon} 
            fill="currentColor"
          />
          <RefreshCw 
            size={32} 
            className={ErrorStyle.refreshIcon}
          />
        </div>

        <h1 className={ErrorStyle.h1}>
          Taking a Short Break
        </h1>
        
        <p className={ErrorStyle.p}>
          Just like in relationships, sometimes we need a moment to fix things. 
          We'll be back to helping you find love very soon!
        </p>

        {/* Error details */}
        {err && (
          <p className={ErrorStyle.psmall}>
            Error details: {err.message || "Unknown error"}
          </p>
        )}

        <div className="space-y-4">
          <Link
            to="/"
            className={ErrorStyle.actionButton}
          >
            <ArrowLeft className={ErrorStyle.arrowLeft} />
            Return to Homepage
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className={ErrorStyle.tryAgain}
          >
            <RefreshCw className={ErrorStyle.arrowLeft} />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;