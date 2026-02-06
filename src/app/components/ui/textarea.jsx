import * as React from "react";

export const Textarea = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
