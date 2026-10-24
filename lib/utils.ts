import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(value: number): string {
  if (value >= 10000000) {
    const cr = value / 10000000;
    return `₹${cr.toFixed(2).replace(/\.00$/, "")} Cr`;
  }
  if (value >= 100000) {
    const lakh = value / 100000;
    return `₹${lakh.toFixed(2).replace(/\.00$/, "")} L`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatNumberINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}
