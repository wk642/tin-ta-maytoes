import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Settings from "../components/Settings";

// jest is giving me the runaround with react-router, so going to mock it
// Mock react-router first 
jest.mock('react-router', () => ({
  // Replace the link with a mock
  Link: ({ children, to, ...props }) => (
    // replace the link with <a> for now and renders what's inside
    <a href={to} {...props} data-testid="mock-settings">
      {children}
    </a>
  ),
}));

describe("Settings Component", () => {
  it("renders without crashing", () => {
    render(<Settings />);
  });
});
