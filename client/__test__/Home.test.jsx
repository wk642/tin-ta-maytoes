import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "../components/Home";

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

describe("Home Component", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it('renders the "Tin Ta Maytoes" title', () => {
    render(<Home />);

    const headerText1 = screen.getByRole('heading', { name: /Tin/i });
    const headerText2 = screen.getByRole('heading', { name: /Ta/i });
    const headerText3 = screen.getByRole('heading', { name: /Maytoes/i });
    expect(headerText1).toBeInTheDocument();
    expect(headerText2).toBeInTheDocument();
    expect(headerText3).toBeInTheDocument();
  });
});
