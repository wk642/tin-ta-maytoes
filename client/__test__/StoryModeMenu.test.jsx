import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import StoryModeMenu from "../components/StoryModeMenu";

// jest is giving me the runaround with react-router, so going to mock it
// Mock react-router first 
jest.mock('react-router', () => ({
  // Replace the link with a mock
  Link: ({ children, to, ...props }) => (
    // replace the link with <a> for now and renders what's inside
    <a href={to} {...props} data-testid="mock-story-mode-menu">
      {children}
    </a>
  ),
}));

describe("Settings Component", () => {
  it("renders without crashing", () => {
    render(<StoryModeMenu />);
  });

  it("renders the back button", () => {
    render(<StoryModeMenu />);
    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeInTheDocument();
  });

  it("renders the title 'Menu'", () => {
    render(<StoryModeMenu />);
    const headerText1 = screen.getByRole('heading', { name: /Story Mode/i });
    const headerText2 = screen.getByRole('heading', { name: /Menu/i });
    expect(headerText1).toBeInTheDocument();
    expect(headerText2).toBeInTheDocument();
  });

  it('renders "Coming soon" text', () => {
    render(<StoryModeMenu />);
    const comingSoonText = screen.getByText(/Coming soon/i);
    expect(comingSoonText).toBeInTheDocument();
  });
});
