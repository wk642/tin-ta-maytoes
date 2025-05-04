import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameLayout from '../components/GameLayout';

// jest is giving me the runaround with react-router, so going to mock it
// Mock react-router first 
jest.mock('react-router', () => ({
  // Replace the link with a mock
  Link: ({ children, to, ...props }) => (
    // replace the link with <a> for now and renders what's inside and the route
    <a href={to} {...props} data-testid={`nav-link-${to.replace('/', '')}`}>
      {children}
    </a>
  ),
}));

describe('GameLayout Component', () => {
  it('renders with the background color', () => {
    render(<GameLayout />);
    const bgimageDiv = screen.getByTestId('bg-image');
    expect(bgimageDiv).toBeInTheDocument();
    expect(bgimageDiv).toHaveClass('bg-orange-300');
  });
});
