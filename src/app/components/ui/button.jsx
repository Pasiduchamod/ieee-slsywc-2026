import * as React from "react";

const Button = React.forwardRef(({ className = "", ...props }, ref) => (
  <button
    ref={ref}
    className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    {...props}
  />
));
Button.displayName = "Button";
export { Button };
