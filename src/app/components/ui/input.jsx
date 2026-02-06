import * as React from "react";

const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`border px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    {...props}
  />
));
Input.displayName = "Input";
export { Input };
