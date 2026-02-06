import * as React from "react";

export function AlertDialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {children}
    </div>
  );
}

export function AlertDialogTrigger({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export function AlertDialogContent({ children }) {
  return (
    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
      {children}
    </div>
  );
}

export function AlertDialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function AlertDialogTitle({ children }) {
  return <h2 className="text-lg font-bold mb-2">{children}</h2>;
}

export function AlertDialogDescription({ children }) {
  return <p className="mb-4 text-gray-700">{children}</p>;
}

export function AlertDialogFooter({ children }) {
  return <div className="mt-4 flex justify-end gap-2">{children}</div>;
}

export function AlertDialogAction({ children, ...props }) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded" {...props}>
      {children}
    </button>
  );
}

export function AlertDialogCancel({ children, ...props }) {
  return (
    <button className="px-4 py-2 bg-gray-300 text-black rounded" {...props}>
      {children}
    </button>
  );
}
