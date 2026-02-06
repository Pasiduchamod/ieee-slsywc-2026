import * as React from "react";

export function RadioGroup({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export const RadioGroupItem = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <input type="radio" ref={ref} className={`mr-2 ${className}`} {...props} />
  )
);
RadioGroupItem.displayName = "RadioGroupItem";
