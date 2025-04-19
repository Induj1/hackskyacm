
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen grid-bg flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Shield size={80} className="text-cyber-green/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle size={40} className="text-cyber-red animate-pulse" />
            </div>
          </div>
        </div>
        
        <h1 className="text-7xl font-bold mb-4 glow-text">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-cyber-light">Security Breach Detected</h2>
        
        <p className="text-gray-400 mb-8">
          The resource you're looking for has been moved, deleted, or never existed in our secure perimeter.
        </p>
        
        <div className="cyber-border w-fit mx-auto">
          <Button size="lg" asChild>
            <Link to="/">Return to Secure Zone</Link>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-500">
          Error Code: {location.pathname.replace(/\//g, '')} | If you believe this is a mistake, please contact the system administrator.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
