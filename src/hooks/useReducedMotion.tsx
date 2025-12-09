import { useReducedMotion as useRM } from "framer-motion";

export function useReducedMotion() {
  // Wrap framer-motion hook to keep single place
  return useRM();
}
