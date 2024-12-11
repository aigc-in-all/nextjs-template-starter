import { config } from "@/config/config";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development"
}

export function getDomain(): string {
  try {
    const parsedUrl = new URL(config.baseUrl);
    return parsedUrl.hostname;
  } catch (error) {
    console.error("getDomain error:", error);
    return "";
  }
}