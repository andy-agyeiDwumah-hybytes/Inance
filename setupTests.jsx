import "@testing-library/jest-dom";
import { vi } from "vitest";

// react-owl-carousel may not be compatible with the Node.js environment used during testing
// mock the react-owl-carousel library to prevent this error during tests
vi.mock("react-owl-carousel", () => ({
  default: ({ children }) => <div>{children}</div>,
}));