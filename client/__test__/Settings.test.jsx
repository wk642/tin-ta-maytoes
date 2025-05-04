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

  it("renders the back button", () => {
    render(<Settings />);
    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeInTheDocument();
  });

  it("renders the title 'Settings'", () => {
    render(<Settings />);
    const headerText = screen.getByRole('heading', { name: /Settings/i });
    expect(headerText).toBeInTheDocument();
  });

  it("renders the Light Dark Mode button", () => {
    render(<Settings />);
    const lightDarkModeToggleButton = screen.getByAltText(/Light Dark Mode Toggle Button/i);
    expect(lightDarkModeToggleButton).toBeInTheDocument();
  });

  it("renders the volume up button", () => {
    render(<Settings />);
    const volumeUpButton = screen.getByAltText(/Volume Up Button/i);
    expect(volumeUpButton).toBeInTheDocument();
  });

  it("renders the volume down button", () => {
    render(<Settings />);
    const volumeDownButton = screen.getByAltText(/Volume Down Button/i);
    expect(volumeDownButton).toBeInTheDocument();
  });
});
