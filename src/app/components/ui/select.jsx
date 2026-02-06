import * as React from "react";

export function Select({ children, onValueChange, defaultValue, ...props }) {
  return (
    <select
      defaultValue={defaultValue}
      onChange={(e) => onValueChange && onValueChange(e.target.value)}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children, ...props }) {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
}

export function SelectTrigger({ children }) {
  return <>{children}</>;
}

export function SelectValue({ placeholder }) {
  return (
    <option value="" disabled>
      {placeholder}
    </option>
  );
}
