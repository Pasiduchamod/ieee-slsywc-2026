import * as React from "react";

export function Form({ children, ...props }) {
  return <form {...props}>{children}</form>;
}

export function FormField({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function FormItem({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function FormLabel({ children, className = "" }) {
  return (
    <label className={`block font-medium mb-1 ${className}`}>{children}</label>
  );
}

export function FormControl({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function FormMessage({ children, className = "" }) {
  if (!children) return null;
  return <div className={`text-red-600 text-sm ${className}`}>{children}</div>;
}

export function FormDescription({ children }) {
  if (!children) return null;
  return <div className="text-xs text-gray-500 mb-1">{children}</div>;
}
