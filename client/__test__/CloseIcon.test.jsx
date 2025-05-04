import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CloseIcon from "../components/CloseIcon";

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

describe("Close Icon Component", () => {
  it("renders without crashing", () => {
    render(<CloseIcon />);
  });

  it('displays the close icon image', () => {
    const { container } = render(<CloseIcon />);
    const closeIcon = container.querySelector('div');
    expect(closeIcon).toBeInTheDocument();
  });
});
