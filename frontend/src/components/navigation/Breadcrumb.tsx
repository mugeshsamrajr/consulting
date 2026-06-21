// src/components/navigation/Breadcrumb.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  /** Optional: Override the fallback 'Home' text string if desired */
  homeLabel?: string;
  /** Optional: Pass custom styles or colors to the container wrapper */
  className?: string;
}

export default function Breadcrumb({ homeLabel = "Home", className = "" }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Split URL paths into clean filter arrays (e.g., "/services/consulting" -> ["services", "consulting"])
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 px-3 py-1 rounded-md backdrop-blur-sm ${className}`}
    >
      {/* Absolute Root Home Link Anchor */}
      <Link 
        href="/" 
        className="text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
      >
        {homeLabel}
      </Link>

      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        
        // Dynamically stitch route strings together piece by piece
        const routePath = `/${pathSegments.slice(0, index + 1).join("/")}`;
        
        // Clean up dashes or encoded characters for clean screen typography (e.g., "cloud-native" -> "Cloud Native")
        const formattedLabel = decodeURIComponent(segment)
          .replace(/-/g, " ");

        return (
          <React.Fragment key={routePath}>
            {/* Visual Separator */}
            <span className="text-slate-500 select-none" aria-hidden="true">/</span>
            
            {isLast ? (
              // Current active leaf text label node (non-clickable)
              <span className="text-slate-300 font-extrabold truncate max-w-[160px] sm:max-w-xs">
                {formattedLabel}
              </span>
            ) : (
              // Mid-tier parent directory structural routing anchors
              <Link
                href={routePath}
                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-150"
              >
                {formattedLabel}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}