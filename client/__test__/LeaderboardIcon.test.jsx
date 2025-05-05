import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import LeaderboardIcon from "../components/LeaderboardIcon";

// jest is giving me the runaround with react-router, so going to mock it
// Mock react-router first 
jest.mock('react-router', () => ({
  // Replace the link with a mock
  Link: ({ children, to, ...props }) => (
    // replace the link with <a> for now and renders what's inside
    // also replacing the route
    <a href={to} {...props} data-testid={`nav-link-${to.replace('/', '')}`}>
      {children}
    </a>
  ),
}));

describe("Leaderboard Icon Component", () => {
  it("renders without crashing", () => {
    render(<LeaderboardIcon />);
  });

  it('renders both static and GIF images', () => {
    const { container } = render(<LeaderboardIcon />);
    const staticImage = container.querySelector('div > div:first-child'); 
    const gifImage = container.querySelector('div > div:last-child');     

    expect(staticImage).toBeInTheDocument();
    expect(gifImage).toBeInTheDocument();
  });

  it('renders the leaderboard link', () => {
    render(<LeaderboardIcon />);
    const settingsLink = screen.getByTestId('nav-link-leaderboard'); 
    expect(settingsLink).toBeInTheDocument();
  });
});
