// Remove this problematic import
// import { cn } from "../../lib/utils";

// Use simple version without utils for now
const Card = ({ className, ...props }: any) => (
  <div
    className={`rounded-lg border border-gray-700 bg-gray-800 text-white shadow-lg ${className || ""}`}
    {...props}
  />
);

// ... rest of the card components without cn utility