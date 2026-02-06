import * as React from "react";

export const Checkbox = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <input
      type="checkbox"
      ref={ref}
      className={`mr-2 ${className}`}
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";
