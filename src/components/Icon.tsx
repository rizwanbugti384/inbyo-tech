import React from "react";
import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  // Defensive check: look up the icon dynamically in the Lucide icon package
  // Lucide exports icons as capitalized CamelCase names, e.g. "ArrowLeftRight", "Terminal", "Code2"
  const LucideIcon = (Icons as any)[name];
  
  if (!LucideIcon) {
    // Return a safe fallback component so the app never crashes
    const Fallback = Icons.Code;
    return <Fallback className={className} size={size} />;
  }
  
  return <LucideIcon className={className} size={size} />;
}
